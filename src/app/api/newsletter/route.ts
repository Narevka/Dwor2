import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Funkcja do escapowania HTML - zabezpiecza przed XSS
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, consent } = body;

    // Walidacja
    if (!email) {
      return NextResponse.json(
        { error: 'Adres email jest wymagany' },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: 'Zgoda RODO jest wymagana' },
        { status: 400 }
      );
    }

    // ============================================
    // 📊 ZBIERANIE DANYCH RODO (MINIMUM)
    // ============================================
    
    // 1. IP użytkownika
    const forwarded = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const ip = forwarded ? forwarded.split(',')[0].trim() : (realIp || 'unknown');
    
    // 2. Data i czas (dokładny timestamp)
    const now = new Date();
    const timestamp = now.toISOString(); // Format: 2025-01-15T14:23:45.123Z
    const dateTime = now.toLocaleString('pl-PL', { 
      day: '2-digit',
      month: '2-digit', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'Europe/Warsaw'
    });
    
    // 3. Treść zgody (dokładnie to co zaakceptował)
    const consentText = 'Wyrażam zgodę na otrzymywanie informacji handlowych i akceptuję Politykę prywatności';

    // ============================================
    // 📧 WYSYŁANIE EMAILA
    // ============================================

    // ============================================
    // 📧 WYSYŁANIE EMAILA
    // ============================================

    // Konfiguracja SMTP (100% z .env.local - bez hardcoded!)
    const smtpConfig = {
      host: process.env.SMTP_HOST || 'ssl0.ovh.net',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER || 'noreply@sapiolko.pl',
        pass: process.env.SMTP_PASSWORD, // TYLKO z .env.local - BEZ FALLBACK!
      },
    };
    
    // Sprawdź czy hasło jest dostępne
    if (!smtpConfig.auth.pass) {
      throw new Error('SMTP_PASSWORD nie jest ustawione w .env.local');
    }
    
    const transporter = nodemailer.createTransport(smtpConfig);

    // Weryfikacja połączenia
    await new Promise((resolve, reject) => {
      transporter.verify((error, success) => {
        if (error) {
          console.error('❌ SMTP verify error:', error);
          reject(error);
        } else {
          console.log('✅ SMTP ready for newsletter');
          resolve(success);
        }
      });
    });

    // Wysyłka emaila do Karola
    await new Promise((resolve, reject) => {
      transporter.sendMail(
        {
          from: `"Dwór Bartnika - Newsletter" <${process.env.SMTP_USER || 'noreply@sapiolko.pl'}>`,
          to: process.env.CONTACT_EMAIL_TO || 'karol@sapiolko.com',
          subject: `[Newsletter] Nowy zapis - ${dateTime}`,
          html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: 'Georgia', 'Times New Roman', serif;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; max-width: 100%; border-collapse: collapse; background: white; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #d4a574; font-family: 'Georgia', serif; font-size: 28px; font-weight: normal; letter-spacing: 2px;">
                DWÓR BARTNIKA
              </h1>
              <p style="margin: 10px 0 0 0; color: rgba(255,255,255,0.8); font-size: 14px; letter-spacing: 1px;">
                NEWSLETTER - NOWY ZAPIS
              </p>
            </td>
          </tr>
          
          <!-- Tytuł -->
          <tr>
            <td style="padding: 40px 40px 20px 40px;">
              <h2 style="margin: 0; color: #2c3e50; font-size: 24px; font-weight: 500; border-bottom: 2px solid #d4a574; padding-bottom: 15px; display: inline-block;">
                📬 Nowy subskrybent newslettera!
              </h2>
            </td>
          </tr>
          
          <!-- Email subskrybenta -->
          <tr>
            <td style="padding: 20px 40px;">
              <table style="width: 100%; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #d4a574;">
                <tr>
                  <td style="padding: 25px;">
                    <p style="margin: 0 0 8px 0; color: #7f8c8d; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">📧 Adres email:</p>
                    <a href="mailto:${escapeHtml(email)}" style="color: #d4a574; text-decoration: none; font-size: 20px; font-weight: 600; display: block; margin-bottom: 10px;">${escapeHtml(email)}</a>
                    
                    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
                      <p style="margin: 0; color: #95a5a6; font-size: 12px; font-style: italic;">
                        💡 <strong>Wskazówka:</strong> Zapisz ten email do pliku Excel/Arkuszy Google lub skopiuj do swojego narzędzia mailingowego.
                      </p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- SEKCJA RODO - Minimalne dane -->
          <tr>
            <td style="padding: 20px 40px;">
              <div style="background: #fff9e6; border: 2px solid #ffd700; border-radius: 8px; padding: 20px;">
                <h3 style="margin: 0 0 15px 0; color: #b8860b; font-size: 16px;">
                  ⚖️ Dane RODO (Dowód zgody)
                </h3>
                
                <table style="width: 100%; font-size: 13px; color: #333;">
                  <tr>
                    <td style="padding: 8px 0; vertical-align: top; width: 30%; color: #7f8c8d; font-weight: 600;">📅 Data i czas:</td>
                    <td style="padding: 8px 0; font-family: monospace;">${dateTime}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; vertical-align: top; color: #7f8c8d; font-weight: 600;">🕐 Timestamp:</td>
                    <td style="padding: 8px 0; font-family: monospace; font-size: 11px; color: #666;">${timestamp}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; vertical-align: top; color: #7f8c8d; font-weight: 600;">🌐 Adres IP:</td>
                    <td style="padding: 8px 0;">
                      <span style="font-family: monospace; color: #c7254e; background: #f9f2f4; padding: 4px 8px; border-radius: 3px; display: inline-block;">${ip}</span>
                    </td>
                  </tr>
                </table>
                
                <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #f0d090;">
                  <p style="margin: 0 0 10px 0; color: #7f8c8d; font-size: 12px; font-weight: 600;">📝 Treść zgody zaakceptowanej przez użytkownika:</p>
                  <div style="background: white; border-left: 3px solid #d4a574; padding: 12px; font-size: 12px; color: #555; line-height: 1.6; font-style: italic;">
                    „${consentText}"
                  </div>
                </div>
              </div>
            </td>
          </tr>
          
          <!-- Ostrzeżenie prawne -->
          <tr>
            <td style="padding: 20px 40px;">
              <div style="background: #fff3cd; border-left: 4px solid #ffc107; padding: 18px; border-radius: 6px;">
                <p style="margin: 0 0 12px 0; color: #856404; font-size: 14px; font-weight: 600;">
                  ⚠️ Ważne przypomnienie prawne:
                </p>
                <ul style="margin: 0; padding-left: 20px; color: #856404; font-size: 13px; line-height: 1.7;">
                  <li style="margin-bottom: 8px;"><strong>Każdy email marketingowy MUSI zawierać</strong> link "Wypisz się z newslettera" (art. 10 ustawy o świadczeniu usług drogą elektroniczną)</li>
                  <li style="margin-bottom: 8px;"><strong>Zachowaj te dane RODO</strong> jako dowód zgody (np. zrób screenshot lub zapisz email)</li>
                  <li><strong>Maksymalna kara za brak:</strong> do 20 mln EUR (RODO)</li>
                </ul>
              </div>
            </td>
          </tr>
          
          <!-- Szablon stopki dla maili marketingowych -->
          <tr>
            <td style="padding: 20px 40px;">
              <div style="background: #e8f4f8; border: 2px dashed #5bc0de; padding: 20px; border-radius: 8px;">
                <p style="margin: 0 0 12px 0; color: #31708f; font-size: 14px; font-weight: 600;">
                  📋 Szablon stopki dla Twoich maili marketingowych:
                </p>
                <div style="background: #f9f9f9; padding: 15px; border-radius: 4px; font-size: 11px; color: #666; font-family: monospace; line-height: 1.6;">
                  <div style="text-align: center; padding: 15px; background: #f4f4f4; border-radius: 4px;">
                    <p style="margin: 0 0 5px 0; font-family: Georgia, serif;">Dwór Bartnika</p>
                    <p style="margin: 0 0 5px 0;">ul. Hajnowska 2/1, 17-220 Narewka</p>
                    <p style="margin: 0 0 15px 0;">sapiolko@op.pl | +48 721 907 000</p>
                    <a href="https://dworbartnika.pl/wypisz-newsletter" style="color: #d4a574; text-decoration: underline;">🚫 Wypisz się z newslettera</a>
                    <p style="margin: 15px 0 0 0; font-size: 10px; color: #999;">Otrzymujesz tę wiadomość ponieważ zapisałeś się na dworbartnika.pl w dniu ${dateTime.split(',')[0]}</p>
                  </div>
                </div>
                <p style="margin: 12px 0 0 0; color: #31708f; font-size: 11px; font-style: italic;">
                  💡 Skopiuj i wklej ten HTML na dole każdego maila marketingowego
                </p>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background: #f8f9fa; padding: 30px 40px; border-top: 1px solid #e0e0e0; text-align: center;">
              <p style="margin: 0 0 5px 0; color: #7f8c8d; font-size: 13px; font-weight: 500;">
                Formularz zapisu do newslettera
              </p>
              <p style="margin: 0; color: #95a5a6; font-size: 12px;">
                dworbartnika.pl
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
          `,
        },
        (error, info) => {
          if (error) {
            console.error('❌ Newsletter send error:', error);
            reject(error);
          } else {
            console.log('✅ Newsletter email sent:', info.messageId);
            resolve(info);
          }
        }
      );
    });

    return NextResponse.json({ 
      success: true,
      message: 'Dziękujemy za zapisanie się do newslettera!' 
    });

  } catch (error: any) {
    console.error('❌ Newsletter API Error:', error);
    return NextResponse.json(
      { error: 'Błąd zapisu do newslettera', details: error.message },
      { status: 500 }
    );
  }
}

