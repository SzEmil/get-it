'use server';

import Mail from 'nodemailer/lib/mailer';
import { nanoid } from 'nanoid';
import { transporter } from '../transporter';

const sendEmail = async (
  lang: string = 'en',
  { to = process.env.SERVICE_EMAIL_TARGET, html }: Mail.Options
) => {
  const mailOptions: Mail.Options = {
    from: "ToKnowAI",
    to,
    subject: `New subject: Ticket #${nanoid()}`,
    html,
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (e: any) {
    console.log('Error', e.message);
  }
};

export default sendEmail;
