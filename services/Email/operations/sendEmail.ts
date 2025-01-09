'use server';

import Mail from 'nodemailer/lib/mailer';
import { nanoid } from 'nanoid';
import { transporter } from '../transporter';

const sendEmail = async (
  lang: string = 'en',
  { to = process.env.SERVICE_EMAIL_TARGET, html, attachments, subject }: Mail.Options
) => {
  const recipients = Array.isArray(to)
    ? to.filter(Boolean)
    : [to].filter(Boolean);

  const mailOptions: Mail.Options = {
    from: 'ToKnowAI',
    to: recipients as string | Mail.Address | (string | Mail.Address)[],
    subject: subject ?? `Ticket #${nanoid()}`,
    html,
    attachments,
  };
  try {
    const info = await transporter.sendMail(mailOptions);
  } catch (e: any) {
    console.log('Error', e.message);

    await transporter.sendMail({
      from: 'ToKnowAI',
      to: process.env.SERVICE_EMAIL_TARGET,
      subject: 'Błąd wysyłania wiadomości. Wiadomość niedostarczona',
      html: `<p> wiaodmość niedostarczona </p>`,
    });
  }
};

export default sendEmail;
