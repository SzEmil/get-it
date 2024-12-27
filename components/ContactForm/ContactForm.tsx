'use client';
import {
  Box,
  Button,
  FileInput,
  Flex,
  Text,
  TextInput,
  Textarea,
} from '@mantine/core';
import React, { useState } from 'react';
import { useContactForm } from '../../hooks/useContactForm';

import { ContactFormInitialData } from '../../hooks/useContactForm';
import sendEmail from '@/services/Email/operations/sendEmail';
import { notify } from '@/services/Email/notifications';
import { ContactFormField } from './ContactForm.types';
import { EmailTemplate } from '@/services/Email/templates';

type ContactFormProps = {
  lang: string;
  type: 'footer' | 'contactPage';
  userEmail?: string;
};

export const ContactForm = ({ lang, type, userEmail }: ContactFormProps) => {
  const contactForm = useContactForm(lang, userEmail);
  const [attachment, setAttachment] = useState<File | null>(null);

  const handleOnEmailSend = async (values: ContactFormInitialData) => {
    try {
      const attachments = attachment
        ? [
            {
              filename: attachment.name,
              content: await fileToBase64(attachment),
              encoding: 'base64',
            },
          ]
        : undefined;

      await sendEmail(lang, {
        subject: values.topic,
        html: EmailTemplate.onCustomer(values.email, values.message),
        attachments,
      });

      notify.onCustomerEmailSend();
    } catch (e) {
      console.error('Error sending email:', e);
      notify.onEmailSendError();
    }

    contactForm.reset();
    setAttachment(null); // Resetowanie załącznika po wysłaniu
  };

  return (
    <Box>
      <Text fz={22}>Skontakuj się z nami</Text>

      <form onSubmit={contactForm.onSubmit(handleOnEmailSend)}>
        <Flex gap={10} direction={'column'}>
          <TextInput
            maw={330}
            label="Temat"
            placeholder="Podaj temat"
            {...contactForm.getInputProps(ContactFormField.topic)}
          />
          <TextInput
            maw={500}
            label="Email"
            placeholder="Twój adres email"
            {...contactForm.getInputProps(ContactFormField.email)}
            value={userEmail || contactForm.values.email}
            disabled={!!userEmail} // Disable if userEmail is provided
          />
          <Textarea
            maw={500}
            resize="vertical"
            label="Wiadomość"
            placeholder="Wpisz wiadomość"
            {...contactForm.getInputProps(ContactFormField.message)}
          />

          {type === 'contactPage' && (
            <FileInput
              label="Załącz plik (max. 100 MB)"
              placeholder="Wybierz plik"
              maw={500}
              value={attachment}
              onChange={file => {
                if (file && file.size > 100 * 1024 * 1024) {
                  notify.onEmailSendError();
                  return;
                }
                setAttachment(file);
              }}
              styles={{
                label: {
                  color: 'white',
                },
              }}
            />
          )}
        </Flex>

        <Button w={170} mt={20} type="submit" color="themePrimary.0">
          Wyślij
        </Button>
      </form>
    </Box>
  );
};

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        resolve(reader.result.toString().split(',')[1]); // Pobierz dane Base64
      } else {
        reject(new Error('Failed to convert file to Base64.'));
      }
    };
    reader.onerror = reject;
    reader.readAsDataURL(file); // Odczytaj dane jako URL
  });
};