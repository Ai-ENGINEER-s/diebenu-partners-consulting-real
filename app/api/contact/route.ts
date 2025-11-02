// import { NextRequest, NextResponse } from 'next/server';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// // ============================================
// // SYSTÈME ANTI-SPAM ULTRA-RENFORCÉ
// // ============================================

// interface SpamCheckResult {
//   isSpam: boolean;
//   reason?: string;
//   score: number;
// }

// // Mots-clés spam
// const SPAM_KEYWORDS = [
//   'viagra', 'cialis', 'casino', 'lottery', 'winner', 'congratulations',
//   'click here', 'buy now', 'limited time', 'act now', 'earn money',
//   'make money fast', 'work from home', 'bitcoin', 'crypto', 'investment opportunity',
//   'nigerian prince', 'inheritance', 'million dollars', 'free money',
//   'weight loss', 'diet pills', 'enlarge', 'dating', 'singles',
//   'refinance', 'mortgage', 'credit card', 'loan', 'debt',
//   'sex', 'xxx', 'adult', 'porn', 'nude', 'meet singles'
// ];

// // Domaines email suspects
// const SUSPICIOUS_EMAIL_DOMAINS = [
//   'tempmail', 'guerrillamail', '10minutemail', 'throwaway',
//   'mailinator', 'maildrop', 'yopmail', 'trashmail',
//   'fakeinbox', 'dispostable', 'getnada', 'sharklasers'
// ];

// /**
//  * Détecte si une chaîne est aléatoire/gibberish
//  */
// function isGibberish(text: string): boolean {
//   const cleanText = text.replace(/[^a-zA-Z]/g, '').toLowerCase();
  
//   if (cleanText.length < 3) return false;
  
//   const vowels = cleanText.match(/[aeiouy]/g) || [];
//   const consonants = cleanText.match(/[bcdfghjklmnpqrstvwxz]/g) || [];
  
//   const vowelRatio = vowels.length / cleanText.length;
//   const consonantRatio = consonants.length / cleanText.length;
  
//   if (vowelRatio < 0.15 || vowelRatio > 0.7) return true;
//   if (consonantRatio > 0.85) return true;
  
//   if (/[bcdfghjklmnpqrstvwxz]{4,}/i.test(cleanText)) return true;
//   if (/[aeiouy]{4,}/i.test(cleanText)) return true;
  
//   const hasWeirdCase = /([A-Z][a-z]){4,}|([a-z][A-Z]){4,}/.test(text);
//   if (hasWeirdCase) return true;
  
//   const randomPattern = /[A-Z]{2}[a-z]{2}[A-Z]{2}/;
//   if (randomPattern.test(text) && text.length < 30) return true;
  
//   return false;
// }

// /**
//  * Détecte si le texte contient principalement des caractères non-alphabétiques
//  */
// function hasExcessiveNonAlpha(text: string): boolean {
//   const alphaChars = text.match(/[a-zA-Z]/g) || [];
//   const nonAlphaChars = text.match(/[^a-zA-Z\s]/g) || [];
  
//   if (text.length > 10 && alphaChars.length < text.length * 0.5) {
//     return true;
//   }
  
//   return false;
// }

// /**
//  * Vérifie si le message contient des mots réels
//  */
// function hasRealWords(text: string): boolean {
//   const commonWords = [
//     'the', 'is', 'at', 'which', 'on', 'a', 'an', 'as', 'are', 'was', 'were',
//     'been', 'be', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would',
//     'could', 'should', 'may', 'might', 'must', 'can', 'about', 'hello', 'hi',
//     'thanks', 'thank', 'please', 'help', 'need', 'want', 'like', 'know',
//     'bonjour', 'merci', 'besoin', 'aide', 'voudrais', 'projet', 'contact',
//     'information', 'question', 'service', 'consulting', 'conseil', 'entreprise',
//     'business', 'company', 'stratégie', 'strategy', 'développement', 'growth'
//   ];
  
