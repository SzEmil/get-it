'use client';

import React from 'react';
import {
  Container,
  Title,
  Button,
  BackgroundImage,
  Overlay,
  Box,
} from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SignInButton, useAuth } from '@clerk/nextjs';
import styles from './banner.module.css';
import { SignInCustomButton } from '../SignInCustomButton/SignInCustomButton';

type BannerProps = {
  lang: string;
};

const Banner = ({ lang }: BannerProps) => {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: 'black',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className={styles.banner}
      id="home"
    >
      {/* <BackgroundImage
        src={'/background/baner.jpg'}
        style={{
          width: '100%',
          height: '100%',
          minHeight: '95vh',
          zIndex: -1,
        }}
      > */}
      <Overlay
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          height: '100%',
          background:
            'linear-gradient(45deg, rgba(24, 7, 66, 0.5) 0%, rgba(235, 71, 167, 0.5) 100%)',
        }}
      />
      <Container
        style={{
          position: 'relative',
          zIndex: 9,
          paddingTop: '3rem',
          paddingBottom: '3rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Box className={styles.sloganWrapper}>
          <Title
            style={{
              fontSize: '1.5rem',
              fontWeight: 100,
              color: 'white',
              textAlign: 'center',
              marginBottom: '2rem',
              zIndex: 10,
            }}
          >
            Zostań programistą AI!
          </Title>
          <Title
            style={{
              fontSize: '58px',
              fontWeight: 900,
              color: 'white',
              textAlign: 'center',
              marginBottom: '1rem',
              maxWidth: '650px',
              zIndex: 10,
            }}
          >
            Kursy programowania dla poczatkujących
          </Title>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginTop: '3rem',
              zIndex: 10,
            }}
          >
            {isSignedIn ? (
              <Button
                style={{ fontSize: '1rem' }}
                variant="filled"
                size="lg"
                radius={30}
                color="themePrimary.0"
                onClick={() => router.push('/courses')}
              >
                {'Kup Teraz'}
              </Button>
            ) : (
              <SignInCustomButton lang={lang} />
            )}
            <Button
              style={{ fontSize: '1rem' }}
              variant="outline"
              color="yellow"
              size="lg"
              radius={30}
              component={Link}
              href="#howItWorks"
            >
              Jak to Działa
            </Button>
          </div>
        </Box>
      </Container>
      {/* </BackgroundImage> */}
    </section>
  );
};

export default Banner;
