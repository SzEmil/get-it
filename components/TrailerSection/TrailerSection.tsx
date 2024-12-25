import React from 'react';
import {
  Box,
  Stack,
  Text,
  Button,
  Group,
  Image,
  Anchor,
  ThemeIcon,
  Container,
  Title,
} from '@mantine/core';
import { FaPlay, FaBrain, FaCode, FaRobot } from 'react-icons/fa';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import styles from './TrailerSection.module.css';
import { Routes } from '@/constants/endpoints';

export const TrailerSection = () => {
  return (
    <Box
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'black',
        padding: '3rem 0',
      }}
    >
      {/* Background Paint Strokes */}
      <div
        className={`${styles.backgroundPaint} ${styles.backgroundPaint1}`}
      ></div>
      <div
        className={`${styles.backgroundPaint} ${styles.backgroundPaint2}`}
      ></div>

      <Container size="lg">
        <Stack gap="xl" align="center">
          <Title
            ta="center"
            order={2}
            style={{ color: 'white', marginBottom: '1rem' }}
          >
            Dołącz do świata LangChain i Flowise AI
          </Title>

          {/* Video Section */}
          <Box style={{ maxWidth: '800px', width: '100%' }}>
            <VideoPlayer
              videoSrc={
                'https://drive.google.com/file/d/16YRYhURFzjwIOBOOO9m7oP75JlipDoG8/preview'
              }
            />
          </Box>

          {/* Headline and Call-to-Action */}
          <Text ta="center" fw={700} size="xl" style={{ color: '#eb49a8' }}>
            🚀 Rozpocznij swoją podróż z LangChain i Flowise AI już dziś!
          </Text>
          <Text
            ta="center"
            size="md"
            color="dimmed"
            style={{ maxWidth: '700px' }}
          >
            Naucz się podstaw LangChain, odkryj potężne możliwości Flowise AI i
            twórz innowacyjne aplikacje bez kodowania. Zanurz się w świat AI,
            który zmienia reguły gry.
          </Text>

          {/* Key Features */}
          <Group align="center" gap="xl" style={{ marginTop: '1rem' }}>
            <FeatureIcon icon={FaBrain} text="Zrozum podstawy LangChain" />
            <FeatureIcon icon={FaRobot} text="Twórz aplikacje z Flowise AI" />
            <FeatureIcon icon={FaCode} text="Łącz programowanie z AI" />
          </Group>

          {/* Call to Action Button */}
          <Anchor href={Routes.offer} underline={'never'}>
            <Button
              size="lg"
              radius="xl"
              variant="gradient"
              gradient={{ from: '#cf0e81', to: '#ff6ec7' }}
              style={{ marginTop: '2rem' }}
            >
              Zapisz się teraz!
            </Button>
          </Anchor>

          {/* Promo Banner */}
          <Box style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Image
              src="https://via.placeholder.com/700x400?text=Promo+Banner"
              alt="Promocyjny baner"
              radius="md"
              style={{ maxWidth: '700px', width: '100%' }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

// Feature Icon Component
const FeatureIcon = ({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) => (
  <Stack align="center" gap={8}>
    <ThemeIcon size="lg" radius="xl" variant="light" color="#cf0e81">
      <Icon size={24} />
    </ThemeIcon>
    <Text size="sm" ta={'center'} fw={500}>
      {text}
    </Text>
  </Stack>
);