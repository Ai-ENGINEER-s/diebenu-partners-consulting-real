import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialisation de Resend (la clé doit être dans process.env.RESEND_API_KEY)
const resend = new Resend(process.env.RESEND_API_KEY);

// ============================================
// SYSTÈME ANTI-SPAM ULTRA-RENFORCÉ (Adapté au nom et email)
// ============================================

interface SpamCheckResult {
  isSpam: boolean;
  reason?: string;
  score: number;
}

interface SpamData {
  fullName: string;
  email: string;
  honeypot?: string;
  submissionTime?: number;
}

// Domaines email suspects
const SUSPICIOUS_EMAIL_DOMAINS = [
  'tempmail', 'guerrillamail', '10minutemail', 'throwaway',
  'mailinator', 'maildrop', 'yopmail', 'trashmail',
  'fakeinbox', 'dispostable', 'getnada', 'sharklasers'
];

/**
 * Détecte si une chaîne est aléatoire/gibberish
 */
function isGibberish(text: string): boolean {
  const cleanText = text.replace(/[^a-zA-Z]/g, '').toLowerCase();

  if (cleanText.length < 3) return false;

  const vowels = cleanText.match(/[aeiouy]/g) || [];
  const consonants = cleanText.match(/[bcdfghjklmnpqrstvwxz]/g) || [];

  const vowelRatio = vowels.length / cleanText.length;
  const consonantRatio = consonants.length / cleanText.length;

  // Trop de voyelles ou trop de consonnes
  if (vowelRatio < 0.15 || vowelRatio > 0.7) return true;
  if (consonantRatio > 0.85) return true;

  // Trop de répétitions de caractères similaires
  if (/[bcdfghjklmnpqrstvwxz]{4,}/i.test(cleanText)) return true;
  if (/[aeiouy]{4,}/i.test(cleanText)) return true;

  // Mélange de majuscules/minuscules suspect
  const hasWeirdCase = /([A-Z][a-z]){4,}|([a-z][A-Z]){4,}/.test(text);
  if (hasWeirdCase) return true;

  // Pattern aléatoire (ex: AbCdEf)
  const randomPattern = /[A-Z]{2}[a-z]{2}[A-Z]{2}/;
  if (randomPattern.test(text) && text.length < 30) return true;

  return false;
}

/**
 * Analyse anti-spam ULTRA-RENFORCÉE pour Nom et Email
 */