//   const words = text.toLowerCase().split(/\s+/);
//   const realWordsCount = words.filter(word => 
//     commonWords.includes(word) || word.length > 8
//   ).length;
  
//   return realWordsCount > 0;
// }

// /**
//  * Analyse anti-spam ULTRA-RENFORCÉE
//  */
// function analyzeSpam(data: {
//   fullName: string;
//   email: string;
//   subject: string;
//   message: string;
//   honeypot?: string;
//   submissionTime?: number;
// }): SpamCheckResult {
//   let spamScore = 0;
//   const reasons: string[] = [];

//   // 1. HONEYPOT
//   if (data.honeypot && data.honeypot.trim().length > 0) {
//     return {
//       isSpam: true,
//       reason: 'Honeypot field filled (bot detected)',
//       score: 100
//     };
//   }

//   // 2. DÉTECTION DE GIBBERISH DANS LE NOM
//   if (isGibberish(data.fullName)) {
//     spamScore += 70;
//     reasons.push('Name appears to be random gibberish');
//   }

//   const nameWords = data.fullName.trim().split(/\s+/);
//   if (nameWords.length === 1 && data.fullName.length > 8) {
//     spamScore += 40;
//     reasons.push('Single-word name (suspicious)');
//   }

//   if (/[a-z][A-Z]/.test(data.fullName) && data.fullName.length > 10) {
//     spamScore += 35;
//     reasons.push('Random case mixing in name');
//   }

//   if (/\d{3,}/.test(data.fullName)) {
//     spamScore += 30;
//     reasons.push('Name contains too many numbers');
//   }

//   if (/[^a-zA-ZÀ-ÿ\s'-]/.test(data.fullName)) {
//     spamScore += 25;
//     reasons.push('Name contains invalid characters');
//   }

//   // 3. DÉTECTION DE GIBBERISH DANS LE SUJET
//   if (isGibberish(data.subject)) {
//     spamScore += 40;
//     reasons.push('Subject appears to be gibberish');
//   }

//   // 4. DÉTECTION DE GIBBERISH DANS LE MESSAGE
//   if (isGibberish(data.message)) {
//     spamScore += 60;
//     reasons.push('Message appears to be random gibberish');
//   }

//   if (!hasRealWords(data.message)) {
//     spamScore += 50;
//     reasons.push('Message contains no real words');
//   }

//   if (data.message.trim().length < 50) {
//     spamScore += 30;
//     reasons.push('Message too short');
//   }

//   if (hasExcessiveNonAlpha(data.message)) {
//     spamScore += 40;
//     reasons.push('Message has excessive non-alphabetic characters');
//   }

//   // 5. VALIDATION EMAIL
//   const emailDomain = data.email.split('@')[1]?.toLowerCase() || '';
  
//   if (SUSPICIOUS_EMAIL_DOMAINS.some(domain => emailDomain.includes(domain))) {
//     spamScore += 50;
//     reasons.push('Disposable email domain');
//   }

//   if (/[^a-zA-Z0-9@.\-_+]/.test(data.email)) {
//     spamScore += 30;
//     reasons.push('Invalid characters in email');
//   }

//   // 6. TEMPS DE SOUMISSION
//   if (data.submissionTime && data.submissionTime < 3000) {
//     spamScore += 40;
//     reasons.push('Form submitted too quickly');
//   }

//   // 7. MOTS-CLÉS SPAM
//   const messageLower = data.message.toLowerCase();
//   const subjectLower = data.subject.toLowerCase();
//   const spamKeywordsFound = SPAM_KEYWORDS.filter(keyword => 
//     messageLower.includes(keyword.toLowerCase()) || subjectLower.includes(keyword.toLowerCase())
//   );
  
//   if (spamKeywordsFound.length > 0) {
//     spamScore += Math.min(spamKeywordsFound.length * 25, 75);
//     reasons.push(`Spam keywords: ${spamKeywordsFound.join(', ')}`);
//   }

