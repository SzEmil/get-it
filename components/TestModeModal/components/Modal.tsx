'use client';

import { useDisclosure } from '@mantine/hooks';
import { Modal as MantineModal, Button, Checkbox, Center } from '@mantine/core';
import { useState } from 'react';
import { Typography } from '@/components/Typography/Typohraphy';

type ModalProps = {
  lang: string;
};
export const Modal = ({ lang }: ModalProps) => {
  const [opened, { open, close }] = useDisclosure(true);
  const [checked, setChecked] = useState(false);
  return (
    <MantineModal
      opened={opened}
      onClose={close}
      centered
      withCloseButton={false}
      zIndex={9999}
    >
      <Typography c={"black"}>Ta aplikacja pracuje obecnie w trubie testowym</Typography>
      <Typography c={"black"} pb={20} pt={10}>
        Żadna przeprowadzona tranzakcja nie spowoduje pobrania środków z Twojego
        konta, a produkt nie zostanie dostarczony. Po próbie przeprowadzenia
        tranzakcji, zostaniesz przekierowany/a na stronę testową płatności.
      </Typography>
      <Checkbox
        checked={checked}
        onChange={event => setChecked(event.currentTarget.checked)}
        label="Zrozumiałem, że aplikacja pracuje w trybie testowym"
        mb={15}
      />
      <Center>
        <Button onClick={close}>Zrozumiałem</Button>
      </Center>
    </MantineModal>
  );
};
