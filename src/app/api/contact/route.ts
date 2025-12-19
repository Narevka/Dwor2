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
    const { email, message } = body;

    // Walidacja
    if (!email || !message) {
      return NextResponse.json(
        { error: 'Wypełnij wymagane pola' },
        { status: 400 }
      );
    }

    // Sprawdź czy hasło SMTP jest dostępne PRZED utworzeniem transportera
    if (!process.env.SMTP_PASSWORD) {
      throw new Error('SMTP_PASSWORD nie jest ustawione w .env.local');
    }

    // Konfiguracja SMTP transportera (100% z .env.local - bez hardcoded!)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'ssl0.ovh.net',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER || 'noreply@sapiolko.pl',
        pass: process.env.SMTP_PASSWORD, // TYLKO z .env.local - BEZ FALLBACK!
      },
    });

    // KROK 1: Weryfikacja połączenia (Promise)
    await new Promise((resolve, reject) => {
      transporter.verify((error, success) => {
        if (error) {
          console.error('❌ SMTP verify error:', error);
          reject(error);
        } else {
          console.log('✅ SMTP ready');
          resolve(success);
        }
      });
    });

    // KROK 2: Wysyłka emaila (Promise + AWAIT!)
    await new Promise((resolve, reject) => {
      // Przygotuj datę i godzinę dla unikalnego tematu
      const now = new Date();
      const dateTime = now.toLocaleString('pl-PL', { 
        day: '2-digit',
        month: '2-digit', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
      
      // Przygotuj szablon odpowiedzi z cytowaną treścią w cudzysłowach
      const quotedMessage = `„${message.replace(/\n/g, '\n')}"`;
      const replyBody = `Dzień dobry,\n\nDziękujemy za kontakt przez formularz na stronie dworbartnika.pl\n\nW odpowiedzi na Pani/Pana zapytanie:\n\n────────────────────────────────\n${quotedMessage}\n────────────────────────────────\n\n[TU WPISZ ODPOWIEDŹ]\n\n\nZ poważaniem,\nZespół Dworu Bartnika\n\nul. Hajnowska 2/1, 17-220 Narewka\nTel: +48 721 907 000\nEmail: sapiolko@op.pl\nwww.dworbartnika.pl`;
      
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent('Re: Zapytanie z formularza kontaktowego')}&body=${encodeURIComponent(replyBody)}`;

      transporter.sendMail(
        {
          from: `"Dwór Bartnika - Formularz" <${process.env.SMTP_USER || 'noreply@sapiolko.pl'}>`,
          to: process.env.CONTACT_EMAIL_TO || 'karol@sapiolko.com',
          replyTo: email,
          subject: `[Kontakt] Dwór Bartnika - ${dateTime}`,
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
                PUSZCZA BIAŁOWIESKA
              </p>
            </td>
          </tr>
          
          <!-- Tytuł -->
          <tr>
            <td style="padding: 40px 40px 20px 40px;">
              <h2 style="margin: 0; color: #2c3e50; font-size: 24px; font-weight: 500; border-bottom: 2px solid #d4a574; padding-bottom: 15px; display: inline-block;">
                📧 Nowa wiadomość z formularza
              </h2>
            </td>
          </tr>
          
          <!-- Email nadawcy -->
          <tr>
            <td style="padding: 20px 40px;">
              <table style="width: 100%; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #d4a574;">
                <tr>
                  <td style="padding: 20px;">
                    <p style="margin: 0 0 8px 0; color: #7f8c8d; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Email nadawcy:</p>
                    <a href="mailto:${escapeHtml(email)}" style="color: #d4a574; text-decoration: none; font-size: 16px; font-weight: 500;">${escapeHtml(email)}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Treść wiadomości -->
          <tr>
            <td style="padding: 20px 40px;">
              <p style="margin: 0 0 12px 0; color: #7f8c8d; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">
                Treść wiadomości:
              </p>
              <div style="background: white; border: 1px solid #e0e0e0; border-radius: 8px; padding: 25px; line-height: 1.8; color: #2c3e50; font-size: 15px;">
                ${message.split('\n').map((line: string) => `<p style="margin: 0 0 12px 0;">${escapeHtml(line) || '&nbsp;'}</p>`).join('')}
              </div>
            </td>
          </tr>
          
          <!-- Przycisk ODPOWIEDZ -->
          <tr>
            <td align="center" style="padding: 30px 40px;">
              <a href="${mailtoLink}" style="display: inline-block; background: linear-gradient(135deg, #d4a574 0%, #c19860 100%); color: white; text-decoration: none; padding: 16px 45px; border-radius: 6px; font-size: 16px; font-weight: 500; letter-spacing: 1px; box-shadow: 0 4px 8px rgba(212,165,116,0.3);">
                ✉️ ODPOWIEDZ NA WIADOMOŚĆ
              </a>
              <p style="margin: 15px 0 0 0; color: #95a5a6; font-size: 12px; font-style: italic;">
                Kliknij aby otworzyć gotową odpowiedź z cytowaną treścią
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background: #f8f9fa; padding: 30px 40px; border-top: 1px solid #e0e0e0; text-align: center;">
              <p style="margin: 0 0 5px 0; color: #7f8c8d; font-size: 13px; font-weight: 500;">
                Formularz kontaktowy
              </p>
              <p style="margin: 0; color: #95a5a6; font-size: 12px;">
                ${now.toLocaleString('pl-PL', { 
                  day: 'numeric',
                  month: 'long', 
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
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
            console.error('❌ Send error:', error);
            reject(error);
          } else {
            console.log('✅ Email sent:', info.messageId);
            resolve(info);
          }
        }
      );
    });

    return NextResponse.json({ 
      success: true,
      message: 'Wiadomość została wysłana' 
    });

  } catch (error: any) {
    console.error('❌ API Error:', error);
    return NextResponse.json(
      { error: 'Błąd wysyłania emaila', details: error.message },
      { status: 500 }
    );
  }
}