//   // 8. PATTERNS SUSPECTS
//   const urlMatches = data.message.match(/https?:\/\/[^\s]+/gi);
//   if (urlMatches && urlMatches.length > 2) {
//     spamScore += 35;
//     reasons.push(`Too many URLs (${urlMatches.length})`);
//   }

//   if (/(.)\1{5,}/.test(data.message)) {
//     spamScore += 20;
//     reasons.push('Repeated characters detected');
//   }

//   const uppercaseRatio = (data.message.match(/[A-Z]/g) || []).length / data.message.length;
//   if (uppercaseRatio > 0.5 && data.message.length > 20) {
//     spamScore += 30;
//     reasons.push('Too many uppercase letters');
//   }

//   // 9. COHÉRENCE NOM/EMAIL
//   const nameParts = data.fullName.toLowerCase().split(/\s+/);
//   const emailUsername = data.email.split('@')[0].toLowerCase();
//   const hasNameInEmail = nameParts.some(part => 
//     part.length > 2 && emailUsername.includes(part)
//   );
  
//   if (!hasNameInEmail && !isGibberish(emailUsername)) {
//     spamScore += 10;
//     reasons.push('Name and email mismatch');
//   }

//   // DÉCISION FINALE
//   const isSpam = spamScore >= 40;

//   return {
//     isSpam,
//     reason: reasons.join(' | '),
//     score: Math.min(spamScore, 100)
//   };
// }

