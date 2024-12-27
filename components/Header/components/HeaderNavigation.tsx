
import { Routes } from '@/constants/endpoints';
import Link from 'next/link';
import React from 'react';
import css from '../Header.module.css';
import { i18n } from '@/i18n/helpers';

type HeaderNavigationProps = {
  lang: string;
};

export const HeaderNavigation = ({ lang }: HeaderNavigationProps) => {
  return (
    <nav className={css.navigation}>
      <Link href={Routes.home}>Start</Link>
      <Link href={Routes.offer}>Oferta</Link>
      <Link href={Routes.home}>O nas</Link>
      <Link href={Routes.contact}>Kontakt</Link>
    </nav>
  );
};