function analyzeSpam(data: SpamData): SpamCheckResult {
  let spamScore = 0;
  const reasons: string[] = [];

  // 1. HONEYPOT
  if (data.honeypot && data.honeypot.trim().length > 0) {
    return {
      isSpam: true,
      reason: 'Honeypot field filled (bot detected)',
      score: 100
    };
  }

  // 2. DÉTECTION DE GIBBERISH DANS LE NOM
  if (isGibberish(data.fullName)) {
    spamScore += 70;
    reasons.push('Name appears to be random gibberish');
  }

  const nameWords = data.fullName.trim().split(/\s+/);
  // Nom à un seul mot long (souvent un bot)
  if (nameWords.length === 1 && data.fullName.length > 8) {
    spamScore += 40;
    reasons.push('Single-word name (suspicious)');
  }

  // Mélange de majuscules/minuscules dans le nom
  if (/[a-z][A-Z]/.test(data.fullName) && data.fullName.length > 10) {
    spamScore += 35;
    reasons.push('Random case mixing in name');
  }

  // Chiffres dans le nom
  if (/\d{3,}/.test(data.fullName)) {
    spamScore += 30;
    reasons.push('Name contains too many numbers');
  }

  // Caractères invalides
  if (/[^a-zA-ZÀ-ÿ\s'-]/.test(data.fullName)) {
    spamScore += 25;
    reasons.push('Name contains invalid characters');
  }

  // 3. VALIDATION EMAIL
  const emailDomain = data.email.split('@')[1]?.toLowerCase() || '';

  if (SUSPICIOUS_EMAIL_DOMAINS.some(domain => emailDomain.includes(domain))) {
    spamScore += 50;
    reasons.push('Disposable email domain');
  }

  if (/[^a-zA-Z0-9@.\-_+]/.test(data.email)) {
    spamScore += 30;
    reasons.push('Invalid characters in email');
  }

  // 4. TEMPS DE SOUMISSION
  if (data.submissionTime && data.submissionTime < 3000) {
    spamScore += 40;
    reasons.push('Form submitted too quickly');
  }

  // 5. COHÉRENCE NOM/EMAIL
  const nameParts = data.fullName.toLowerCase().split(/\s+/);
  const emailUsername = data.email.split('@')[0].toLowerCase();
  const hasNameInEmail = nameParts.some(part =>
    part.length > 2 && emailUsername.includes(part)
  );

  // Le nom n'est pas dans l'email (si l'email n'est pas lui-même du gibberish)
  if (!hasNameInEmail && !isGibberish(emailUsername)) {
    spamScore += 10;
    reasons.push('Name and email mismatch');
  }

  // DÉCISION FINALE
  const isSpam = spamScore >= 40;

  return {
    isSpam,
    reason: reasons.join(' | '),
    score: Math.min(spamScore, 100)
  };
}

/**
 * Validation stricte des données
 */
function validateInput(data: any): { valid: boolean; error?: string } {
  if (!data.fullName || !data.email) {
    return { valid: false, error: 'Champs requis manquants: Nom complet et Email' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { valid: false, error: 'Format d\'email invalide' };
  }

  if (data.fullName.trim().length < 2 || data.fullName.trim().length > 100) {
    return { valid: false, error: 'Longueur du nom invalide (2-100 caractères)' };
  }

  return { valid: true };
}

/**
 * Nettoyer le HTML
 */
function sanitizeHTML(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/\n/g, '<br/>');
}

// ============================================
// API ROUTE HANDLER
// ============================================

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // Seuls les champs Nom complet et Email sont attendus
    const { fullName, email, honeypot, submissionTime } = body;

    // 1. VALIDATION
    const validation = validateInput({ fullName, email });
    if (!validation.valid) {
      console.log('⚠️ Validation échouée:', validation.error);
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    // 2. ANALYSE ANTI-SPAM
    const spamCheck = analyzeSpam({
      fullName,
      email,
      honeypot,
      submissionTime
    });

    // Log détaillé
    console.log('🔍 Analyse Spam:', {
      email,
      score: spamCheck.score,
      isSpam: spamCheck.isSpam,
      reason: spamCheck.reason
    });

    // SI SPAM DÉTECTÉ
    if (spamCheck.isSpam) {
      console.log('🚫 SPAM BLOQUÉ:', {
        name: fullName,
        email,
        score: spamCheck.score,
        reason: spamCheck.reason
      });

      // Retourner succès fictif pour tromper les bots
      return NextResponse.json({
        success: true,
        message: 'Soumission reçue et filtrée'
      });
    }

    // 3. SOUMISSION LÉGITIME - ENVOYER LES EMAILS
    const sanitizedName = sanitizeHTML(fullName);
    const sanitizedEmail = sanitizeHTML(email);

    // Email d'alerte pour le propriétaire du site
    const emailToBoss = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;padding:20px;background:#ffffff;color:#333;font-size:16px;line-height:1.6;">
        <div style="background:#e8f5e9;border-left:4px solid #4caf50;padding:15px;margin-bottom:20px;">
          <h2 style="color:#2e7d32;margin:0 0 10px 0;">✅ Nouvelle Soumission - Légitime</h2>
          <p style="margin:0;font-size:13px;color:#555;">Score de confiance: ${100 - spamCheck.score}% | Tous les contrôles anti-spam passés</p>
        </div>

        <h2 style="color:#222;margin-bottom:10px;">👤 Nouveau Contact (Nom & Email)</h2>

        <table style="margin-top:15px;margin-bottom:15px;border-collapse:collapse;width:100%;">
          <tr><td style="padding:10px;background:#f5f5f5;font-weight:bold;width:30%;">Nom complet:</td><td style="padding:10px;border-bottom:1px solid #ddd;">${sanitizedName}</td></tr>
          <tr><td style="padding:10px;background:#f5f5f5;font-weight:bold;">Email:</td><td style="padding:10px;border-bottom:1px solid #ddd;">${sanitizedEmail}</td></tr>
        </table>

        <p style="margin-top:20px;font-size:15px;color:#ff5722;font-weight:bold;">
            Action requise : Contacter cette personne directement.
        </p>

        <div style="margin-top:30px;padding:15px;background:#fff3e0;border-radius:8px;">
          <p style="margin:0;font-size:13px;color:#e65100;">
            <strong>🛡️ Protection Anti-Spam Active</strong><br/>
            Ce contact est considéré comme légitime par le système de filtrage.
          </p>
        </div>
      </div>
    `;

    // Email de confirmation pour le client (ADAPTÉ AU TÉLÉCHARGEMENT DU PDF)
    const emailToClient = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;padding:20px;background:#ffffff;color:#333;font-size:16px;line-height:1.6;">
        <h2 style="color:#ff5722;margin-bottom:10px;">Votre Catalogue de Formation DIEBENU & PARTNERS 2026</h2>
        <p>Cher(e) ${sanitizedName},</p>
        <p>Nous vous remercions sincèrement d'avoir téléchargé notre Catalogue de Formation 2026 - *Building a better world, together*.</p>
        
        <p>Votre intérêt pour nos domaines d'expertise (Gouvernance, Finance, Digitalisation, Gestion de Projets et Financements) est important pour nous.</p>

        <p>Un de nos experts va analyser vos coordonnées et vous recontactera personnellement à l'adresse ${sanitizedEmail} dans les plus brefs délais pour échanger sur vos priorités de formation pour 2026.</p>

        <div style="margin:20px 0;padding:15px;background:#f5f5f5;border-radius:8px;font-size:14px;">
          <p style="margin:0;">
            <strong>Vos informations de contact :</strong><br/>
            Nom : ${sanitizedName}<br/>
            Email : ${sanitizedEmail}
          </p>
        </div>

        <p>Nous sommes engagés à vous aider à co-construire un avenir plus solide et plus ambitieux, avec engagement et détermination.</p>
        
        <p style="margin-top:25px;">Cordialement,<br/><strong>L'équipe DIEBENU & PARTNERS</strong></p>
      </div>
    `;

    // Envoyer les emails avec Resend
    await resend.emails.send({
      from: 'Diebenu Consulting <contact@diebenu.com>',
      to: ['contact@diebenu.com'], // Remplacez par votre adresse
      subject: `✅ [NOUVEAU CONTACT LÉGITIME] De ${fullName} (${email}) - Téléchargement Catalogue`,
      html: emailToBoss,
      replyTo: email
    });

    await resend.emails.send({
      from: 'Diebenu Consulting <contact@diebenu.com>',
      to: [email],
      subject: '📩 Confirmation de réception de vos coordonnées - DIEBENU & PARTNERS',
      html: emailToClient
    });

    console.log('✅ Email légitime envoyé:', {
      email,
      spamScore: spamCheck.score,
      confidence: 100 - spamCheck.score
    });

    return NextResponse.json({
      success: true,
      message: 'Coordonnées reçues avec succès. Un email de confirmation a été envoyé.'
    });

  } catch (error: any) {
    console.error('❌ Erreur:', error);
    return NextResponse.json(
      { error: 'Erreur serveur. Veuillez réessayer ultérieurement.' },
      { status: 500 }
    );
  }
}

// Gérer les requêtes OPTIONS pour CORS
export async function OPTIONS(request: NextRequest) {
  return NextResponse.json({}, { status: 200 });
}