// /**
//  * Validation stricte des données
//  */
// function validateInput(data: any): { valid: boolean; error?: string } {
//   if (!data.fullName || !data.email || !data.subject || !data.message) {
//     return { valid: false, error: 'Champs requis manquants' };
//   }

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(data.email)) {
//     return { valid: false, error: 'Format d\'email invalide' };
//   }

//   if (data.fullName.trim().length < 2 || data.fullName.trim().length > 100) {
//     return { valid: false, error: 'Longueur du nom invalide' };
//   }

//   if (data.subject.trim().length < 3 || data.subject.trim().length > 200) {
//     return { valid: false, error: 'Longueur du sujet invalide' };
//   }

//   if (data.message.trim().length < 50 || data.message.trim().length > 5000) {
//     return { valid: false, error: 'Le message doit contenir entre 50 et 5000 caractères' };
//   }

//   return { valid: true };
// }

// /**
//  * Nettoyer le HTML
//  */
// function sanitizeHTML(text: string): string {
//   return text
//     .replace(/&/g, '&amp;')
//     .replace(/</g, '&lt;')
//     .replace(/>/g, '&gt;')
//     .replace(/"/g, '&quot;')
//     .replace(/'/g, '&#039;')
//     .replace(/\n/g, '<br/>');
// }

// // ============================================
// // API ROUTE HANDLER
// // ============================================

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();
//     const { fullName, email, subject, message, honeypot, submissionTime } = body;

//     // 1. VALIDATION
//     const validation = validateInput({ fullName, email, subject, message });
//     if (!validation.valid) {
//       console.log('⚠️ Validation échouée:', validation.error);
//       return NextResponse.json(
//         { error: validation.error },
//         { status: 400 }
//       );
//     }

//     // 2. ANALYSE ANTI-SPAM
//     const spamCheck = analyzeSpam({
//       fullName,
//       email,
//       subject,
//       message,
//       honeypot,
//       submissionTime
//     });

//     // Log détaillé
//     console.log('🔍 Analyse Spam:', {
//       email,
//       score: spamCheck.score,
//       isSpam: spamCheck.isSpam,
//       reason: spamCheck.reason
//     });

//     // SI SPAM DÉTECTÉ
//     if (spamCheck.isSpam) {
//       console.log('🚫 SPAM BLOQUÉ:', {
//         name: fullName,
//         email,
//         score: spamCheck.score,
//         reason: spamCheck.reason
//       });

//       // Retourner succès fictif pour tromper les bots
//       return NextResponse.json({ 
//         success: true,
//         message: 'Message reçu'
//       });
//     }

//     // 3. MESSAGE LÉGITIME - ENVOYER LES EMAILS
//     const sanitizedName = sanitizeHTML(fullName);
//     const sanitizedEmail = sanitizeHTML(email);
//     const sanitizedSubject = sanitizeHTML(subject);
//     const sanitizedMessage = sanitizeHTML(message);

//     const emailToBoss = `
//       <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;padding:20px;background:#ffffff;color:#333;font-size:16px;line-height:1.6;">
//         <div style="background:#e8f5e9;border-left:4px solid #4caf50;padding:15px;margin-bottom:20px;">
//           <h2 style="color:#2e7d32;margin:0 0 10px 0;">✅ Message Vérifié - Légitime</h2>
//           <p style="margin:0;font-size:13px;color:#555;">Score de confiance: ${100 - spamCheck.score}% | Tous les contrôles anti-spam passés</p>
//         </div>
        
//         <h2 style="color:#222;margin-bottom:10px;">📥 Nouvelle Demande de Contact</h2>
//         <p>Vous avez reçu un nouveau message depuis <strong>Diebenu Consulting</strong>:</p>
        
//         <table style="margin-top:15px;margin-bottom:15px;border-collapse:collapse;width:100%;">
//           <tr><td style="padding:10px;background:#f5f5f5;font-weight:bold;width:30%;">Nom complet:</td><td style="padding:10px;border-bottom:1px solid #ddd;">${sanitizedName}</td></tr>
//           <tr><td style="padding:10px;background:#f5f5f5;font-weight:bold;">Email:</td><td style="padding:10px;border-bottom:1px solid #ddd;">${sanitizedEmail}</td></tr>
//           <tr><td style="padding:10px;background:#f5f5f5;font-weight:bold;">Sujet:</td><td style="padding:10px;border-bottom:1px solid #ddd;">${sanitizedSubject}</td></tr>
//         </table>
        
//         <p style="margin-top:20px;"><strong>Message:</strong></p>
//         <blockquote style="margin:10px 0;padding:20px;background:#f9f9f9;border-left:4px solid #ff5722;font-size:15px;">
//           ${sanitizedMessage}
//         </blockquote>
        
//         <div style="margin-top:30px;padding:15px;background:#fff3e0;border-radius:8px;">
//           <p style="margin:0;font-size:13px;color:#e65100;">
//             <strong>🛡️ Protection Anti-Spam Active</strong><br/>
//             Ce message a passé tous les contrôles de sécurité et provient d'une personne réelle.
//           </p>
//         </div>
//       </div>
//     `;

//     const emailToClient = `
//       <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;padding:20px;background:#ffffff;color:#333;font-size:16px;line-height:1.6;">
//         <h2 style="color:#ff5722;margin-bottom:10px;">Merci de nous avoir contactés !</h2>
//         <p>Cher(e) ${sanitizedName},</p>
//         <p>Merci d'avoir contacté <strong>Diebenu Consulting</strong>. Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.</p>
        
//         <div style="margin:20px 0;padding:15px;background:#f5f5f5;border-radius:8px;">
//           <p style="margin:0 0 5px 0;"><strong>Sujet :</strong> ${sanitizedSubject}</p>
//           <p style="margin:0;"><strong>Votre message :</strong></p>
//           <blockquote style="margin:10px 0;padding:15px;background:#ffffff;border-left:4px solid #ff5722;">
//             ${sanitizedMessage}
//           </blockquote>
//         </div>
        
//         <p>Nous apprécions votre intérêt et avons hâte d'échanger avec vous.</p>
//         <p style="margin-top:25px;">Cordialement,<br/><strong>L'équipe Diebenu Consulting</strong></p>
//       </div>
//     `;

//     // Envoyer les emails avec Resend
//     await resend.emails.send({
//       from: 'Diebenu Consulting <contact@diebenu.com>',
//       to: ['contact@diebenu.com'],
//       subject: `✅ [LÉGITIME] ${subject} - De ${fullName}`,
//       html: emailToBoss,
//       replyTo: email
//     });

//     await resend.emails.send({
//       from: 'Diebenu Consulting <contact@diebenu.com>',
//       to: [email],
//       subject: '📩 Merci de votre message - Diebenu Consulting',
//       html: emailToClient
//     });

//     console.log('✅ Email légitime envoyé:', { 
//       email, 
//       spamScore: spamCheck.score,
//       confidence: 100 - spamCheck.score
//     });

//     return NextResponse.json({ 
//       success: true,
//       message: 'Message envoyé avec succès'
//     });

//   } catch (error: any) {
//     console.error('❌ Erreur:', error);
//     return NextResponse.json(
//       { error: 'Erreur serveur. Veuillez réessayer ultérieurement.' },
//       { status: 500 }
//     );
//   }
// }

// // Gérer les requêtes OPTIONS pour CORS
// export async function OPTIONS(request: NextRequest) {
//   return NextResponse.json({}, { status: 200 });
// }





// // version fonctionnel sans soucis juste j'ai modifie le design 

// import { NextRequest, NextResponse } from 'next/server';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// // ============================================
// // SYSTÈME ANTI-SPAM ULTRA-SIMPLIFIÉ
// // Focus uniquement sur les liens suspects
// // ============================================

// interface SpamCheckResult {
//   isSpam: boolean;
//   reason?: string;
//   score: number;
// }

// // Mots-clés spam critiques (très réduit)
// const CRITICAL_SPAM_KEYWORDS = [
//   'viagra', 'cialis', 'casino', 'lottery', 'bitcoin', 'crypto',
//   'nigerian prince', 'inheritance', 'million dollars',
//   'xxx', 'porn', 'nude'
// ];

// function analyzeSpam(data: {
//   fullName: string;
//   email: string;
//   subject: string;
//   message: string;
//   honeypot?: string;
//   submissionTime?: number;
// }): SpamCheckResult {
//   let spamScore = 0;
//   const reasons: string[] = [];

//   // 1. HONEYPOT - Seule détection automatique de bot
//   if (data.honeypot && data.honeypot.trim().length > 0) {
//     return { isSpam: true, reason: 'Honeypot field filled (bot detected)', score: 100 };
//   }

//   // 2. LIENS SUSPECTS - Focus principal
//   const urlMatches = data.message.match(/https?:\/\/[^\s]+/gi);
//   if (urlMatches && urlMatches.length > 5) { 
//     spamScore += 80; 
//     reasons.push(`Trop de liens (${urlMatches.length})`); 
//   } else if (urlMatches && urlMatches.length > 3) {
//     spamScore += 50;
//     reasons.push(`Nombreux liens détectés (${urlMatches.length})`);
//   }

//   // 3. Mots-clés spam CRITIQUES uniquement
//   const messageLower = data.message.toLowerCase();
//   const subjectLower = data.subject.toLowerCase();
//   const criticalSpamFound = CRITICAL_SPAM_KEYWORDS.filter(keyword => 
//     messageLower.includes(keyword) || subjectLower.includes(keyword)
//   );
//   if (criticalSpamFound.length > 0) { 
//     spamScore += 60; 
//     reasons.push(`Mots-clés suspects: ${criticalSpamFound.join(', ')}`); 
//   }

//   // 4. Soumission trop rapide (bot)
//   if (data.submissionTime && data.submissionTime < 2000) { 
//     spamScore += 40; 
//     reasons.push('Soumission trop rapide'); 
//   }

//   // Seuil très élevé pour bloquer (80 au lieu de 40)
//   return { 
//     isSpam: spamScore >= 80, 
//     reason: reasons.join(' | '), 
//     score: Math.min(spamScore, 100) 
//   };
// }

// function validateInput(data: any): { valid: boolean; error?: string } {
//   // Validation minimale - juste vérifier que les champs existent
//   if (!data.fullName || !data.email || !data.subject || !data.message) {
//     return { valid: false, error: 'Veuillez remplir tous les champs' };
//   }
  
//   // Email - format basique uniquement
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(data.email)) {
//     return { valid: false, error: 'Format d\'email invalide' };
//   }
  
//   // Longueurs minimales très courtes
//   if (data.fullName.trim().length < 2) {
//     return { valid: false, error: 'Le nom est trop court' };
//   }
  
//   if (data.subject.trim().length < 2) {
//     return { valid: false, error: 'Le sujet est trop court' };
//   }
  
//   if (data.message.trim().length < 5) {
//     return { valid: false, error: 'Le message est trop court' };
//   }
  
//   // Longueurs maximales (pour éviter les attaques)
//   if (data.fullName.trim().length > 100) {
//     return { valid: false, error: 'Le nom est trop long' };
//   }
  
//   if (data.subject.trim().length > 200) {
//     return { valid: false, error: 'Le sujet est trop long' };
//   }
  
//   if (data.message.trim().length > 5000) {
//     return { valid: false, error: 'Le message est trop long' };
//   }
  
//   return { valid: true };
// }

// // ============================================
// // API ROUTE HANDLER
// // ============================================

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();
//     const { fullName, email, subject, message, honeypot, submissionTime } = body;

//     const validation = validateInput({ fullName, email, subject, message });
//     if (!validation.valid) {
//       console.log('⚠️ Validation échouée:', validation.error);
//       return NextResponse.json({ error: validation.error }, { status: 400 });
//     }

//     const spamCheck = analyzeSpam({ fullName, email, subject, message, honeypot, submissionTime });
//     console.log('🔍 Analyse Spam:', { email, score: spamCheck.score, isSpam: spamCheck.isSpam, reason: spamCheck.reason });

//     if (spamCheck.isSpam) {
//       console.log('🚫 SPAM BLOQUÉ:', { name: fullName, email, score: spamCheck.score, reason: spamCheck.reason });
//       // Réponse identique pour ne pas alerter les bots
//       return NextResponse.json({ success: true, message: 'Message reçu' });
//     }

//     const messageHtml = message.replace(/\n/g, '<br>');
//     const currentYear = new Date().getFullYear();

//     const emailHtmlToBoss = `
// <div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; line-height: 1.5; color: #333; max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
//   <h2 style="font-size: 18px; color: #111; margin-top: 0;">Nouveau message (Confiance: ${100 - spamCheck.score}%)</h2>
//   <p><strong>De:</strong> ${fullName}</p>
//   <p><strong>Email:</strong> ${email}</p>
//   <p><strong>Sujet:</strong> ${subject}</p>
//   <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
//   <p><strong>Message:</strong></p>
//   <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
//     ${messageHtml}
//   </div>
// </div>`;

//     const emailHtmlToClient = `
// <div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; line-height: 1.5; color: #333; max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
//   <h2 style="font-size: 18px; color: #111; margin-top: 0;">Merci pour votre message - DIEBENU & PARTNERS</h2>
//   <p>Bonjour ${fullName},</p>
//   <p>Nous avons bien reçu votre message et notre équipe reviendra vers vous dans les plus brefs délais.</p>
//   <br>
//   <p>Cordialement,<br>
//   L'équipe DIEBENU & PARTNERS</p>
//   <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
//   <p style="font-size: 12px; color: #777; text-align: center;">&copy; ${currentYear} DIEBENU & PARTNERS. Tous droits réservés.</p>
// </div>`;

//     await resend.emails.send({
//       from: 'DIEBENU & PARTNERS <contact@diebenu.com>',
//       to: ['contact@diebenu.com'],
//       subject: `✅ ${subject} - De ${fullName}`,
//       html: emailHtmlToBoss,
//       replyTo: email
//     });

//     await resend.emails.send({
//       from: 'DIEBENU & PARTNERS <contact@diebenu.com>',
//       to: [email],
//       subject: '📩 Merci de votre message - DIEBENU & PARTNERS',
//       html: emailHtmlToClient
//     });

//     console.log('✅ Email envoyé:', { email, spamScore: spamCheck.score, confidence: 100 - spamCheck.score });

//     return NextResponse.json({ success: true, message: 'Message envoyé avec succès' });

//   } catch (error: any) {
//     console.error('❌ Erreur:', error);
//     return NextResponse.json({ error: 'Erreur serveur. Veuillez réessayer ultérieurement.' }, { status: 500 });
//   }
// }

// export async function OPTIONS(request: NextRequest) {
//   return NextResponse.json({}, { status: 200 });
// }




import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// ============================================
// SYSTÈME ANTI-SPAM ULTRA-SIMPLIFIÉ
// Focus uniquement sur les liens suspects
// ============================================

interface SpamCheckResult {
  isSpam: boolean;
  reason?: string;
  score: number;
}

// Mots-clés spam critiques (très réduit)
const CRITICAL_SPAM_KEYWORDS = [
  'viagra', 'cialis', 'casino', 'lottery', 'bitcoin', 'crypto',
  'nigerian prince', 'inheritance', 'million dollars',
  'xxx', 'porn', 'nude'
];

function analyzeSpam(data: {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
  submissionTime?: number;
}): SpamCheckResult {
  let spamScore = 0;
  const reasons: string[] = [];

  // 1. HONEYPOT
  if (data.honeypot && data.honeypot.trim().length > 0) {
    return { isSpam: true, reason: 'Honeypot field filled (bot detected)', score: 100 };
  }

  // 2. LIENS SUSPECTS
  const urlMatches = data.message.match(/https?:\/\/[^\s]+/gi);
  if (urlMatches && urlMatches.length > 5) { 
    spamScore += 80; 
    reasons.push(`Trop de liens (${urlMatches.length})`); 
  } else if (urlMatches && urlMatches.length > 3) {
    spamScore += 50;
    reasons.push(`Nombreux liens détectés (${urlMatches.length})`);
  }

  // 3. MOTS-CLÉS SPAM CRITIQUES
  const messageLower = data.message.toLowerCase();
  const subjectLower = data.subject.toLowerCase();
  const criticalSpamFound = CRITICAL_SPAM_KEYWORDS.filter(keyword => 
    messageLower.includes(keyword) || subjectLower.includes(keyword)
  );
  if (criticalSpamFound.length > 0) { 
    spamScore += 60; 
    reasons.push(`Mots-clés suspects: ${criticalSpamFound.join(', ')}`); 
  }

  // 4. SOUMISSION TROP RAPIDE
  if (data.submissionTime && data.submissionTime < 2000) { 
    spamScore += 40; 
    reasons.push('Soumission trop rapide'); 
  }

  return { 
    isSpam: spamScore >= 80, 
    reason: reasons.join(' | '), 
    score: Math.min(spamScore, 100) 
  };
}

function validateInput(data: any): { valid: boolean; error?: string } {
  if (!data.fullName || !data.email || !data.subject || !data.message) {
    return { valid: false, error: 'Veuillez remplir tous les champs' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { valid: false, error: 'Format d\'email invalide' };
  }

  if (data.fullName.trim().length < 2) return { valid: false, error: 'Le nom est trop court' };
  if (data.subject.trim().length < 2) return { valid: false, error: 'Le sujet est trop court' };
  if (data.message.trim().length < 5) return { valid: false, error: 'Le message est trop court' };
  if (data.fullName.trim().length > 100) return { valid: false, error: 'Le nom est trop long' };
  if (data.subject.trim().length > 200) return { valid: false, error: 'Le sujet est trop long' };
  if (data.message.trim().length > 5000) return { valid: false, error: 'Le message est trop long' };

  return { valid: true };
}

// ============================================
// API ROUTE HANDLER
// ============================================

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, subject, message, honeypot, submissionTime } = body;

    const validation = validateInput({ fullName, email, subject, message });
    if (!validation.valid) {
      console.log('⚠️ Validation échouée:', validation.error);
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const spamCheck = analyzeSpam({ fullName, email, subject, message, honeypot, submissionTime });
    console.log('🔍 Analyse Spam:', { email, score: spamCheck.score, isSpam: spamCheck.isSpam, reason: spamCheck.reason });

    if (spamCheck.isSpam) {
      console.log('🚫 SPAM BLOQUÉ:', { name: fullName, email, score: spamCheck.score, reason: spamCheck.reason });
      return NextResponse.json({ success: true, message: 'Message reçu' });
    }

    const messageHtml = message.replace(/\n/g, '<br>');
    const currentYear = new Date().getFullYear();

    // 💌 EMAIL POUR LE BOSS (même design que client, sans score ni trait)
    const emailHtmlToBoss = `
<div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; line-height: 1.6; color: #111416; max-width: 600px; margin: 30px auto; padding: 25px; border: 1px solid #e0e0e0; border-radius: 10px;">
  <h2 style="font-size: 20px; color: #111416; margin-top: 0; text-align: center;">📩 Nouveau message reçu</h2>
  <p>Bonjour,</p>
  <p>Vous avez reçu un nouveau message via le formulaire de contact du site <strong>DIEBENU & PARTNERS</strong>.</p>
  <br>
  <p><strong>Nom :</strong> ${fullName}<br>
  <strong>Email :</strong> ${email}<br>
  <strong>Sujet :</strong> ${subject}</p>
  <br>
  <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; border-left: 4px solid #CD352E;">
    ${messageHtml}
  </div>
  <br>
  <p style="font-size: 12px; color: #777; text-align: center;">&copy; ${currentYear} DIEBENU & PARTNERS. Tous droits réservés.</p>
</div>`;

    // 💌 EMAIL POUR LE CLIENT
    const emailHtmlToClient = `
<div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; line-height: 1.6; color: #111416; max-width: 600px; margin: 30px auto; padding: 25px; border: 1px solid #e0e0e0; border-radius: 10px;">
  <h2 style="font-size: 20px; color: #CD352E; margin-top: 0; text-align: center;">📬 Merci pour votre message</h2>
  <p>Bonjour <strong>${fullName}</strong>,</p>
  <p>Nous avons bien reçu votre message concernant <strong>${subject}</strong>. Notre équipe vous répondra dans les plus brefs délais.</p>
  <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; border-left: 4px solid #CD352E; margin-top: 10px;">
    ${messageHtml}
  </div>
  <br>
  <p>Bien cordialement,<br>
  <strong>L’équipe DIEBENU & PARTNERS</strong></p>
  <p style="font-size: 12px; color: #777; text-align: center;">&copy; ${currentYear} DIEBENU & PARTNERS. Tous droits réservés.</p>
</div>`;

    await resend.emails.send({
      from: 'DIEBENU & PARTNERS <contact@diebenu.com>',
      to: ['contact@diebenu.com'],
      subject: `✅ ${subject} - De ${fullName}`,
      html: emailHtmlToBoss,
      replyTo: email
    });

    await resend.emails.send({
      from: 'DIEBENU & PARTNERS <contact@diebenu.com>',
      to: [email],
      subject: '📩 Merci de votre message - DIEBENU & PARTNERS',
      html: emailHtmlToClient
    });

    console.log('✅ Email envoyé:', { email, spamScore: spamCheck.score });

    return NextResponse.json({ success: true, message: 'Message envoyé avec succès' });

  } catch (error: any) {
    console.error('❌ Erreur:', error);
    return NextResponse.json({ error: 'Erreur serveur. Veuillez réessayer ultérieurement.' }, { status: 500 });
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
