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
} from '@mantine/core';
import { TiTick } from 'react-icons/ti';
import { nanoid } from 'nanoid';
import styles from './OfferCard.module.css';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import { PickOfferButton } from './components/PickOfferButton';
import Link from 'next/link';

type OfferCardProps = {
  lang: string;
  offer: DB.Offer;
  isEmailConfirmed: boolean;
  userCoursesIds: number[];
};

export const OfferCard = ({
  lang,
  offer,
  isEmailConfirmed,
  userCoursesIds,
}: OfferCardProps) => {
  return (
    <li className={styles.courseItem}>
      <Box className={styles.courseCard}>
        <Text className={styles.courseType} component="p">
          COURSE
        </Text>
        <Title className={styles.courseTitle} order={3}>
          {offer.name}
        </Title>
        <div className={`${styles.spanLine} ${styles.lineCourseVisible}`}></div>
        <Text className={styles.courseDescription} component="p">
          {offer.description}
        </Text>
        <List className={styles.highlightsList}>
          {offer.goals.map((highlight: string) => (
            <ListItem className={styles.highlightsItem} key={nanoid()}>
              <ThemeIcon className={styles.highlightsIcon}>
                <TiTick size={34} />
              </ThemeIcon>
              <Text className={styles.highlightsText} component="p">
                {highlight}
              </Text>
            </ListItem>
          ))}
        </List>
        <Group className={styles.btnBox}>
          {isEmailConfirmed ? (
            <>
              <SignedIn>
                {userCoursesIds.some(
                  courseId => courseId === offer.courseId
                ) ? (
                  <Group className={styles.infoText}>
                    <TiTick size={28} />
                    <Text>Kupione</Text>
                  </Group>
                ) : (
                  <PickOfferButton lang={lang} offer={offer} />
                )}
              </SignedIn>
              ) : (
              <SignedOut>
                {' '}
                <Link className={styles.btnBuy} href="/">
                  Zarejestruj Się By Kupić
                </Link>
              </SignedOut>
              <Text className={styles.price}>{offer.price} ZŁ</Text>
            </>
          ) : (
            <Text className={styles.infoText}>Zweryfikuj konto</Text>
          )}
        </Group>
      </Box>
    </li>
  );
};
