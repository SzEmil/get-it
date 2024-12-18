'use client';
import { Box, Button, Flex, Text, TextInput, Textarea } from '@mantine/core';
import React from 'react';
import { useContactForm } from '../../hooks/useContactForm';

import { ContactFormInitialData } from '../../hooks/useContactForm';
import sendEmail from '@/services/Email/operations/sendEmail';
import { notify } from '@/services/Email/notifications';
import { ContactFormField } from './ContactForm.types';
import { EmailTemplate } from '@/services/Email/templates';

type ContactFormProps = {
  lang: string;
};
export const ContactForm = ({ lang }: ContactFormProps) => {
  const contactForm = useContactForm(lang);

  const handleOnEmailSend = async (values: ContactFormInitialData) => {
    try {
      await sendEmail(lang, {
        subject: values.topic,
        html: EmailTemplate.onCustomer(values.email, values.message),
      });
      notify.onCustomerEmailSend();
    } catch (e) {
      console.error('Error sending email:', e);
      notify.onEmailSendError();
    }
    contactForm.reset();
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
          />
          <Textarea
            maw={500}
            resize="vertical"
            label="Wiadomość"
            placeholder="Wpisz wiadomość"
            {...contactForm.getInputProps(ContactFormField.message)}
          />
        </Flex>
        <Button w={170} mt={20} type="submit" color="themePrimary.0">
          Wyślij
        </Button>
      </form>
    </Box>
  );
};
