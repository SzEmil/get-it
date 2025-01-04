import React, { useState } from 'react';
import * as DB from '@prisma/client';
import { Button, Flex, Select, Text } from '@mantine/core';
import { PaymentWithOrdrCourse } from '../MyPaymentsList';
import { handleDownloadInvoice } from '@/lib/actions/invoice.actions';

type MyPaymentsItemProps = {
  lang: string;
  payment: PaymentWithOrdrCourse & {
    invoices: DB.Invoice[];
  };
};

export const MyPaymentsItem = ({ lang, payment }: MyPaymentsItemProps) => {
  const [selectedInvoiceId, setSelectedInvoiceId] = useState<number | null>(
    null
  );

  const handleDownload = async () => {
    console.log(selectedInvoiceId);
    if (!selectedInvoiceId) return;
    try {
      const response = await handleDownloadInvoice(Number(selectedInvoiceId));
      console.log('Response from handleDownloadInvoice:', response);
      if (response) {
        const { base64, fileName } = response;
        console.log('File name:', fileName);
        const binary = atob(base64);
        const array = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) {
          array[i] = binary.charCodeAt(i);
        }
        const blob = new Blob([array], { type: 'application/pdf' });

        // Tworzenie linku do pobrania
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        a.remove();
        console.log('Download triggered for:', fileName);
      }
    } catch (e) {
      console.error('Failed to download invoice:', e);
    }
  };

  return (
    <Flex w={'100%'} justify={'space-between'} align={'flex-start'} p={10}>
      <Flex direction={'column'}>
        <Text>
          Produkt: {payment.courses.map(course => course.courseName).join(', ')}
        </Text>
        <Text>Status: {payment.paymentStatus}</Text>
        <Text>Email: {payment.email}</Text>
      </Flex>
      <Flex direction={'column'} ta="right">
        <Text>ID płatności: {payment.paymentSessionId}</Text>
        <Text>
          Kwota: {payment.amount} {payment.currency}
        </Text>
        <Text>{payment.updatedAt.toLocaleDateString()}</Text>

        {/* Select faktur */}
        {payment.invoices.length > 0 && (
          <Select
            label="Wybierz fakturę"
            placeholder="Faktura"
            data={payment.invoices.map(invoice => ({
              value: invoice.id.toString(),
              label: `Faktura ${invoice.invoice_number}`,
            }))}
            onChange={value =>
              setSelectedInvoiceId(value ? parseInt(value) : null)
            }
            styles={theme => ({
              dropdown: {
                color: 'black',
              },
              input: {
                color: 'black',
              },
            })}
          />
        )}

        {/* Przycisk do pobrania faktury */}
        <Button
          mt={10}
          onClick={() => handleDownload()}
          disabled={!selectedInvoiceId}
          color="themePrimary.0"
        >
          Pobierz fakturę
        </Button>
      </Flex>
    </Flex>
  );
};
