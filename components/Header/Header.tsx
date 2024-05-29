import { Flex, Text } from '@mantine/core';
import css from './Header.module.css';
import Link from 'next/link';
import { ROUTES } from '@/constants';
import { i18n } from '@/i18n/helpers';
import { Typohraphy } from '../Typography/Typohraphy';

type HeaderProps = {
  lang: string;
};

export const Header = ({ lang }: HeaderProps) => {
  return (
    <Flex
      direction={'row'}
      justify={'space-between'}
      align={'center'}
      pl={24}
      pr={24}
    >
      <Typohraphy fz={34} fw={500}>
        GET-IT
      </Typohraphy>
      <nav className={css.navigation}>
        <Link href={ROUTES.HOME}>{i18n(lang).header.nav.home}</Link>
        <Link href={ROUTES.HOME}>Oferta</Link>
        <Link href={ROUTES.HOME}>O nas</Link>
        <Link href={ROUTES.HOME}>Kontakt</Link>
      </nav>
      <Typohraphy>Login</Typohraphy>
    </Flex>
  );
};
