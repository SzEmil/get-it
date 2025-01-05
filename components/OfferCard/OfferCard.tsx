'use client';

import React from 'react';
import * as DB from '@prisma/client';
import {
  Box,
  Text,
  Title,
  List,
  ThemeIcon,
  Button,
  Group,
  ListItem,
  Flex,
} from '@mantine/core';
import { TiTick } from 'react-icons/ti';
import { nanoid } from 'nanoid';
import styles from './OfferCard.module.css';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import { PickOfferButton } from './components/PickOfferButton';
import Link from 'next/link';
import { ROUTES } from '@/constants';
import { Typography } from '../Typography/Typohraphy';

type OfferCardProps = {
  lang: string;
  offer: DB.Offer;
  userCoursesIds: number[];
};

export const OfferCard = ({ lang, offer, userCoursesIds }: OfferCardProps) => {
  return (
    <li className={styles.courseItem}>
      <Box className={styles.courseCard}>
        <Flex gap={10}>
          {offer.tags.map(tag => (
            <Text key={nanoid()} className={styles.courseType} component="p">
              {tag}
            </Text>
          ))}
        </Flex>
        <Title className={styles.courseTitle} order={3}>
          {offer.name}
        </Title>
        <div className={`${styles.spanLine} ${styles.lineCourseVisible}`}></div>
        <Text className={styles.courseDescription} component="p">
          {offer.description}
        </Text>
        <List className={styles.highlightsList}>
          {offer.goals.map((highlight: string) => (
            <Flex
              className={styles.highlightsItem}
              key={nanoid()}
              align="flex-start"
            >
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '8px',
                }}
              >
                <TiTick
                  color="rgba(71, 202, 235, 0.9)"
                  size={34}
                  style={{
                    backgroundColor: 'transparent',
                    display: 'block',
                  }}
                />
              </div>
              <Text className={styles.highlightsText} component="p">
                {highlight}
              </Text>
            </Flex>
          ))}
        </List>
        <Typography fz={12} mt={10}>
          💡 30-dniowa gwarancja satysfakcji Wierzymy, że nasz kurs dostarczy Ci
          ogrom wartościowej, praktycznej wiedzy. Jednak jeśli z jakiegoś powodu
          uznasz, że nie spełnia Twoich oczekiwań, masz 30 dni na rezygnację.
          Wystarczy, że napiszesz na info@toknowai.pl, a zwrócimy Ci pieniądze —
          bez zadawania zbędnych pytań i bez ryzyka! Rozpocznij swoją przygodę z
          AI już dziś!
        </Typography>
        <Group className={styles.btnBox}>
          <SignedIn>
            {userCoursesIds.some(courseId => courseId === offer.courseId) ? (
              <Group className={styles.infoText}>
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '0px',
                  }}
                >
                  <TiTick
                    color="green"
                    size={30}
                    style={{
                      backgroundColor: 'transparent',
                      display: 'block',
                    }}
                  />
                </div>
                <Text c={'grayscaleWhite.0'}>Kupione</Text>
              </Group>
            ) : (
              <PickOfferButton lang={lang} offer={offer} />
            )}
          </SignedIn>
          <SignedOut>
            <Link className={styles.btnBuy} href={ROUTES.SIGN_IN}>
              Zarejestruj Się By Kupić
            </Link>
          </SignedOut>
          <Text className={styles.price}>
            {offer.price} {offer.currency}
          </Text>
        </Group>
      </Box>
    </li>
  );
};
