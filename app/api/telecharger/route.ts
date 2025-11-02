// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      fullName, 
      email, 
      subject, 
      message, 
      honeypot, 
      submissionTime,
      sendThankYouEmail = false 
    } = body;

    // =========================================================================
    // VALIDATION ET ANTI-SPAM
    // =========================================================================
    
    // 1. Vérification du honeypot
    if (honeypot) {
      console.warn('🚫 Spam détecté via honeypot');
      return NextResponse.json(
        { error: 'Invalid submission' },
        { status: 400 }
      );
    }

    // 2. Validation des champs requis
    if (!fullName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // 3. Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format d\'email invalide' },
        { status: 400 }
      );
    }

    // 4. Protection contre la soumission trop rapide (moins de 3 secondes)
    if (submissionTime && submissionTime < 3000) {
      console.warn('⚠️ Soumission trop rapide - possible bot');
      return NextResponse.json(
        { error: 'Veuillez prendre le temps de remplir le formulaire' },
        { status: 429 }
      );
    }

    // =========================================================================
    // ENVOI DE L'EMAIL DE NOTIFICATION (vers Diebenu)
    // =========================================================================
    
    const notificationHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #dc2626 0%, #ea580c 100%);
              color: white;
              padding: 30px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .content {
              background: #f9fafb;
              padding: 30px;
              border: 1px solid #e5e7eb;
              border-top: none;
              border-radius: 0 0 10px 10px;
            }
            .info-row {
              background: white;
              padding: 15px;
              margin-bottom: 15px;
              border-radius: 8px;
              border-left: 4px solid #dc2626;
            }
            .label {
              font-weight: bold;
              color: #dc2626;
              display: block;
              margin-bottom: 5px;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .value {
              color: #374151;
              font-size: 15px;
            }
            .message-box {
              background: white;
              padding: 20px;
              border-radius: 8px;
              border: 1px solid #e5e7eb;
              margin-top: 15px;
            }
            .footer {
              text-align: center;
              padding: 20px;
              color: #6b7280;
              font-size: 12px;
            }
            .badge {
              display: inline-block;
              background: #dcfce7;
              color: #166534;
              padding: 5px 12px;
              border-radius: 20px;
              font-size: 12px;
              font-weight: 600;
              margin-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">📬 Nouveau Message</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Formulaire de contact Diebenu & Partners</p>
          </div>
          
          <div class="content">
            <div class="info-row">
              <span class="label">👤 Nom complet</span>
              <span class="value">${fullName}</span>
            </div>
            
            <div class="info-row">
              <span class="label">📧 Email</span>
              <span class="value">${email}</span>
            </div>
            
            <div class="info-row">
              <span class="label">📋 Sujet</span>
              <span class="value">${subject}</span>
            </div>
            
            <div class="message-box">
              <span class="label">💬 Message</span>
              <p class="value">${message.replace(/\n/g, '<br>')}</p>
            </div>

            ${sendThankYouEmail ? '<div class="badge">📥 Téléchargement de catalogue</div>' : ''}
          </div>
          
          <div class="footer">
            <p>Ce message a été envoyé depuis le formulaire de contact de votre site web.</p>
            <p style="margin-top: 10px;">© ${new Date().getFullYear()} Diebenu & Partners</p>
          </div>
        </body>
      </html>
    `;

    // Envoi vers l'équipe Diebenu
    await resend.emails.send({
      from: 'Contact Diebenu <noreply@votre-domaine.com>', // À remplacer par votre domaine vérifié
      to: ['contact@diebenu.com'], // Email de réception
      replyTo: email,
      subject: `[Site Web] ${subject}`,
      html: notificationHtml,
    });

    // =========================================================================
    // ENVOI DE L'EMAIL DE REMERCIEMENT (vers l'utilisateur)
    // =========================================================================
    
    if (sendThankYouEmail) {
      const thankYouHtml = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9fafb;
              }
              .container {
                background: white;
                border-radius: 16px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              .header {
                background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
                color: white;
                padding: 40px 30px;
                text-align: center;
              }
              .logo {
                font-size: 48px;
                margin-bottom: 10px;
              }
              .content {
                padding: 40px 30px;
              }
              .greeting {
                font-size: 24px;
                font-weight: bold;
                color: #1f2937;
                margin-bottom: 20px;
              }
              .text {
                color: #4b5563;
                font-size: 16px;
                margin-bottom: 15px;
              }
              .cta-button {
                display: inline-block;
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                color: white;
                padding: 16px 32px;
                text-decoration: none;
                border-radius: 10px;
                font-weight: bold;
                margin: 25px 0;
                font-size: 16px;
              }
              .info-box {
                background: #f3f4f6;
                border-left: 4px solid #2563eb;
                padding: 20px;
                border-radius: 8px;
                margin: 25px 0;
              }
              .info-box h3 {
                color: #2563eb;
                margin-top: 0;
                font-size: 18px;
              }
              .info-box ul {
                margin: 10px 0;
                padding-left: 20px;
                color: #4b5563;
              }
              .info-box li {
                margin: 8px 0;
              }
              .footer {
                background: #f9fafb;
                padding: 30px;
                text-align: center;
                border-top: 1px solid #e5e7eb;
              }
              .footer p {
                color: #6b7280;
                font-size: 14px;
                margin: 5px 0;
              }
              .social-links {
                margin: 20px 0;
              }
              .social-links a {
                color: #2563eb;
                text-decoration: none;
                margin: 0 10px;
                font-weight: 600;
              }
              .contact-info {
                background: white;
                border: 1px solid #e5e7eb;
                border-radius: 8px;
                padding: 20px;
                margin: 20px 0;
              }
              .contact-info p {
                margin: 8px 0;
                color: #374151;
              }
              .contact-info strong {
                color: #1f2937;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo">📚</div>
                <h1 style="margin: 0; font-size: 28px;">Merci pour votre intérêt !</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.95; font-size: 16px;">Votre catalogue est prêt</p>
              </div>
              
              <div class="content">
                <div class="greeting">Bonjour ${fullName.split(' ')[0]},</div>
                
                <p class="text">
                  Nous vous remercions d'avoir téléchargé notre catalogue de formations.
                  Nous sommes ravis de votre intérêt pour nos programmes de développement professionnel.
                </p>

                <p class="text">
                  Le fichier PDF contient l'intégralité de nos offres de formation avec les détails suivants :
                </p>

                <div class="info-box">
                  <h3>📖 Contenu du catalogue</h3>
                  <ul>
                    <li>Plus de 200 formations certifiantes</li>
                    <li>Descriptions détaillées et objectifs pédagogiques</li>
                    <li>Informations sur les durées et modalités</li>
                    <li>Tarifs et possibilités de financement</li>
                    <li>Profils des formateurs experts</li>
                  </ul>
                </div>

                <p class="text">
                  <strong>Besoin d'aide ?</strong> Notre équipe est à votre disposition pour vous conseiller 
                  et vous accompagner dans le choix de la formation la plus adaptée à vos besoins.
                </p>

                <div class="contact-info">
                  <p><strong>📞 Téléphone :</strong> +212 606 698 210 / +212 665 288 522</p>
                  <p><strong>📧 Email :</strong> contact@diebenu.com</p>
                  <p><strong>📍 Adresse :</strong> 59, Bd Zerktouni Étage 11, N°32, Casablanca</p>
                </div>

                <p class="text" style="margin-top: 25px;">
                  Nous restons à votre écoute pour toute question ou demande de devis personnalisé.
                </p>

                <p class="text">
                  Cordialement,<br>
                  <strong>L'équipe Diebenu & Partners</strong>
                </p>
              </div>
              
              <div class="footer">
                <p style="font-size: 16px; color: #374151; font-weight: 600;">Suivez-nous</p>
                <div class="social-links">
                  <a href="#">LinkedIn</a> •
                  <a href="#">Facebook</a> •
                  <a href="#">Twitter</a>
                </div>
                <p style="margin-top: 20px;">© ${new Date().getFullYear()} Diebenu & Partners - Tous droits réservés</p>
                <p style="font-size: 12px; color: #9ca3af; margin-top: 10px;">
                  Vous recevez cet email car vous avez téléchargé notre catalogue de formations.
                </p>
              </div>
            </div>
          </body>
        </html>
      `;

      // Envoi de l'email de remerciement à l'utilisateur
      await resend.emails.send({
        from: 'Diebenu & Partners <noreply@votre-domaine.com>', // À remplacer
        to: [email],
        subject: '📚 Votre catalogue de formations Diebenu & Partners',
        html: thankYouHtml,
      });
    }

    // =========================================================================
    // RÉPONSE DE SUCCÈS
    // =========================================================================
    
    return NextResponse.json(
      { 
        success: true, 
        message: sendThankYouEmail 
          ? 'Email de remerciement envoyé avec succès'
          : 'Message envoyé avec succès'
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('❌ Erreur lors de l\'envoi de l\'email:', error);
    
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}