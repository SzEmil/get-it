'use client';
import {
  Box,
  Button,
  FileInput,
  Flex,
  Text,
  TextInput,
  Textarea,
  Group,
} from '@mantine/core';
import React, { useState } from 'react';
import { useContactForm } from '../../hooks/useContactForm';

import { ContactFormInitialData } from '../../hooks/useContactForm';
import sendEmail from '@/services/Email/operations/sendEmail';
import { notify } from '@/services/Email/notifications';
import { ContactFormField } from './ContactForm.types';
import { EmailTemplate } from '@/services/Email/templates';
import {
  AiOutlineMail,
  AiOutlinePaperClip,
  AiOutlineSend,
} from 'react-icons/ai';
import { FaPen } from 'react-icons/fa';

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
    <Box p={20} style={{ width: '100%' }}>
      <Text fz={24} fw={700} ta="center" mb={15}>
        📧 Skontaktuj się z nami
      </Text>
      <Text fz={16} ta="center" c="dimmed" mb={20}>
        Masz pytania? Wypełnij formularz poniżej, a my skontaktujemy się z Tobą!
      </Text>

      <form onSubmit={contactForm.onSubmit(handleOnEmailSend)}>
        <Flex gap={15} direction="column" align="center" w={'100%'}>
          <TextInput
            maw={800}
            w={'100%'}
            label={
              <Group gap={5}>
                <FaPen /> <span>Temat</span>
              </Group>
            }
            placeholder="Podaj temat"
            {...contactForm.getInputProps(ContactFormField.topic)}
          />
          <TextInput
            maw={800}
            w={'100%'}
            label={
              <Group gap={5}>
                <AiOutlineMail /> <span>Email</span>
              </Group>
            }
            placeholder="Twój adres email"
            {...contactForm.getInputProps(ContactFormField.email)}
            value={userEmail || contactForm.values.email}
            disabled={!!userEmail} // Disable if userEmail is provided
          />
          <Textarea
            maw={800}
            w={'100%'}
            resize="vertical"
            label="✍️ Wiadomość"
            placeholder="Wpisz wiadomość"
            {...contactForm.getInputProps(ContactFormField.message)}
          />
          {type === 'contactPage' && (
            <FileInput
              label={
                <Group gap={5}>
                  <AiOutlinePaperClip /> <span>Załącz plik (max. 100 MB)</span>
                </Group>
              }
              placeholder="Wybierz plik"
              maw={800}
              w={'100%'}
              value={attachment}
              onChange={file => {
                if (file && file.size > 100 * 1024 * 1024) {
                  notify.onEmailSendError();
                  return;
                }
                setAttachment(file);
              }}
              styles={{
                label: { color: '#495057', fontWeight: 600 },
              }}
            />
          )}
        </Flex>

        <Flex justify="center" mt={20}>
          <Button
            w={180}
            leftSection={<AiOutlineSend />}
            type="submit"
            color="themePrimary.0"
            size="lg"
            radius="xl"
            styles={{
              root: {
                background:
                  'linear-gradient(135deg, rgb(255, 102, 153) 0%, rgb(153, 102, 255) 100%)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  background:
                    'linear-gradient(135deg, rgb(255, 77, 136) 0%, rgb(128, 77, 255) 100%)',
                },
              },
            }}
          >
            Wyślij
          </Button>
        </Flex>
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
