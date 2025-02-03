'use client';

import React from 'react';
import {
  Container,
  Title,
  Button,
  BackgroundImage,
  Overlay,
  Box,
  Flex,
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
        <Flex
          w={'100%'}
          h={'100%'}
          direction={'column'}
          justify={'center'}
          align={'center'}
        >
          <Box className={styles.sloganWrapper}>
            <Title
              style={{
                fontWeight: 100,
                color: 'white',
                textAlign: 'center',
                marginBottom: '2rem',
                zIndex: 10,
                maxWidth: '600px',
              }}
              fz={{ base: 18, sm: 24 }}
            >
              {/* Stwórz aplikacje AI dopasowane do Twojej branży: księgowość,
              marketing, biznes i wiele więcej. */}
              Zostań ekspertem AI bez pisania kodu!
            </Title>
            <Title
              style={{
                color: 'white',
                textAlign: 'center',
                maxWidth: '750px',
                zIndex: 10,
              }}
              fw={900}
              fz={{ base: 28, sm: 48, md: 48 }}
              mb={2}
            >
              Twórz potężne aplikacje oparte na Flowise AI - szybko i
              intuicyjnie
              {/* Zostań ekspertem AI bez pisania kodu! Odkryj, jak Flowise AI może
              usprawnić Twoje procesy w księgowości, marketingu i zarządzaniu */}
            </Title>
            <Flex
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                marginTop: '3rem',
                zIndex: 10,
              }}
              direction={{ base: 'column', sm: 'row' }}
            >
              {isSignedIn ? (
                <Button
                  style={{ fontSize: '1rem' }}
                  variant="filled"
                  size="lg"
                  radius={30}
                  color="themePrimary.0"
                  onClick={() => router.push('/offer')}
                >
                  {'Rozpocznij teraz'}
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
                href="#courseDemo"
              >
                {/* Zobacz zastosowanie dla Twojej branży */}
                Zobacz przykładową lekcję
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
