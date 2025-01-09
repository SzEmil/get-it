'use server';

import { FormatResponse } from './response';
import prisma from '../../prisma/client';
import sendEmail from '@/services/Email/operations/sendEmail';
import { generateInvoicePdfLib } from '@/services/pdf/generatePdf';

export const createInvoice = FormatResponse(async (paymentId: number) => {
  const payment = await prisma.payment.findUnique({
    where: { id: paymentId },
    include: { courses: true },
  });

  if (!payment) {
    throw new Error(`Payment with ID ${paymentId} not found`);
  }

  const existingInvoicesCount = await prisma.invoice.count();

  const currentYear = new Date().getFullYear();
  const invoiceNumber = `AI/${existingInvoicesCount + 1}/${currentYear}`;

  const invoice = await prisma.invoice.create({
    data: {
      invoice_number: invoiceNumber,
      buyer_name:
        payment.invoice_name || `${payment.firstName} ${payment.lastName}`,
      buyer_address: payment.invoice_address || payment.address,
      buyer_postalCode: payment.invoice_postal_code || payment.postalCode,
      buyer_town: payment.invoice_town || payment.city,
      buyer_NIP: payment.invoice_nip || '',
      buyer_country: payment.invoice_country || 'Polska',
      price: payment.amount,
      currency: payment.currency,
      paymentId: payment.id,
      paymentMethod: payment.paymentMethod || 'Nieznany',
      payment_name: `${payment.firstName} ${payment.lastName}`,
      payment_date: payment.createdAt,
      sold_date: payment.createdAt,
      type: payment.invoice_type,

      product_id: payment.courses[0].courseId,
      product_name: payment.courses[0].courseName,
    },
  });

  const pdfBuffer = await generateInvoicePdfLib(invoice);
  //   console.log(payment.email);
  await sendEmail('pl', {
    to: payment.email,
    subject: `Faktura potwierdzenia opłaty za produkt: ${invoice.product_name}`,
    html: `<p> Dziekujemy za zakup. Twoja płatność o id ${payment.paymentSessionId} zostałą zakończona pomyślnie. W załączniku znajdziesz fakturę. </p>`,
    attachments: [
      {
        filename: `${invoice.invoice_number}.pdf`,
        content: pdfBuffer,
      },
    ],
  });

  await sendEmail('pl', {
    to: "info@toknowai.pl",
    subject: `Faktura potwierdzenia opłaty za produkt: ${invoice.product_name} użytkownika ${payment.firstName} ${payment.lastName} ${payment.email}`,
    html: `<p> Użytkownik o adresie email: ${payment.email} zakupił produkt ${payment.courses[0].courseName}. Płatność o id ${payment.paymentSessionId} zostałą zakończona pomyślnie. W załączniku znajduje się faktura. </p>`,
    attachments: [
      {
        filename: `${invoice.invoice_number}.pdf`,
        content: pdfBuffer,
      },
    ],
  });

  return invoice;
});

export const sendInvoiceById = FormatResponse(
  async ({ invoiceId, email }: { invoiceId: number; email: string }) => {
    // Pobierz fakturę na podstawie przekazanego ID
    const invoice = await prisma.invoice.findUnique({
      where: { id: invoiceId },
    });

    if (!invoice) {
      throw new Error(`Invoice with ID ${invoiceId} not found`);
    }

    // Wygeneruj plik PDF faktury
    const pdfBuffer = await generateInvoicePdfLib(invoice);

    // Wyślij fakturę jako załącznik e-mail
    await sendEmail('pl', {
      to: email, // Zakładam, że e-mail znajduje się w relacji payment
      subject: `Faktura: ${invoice.invoice_number}`,
      html: `<p>Dziękujemy za zakupy. W załączniku znajdziesz swoją fakturę.</p>`,
      attachments: [
        {
          filename: `${invoice.invoice_number}.pdf`,
          content: pdfBuffer,
        },
      ],
    });

    return {
      message: `Invoice with ID ${invoiceId} has been sent successfully`,
    };
  }
);

export const handleDownloadInvoice = async (invoiceId: number) => {
  try {
    const invoice = await prisma.invoice.findUnique({
      where: { id: invoiceId },
    });

    if (!invoice) {
      throw new Error(`Invoice with ID ${invoiceId} not found`);
    }

    // Wygeneruj plik PDF faktury
    const pdfBuffer = await generateInvoicePdfLib(invoice);
    return {
      base64: pdfBuffer.toString('base64'),
      fileName: `${invoice.invoice_number}.pdf`,
    };
  } catch (e) {
    console.error('Failed to download invoice:', e);
  }
};
