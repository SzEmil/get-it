'use server';

import * as puppeteer from 'puppeteer';
import { ToWords } from 'to-words';
import { readFileSync, existsSync } from 'fs';
import * as fs from 'fs/promises';
import * as path from 'path';
import { Invoice, Payment } from '@prisma/client';
import { formatDate } from '@/helpers/date';
const PriceToPolishWords = require('price-to-polish-words');

export const generateInvoicePdf = async (
  invoice: Invoice
  // logo: string
): Promise<Buffer> => {
  let html;

  const currentDate = new Date();
  currentDate.setHours(currentDate.getHours() + 2);

  const generatedTime = currentDate.toISOString();

  const htmlPath = path.join(process.cwd(), 'templates', 'invoiceRegularVat.html');
  html = await fs.readFile(path.join(htmlPath), 'utf8');

  //   try {
  //     if (existsSync(logo)) {
  //       logo = readFileSync(logo).toString('base64');
  //     } else {
  //       logo = readFileSync(path.join('public', 'apple-touch-icon.png')).toString(
  //         'base64'
  //       );
  //     }
  //   } catch (e) {
  //     logo = readFileSync(path.join('public', 'apple-touch-icon.png')).toString(
  //       'base64'
  //     );
  //   }

  const replacedHtml = replaceInvoicePlaceholders(html, invoice);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setContent(replacedHtml, { waitUntil: 'domcontentloaded' });

  await page.emulateMediaType('screen');
  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: true,
    footerTemplate: `
        <div style="padding-bottom: 5px; font-size: 10px; width: 100%; padding-left: 30px; padding-right: 20px; color: gray; display: flex; justify-content: space-between">
        <p>Wygenerowano w: ${generatedTime}</p>
        <p> Faktura wygenerowana automatycznie </p>
          <p><span class="pageNumber"></span> / <span class="totalPages"></span></p>
        </div>
      `,
  });

  await browser.close();

  const convertedBuffer = await Buffer.from(pdfBuffer);

  return convertedBuffer;
};

function replaceInvoicePlaceholders(html: string, invoice: Invoice): string {
  const currentDate = new Date().toISOString().split('T')[0];
  const exchange_rate = invoice.exchange_rate ?? 1;
  const price_pln = invoice.price * exchange_rate;

  let priceInWords;

  priceInWords = new PriceToPolishWords(invoice.price, 'Błędna kwota').getPrice(
    'zl-words zl-full gr-words gr-short'
  );

  const soldDate = formatDate(invoice.sold_date);
  // .toISOString().split('T')[0];
  const paymentDate = formatDate(invoice.payment_date);
  // .toISOString().split('T')[0];

  return (
    html
      .replace(/{{currentDate}}/g, currentDate)
      // .replace(/{{tenant_logo}}/g, logoBase64)
      .replace(/{{invoice_createdAt}}/g, invoice.createdAt.toLocaleDateString())
      .replace(/{{invoice_number}}/g, invoice.invoice_number)
      .replace(/{{seller_name}}/g, invoice.seller_name)
      .replace(/{{seller_address}}/g, invoice.seller_address)
      .replace(/{{seller_NIP}}/g, invoice.seller_NIP)
      .replace(/{{seller_REGON}}/g, invoice.seller_REGON)
      .replace(/{{seller_code}}/g, invoice.seller_code)
      .replace(/{{seller_phone}}/g, invoice.seller_phone)
      .replace(/{{seller_postalCode}}/g, invoice.seller_postalCode)
      .replace(/{{seller_city}}/g, invoice.seller_town)
      .replace(/{{paymentMethod}}/g, invoice.paymentMethod)
      .replace(/{{payment_date}}/g, soldDate.toString())
      .replace(/{{bank_name}}/g, invoice.bank_name ?? '')
      .replace(/{{bank_account}}/g, invoice.bank_account ?? '')
      .replace(/{{buyer_name}}/g, invoice.buyer_name)
      .replace(/{{buyer_address}}/g, invoice.buyer_address)
      .replace(/{{buyer_NIP}}/g, invoice.buyer_NIP)
      .replace(/{{buyer_postalCode}}/g, invoice.buyer_postalCode)
      .replace(/{{buyer_city}}/g, invoice.buyer_town)
      .replace(/{{buyer_NIP}}/g, invoice.buyer_NIP ?? '')
      .replace(/{{product_name}}/g, invoice.product_name ?? '')
      .replace(/{{price}}/g, invoice.price.toString())
      .replace(/{{currency}}/g, invoice.currency)
      .replace(/{{payment_name}}/g, invoice.payment_name)
      .replace(/{{sold_date}}/g, paymentDate.toString())
      .replace(/{{type}}/g, invoice.type)
      .replace(/{{price_words}}/g, priceInWords)
      .replaceAll(/{{price_pln}}/g, price_pln.toFixed(2))
  );
}
