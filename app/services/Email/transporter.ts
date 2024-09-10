import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: process.env.SERVICE_NAME,
  auth: {
    user: process.env.SERVICE_EMAIL,
    pass: process.env.SERVICE_EMAIL_PASSWORD,
  },
});
