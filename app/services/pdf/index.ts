'use server';

import * as puppeteer from 'puppeteer';
import { ToWords } from 'to-words';
import { readFileSync, existsSync } from 'fs';
import * as fs from 'fs/promises';
import * as path from 'path';
import { Payment } from '@prisma/client';
const PriceToPolishWords = require('price-to-polish-words');

export const generateInvoicePdf = async (
  payment: Payment,
  filePath: string,
  logo: string
): Promise<void> => {
  let html;

  const currentDate = new Date();
  currentDate.setHours(currentDate.getHours() + 2);

  const generatedTime = currentDate.toISOString();

  html = await fs.readFile(
    path.join('templates', 'invoiceRegularVat.html'),
    'utf8'
  );

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

  //   const replacedHtml = replaceInvoicePlaceholders(html, payment);
  const replacedHtml = '';
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setContent(replacedHtml, { waitUntil: 'domcontentloaded' });

  await page.emulateMediaType('screen');
  await page.pdf({
    path: filePath,
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: true,
    footerTemplate: `
        <div style="padding-bottom: 5px; font-size: 10px; width: 100%; padding-left: 30px; padding-right: 20px; color: gray; display: flex; justify-content: space-between">
        <p>Wygenerowano w: ${generatedTime}</p>
          <p><span class="pageNumber"></span> / <span class="totalPages"></span></p>
        </div>
      `,
  });

  await browser.close();
};

// function replaceInvoicePlaceholders(html: string, payment: Payment): string {
//   const currentDate = new Date().toISOString().split('T')[0];
//   const exchange_rate = invoice.exchange_rate ?? 1;
//   const price_pln = invoice.price * exchange_rate;

//   let priceInWords;

//   priceInWords = new PriceToPolishWords(invoice.price, 'Błędna kwota').getPrice(
//     'zl-words zl-full gr-words gr-short'
//   );

//   const dueAmount = invoice.price - invoice.price;

//   const soldDate = formatDate(invoice.sold_date).toISOString().split('T')[0];
//   const paymentDate = formatDate(invoice.payment_date)
//     .toISOString()
//     .split('T')[0];

//   return html
//     .replace(/{{due_amount}}/g, dueAmount.toFixed(2))
//     .replace(/{{currentDate}}/g, currentDate)
//     .replace(/{{tenant_logo}}/g, logoBase64)
//     .replace(/{{invoice_number}}/g, invoice.invoice_number)
//     .replace(/{{seller_name}}/g, invoice.seller_name)
//     .replace(/{{seller_address}}/g, invoice.seller_address)
//     .replace(/{{seller_NIP}}/g, invoice.seller_NIP)
//     .replace(/{{seller_code}}/g, invoice.seller_code)
//     .replace(/{{seller_phone}}/g, invoice.seller_phone)
//     .replace(/{{seller_email}}/g, invoice.seller_email)
//     .replace(/{{seller_postalCode}}/g, invoice.seller_postalCode)
//     .replace(/{{seller_city}}/g, invoice.seller_city)
//     .replace(/{{paymentMethod}}/g, invoice.paymentMethod)
//     .replace(/{{payment_date}}/g, soldDate.toString())
//     .replace(/{{bank_name}}/g, invoice.bank_name)
//     .replace(/{{bank_account}}/g, invoice.bank_account)
//     .replace(/{{bank_swift}}/g, invoice.bank_swift)
//     .replace(/{{buyer_name}}/g, invoice.buyer_name)
//     .replace(/{{buyer_address}}/g, invoice.buyer_address)
//     .replace(/{{buyer_NIP}}/g, invoice.buyer_NIP)
//     .replace(/{{buyer_postalCode}}/g, invoice.buyer_postalCode)
//     .replace(/{{buyer_city}}/g, invoice.buyer_city)
//     .replace(/{{receiver_name}}/g, invoice.receiver_name)
//     .replace(/{{receiver_address}}/g, invoice.receiver_address)
//     .replace(/{{receiver_postalCode}}/g, invoice.receiver_postalCode)
//     .replace(/{{receiver_city}}/g, invoice.receiver_city)
//     .replace(/{{receiver_NIP}}/g, invoice.receiver_NIP)
//     .replace(/{{price}}/g, invoice.price.toString())
//     .replace(/{{currency}}/g, invoice.currency)
//     .replace(/{{payment_name}}/g, invoice.payment_name)
//     .replace(/{{sold_date}}/g, paymentDate.toString())
//     .replace(/{{tenant_city}}/g, invoice.tenant_city)
//     .replace(/{{type}}/g, invoice.type)
//     .replace(/{{price_words}}/g, priceInWords)
//     .replaceAll(/{{price_pln}}/g, price_pln.toFixed(2));
// }
