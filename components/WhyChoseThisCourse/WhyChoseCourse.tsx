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
  Flex,
  Divider,
  Card,
} from '@mantine/core';
import styles from './TrailerSection.module.css';
import { Routes } from '@/constants/endpoints';
import { Typography } from '../Typography/Typohraphy';
import { FaRocket, FaBullseye, FaLightbulb } from 'react-icons/fa';

 const WhyChoseCourse = () => {
  return (
    <Container size="lg" my="100px">
      <Stack gap="xl" align="center">
        {/* Nagłówek */}
        <Stack gap="xs" align="center">
          <Title ta="center" order={2} mb="sm" style={{ color: 'white' }}>
            Dlaczego warto wybrać ten kurs?
          </Title>
          <Typography ta="center" size="sm" c="dimmed">
            Poznaj kluczowe powody, dla których ten kurs zmieni Twoje życie.
          </Typography>
        </Stack>

        {/* Główna sekcja z kartami */}
        <Flex
          direction={{ base: 'column', md: 'row' }}
          gap="lg"
          align="stretch"
          justify="center"
        >
          {/* Karta: Unikalny program */}
          <Card
            radius="md"
            shadow="md"
            p="lg"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', flex: 1 }}
          >
            <Flex align="center" gap="md">
              <Box
                style={{
                  backgroundColor: 'transparent',
                  padding: '0.5rem',
                  borderRadius: '50%',
                }}
                mt={1}
              >
                <FaBullseye size={30} color="white" />
              </Box>
              <Title order={3} style={{ color: 'white', fontSize: '1.5rem' }}>
                Unikalny program edukacyjny
              </Title>
            </Flex>
            <Divider my="sm" />
            <Text size="sm" style={{ color: 'white', lineHeight: 1.5 }}>
              - Nauczysz się, jak budować chatboty, aplikacje SaaS i systemy
              rekomendacyjne krok po kroku. <br />- Wykorzystasz najnowsze
              technologie, takie jak Flowise, LangChain i GPT-4.
            </Text>
          </Card>

          {/* Karta: Prosto i intuicyjnie */}
          <Card
            radius="md"
            shadow="md"
            p="lg"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', flex: 1 }}
          >
            <Flex align="center" gap="md">
              <Box
                style={{
                  backgroundColor: 'transparent',
                  padding: '0.5rem',
                  borderRadius: '50%',
                }}
                mt={1}
              >
                <FaRocket size={30} color="white" />
              </Box>
              <Title order={3} style={{ color: 'white', fontSize: '1.5rem' }}>
                Prosto i intuicyjnie
              </Title>
            </Flex>
            <Divider my="sm" />
            <Text size="sm" style={{ color: 'white', lineHeight: 1.5 }}>
              - Bez kodowania, bez stresu — wszystko dzięki graficznym
              narzędziom „drag & drop”.
            </Text>
          </Card>

          {/* Karta: Dla kogo */}
          <Card
            radius="md"
            shadow="md"
            p="lg"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', flex: 1 }}
          >
            <Flex align="center" gap="md">
              <Box
                style={{
                  backgroundColor: 'transparent',
                  padding: '0.5rem',
                  borderRadius: '50%',
                }}
                mt={1}
              >
                <FaLightbulb size={30} color="white" />
              </Box>
              <Title order={3} style={{ color: 'white', fontSize: '1.5rem' }}>
                Dla kogo?
              </Title>
            </Flex>
            <Divider my="sm" />
            <Text size="sm" style={{ color: 'white', lineHeight: 1.5 }}>
              - Początkujący: zero doświadczenia w programowaniu? Żaden problem!{' '}
              <br />- Zaawansowani: pogłębisz wiedzę dzięki zaawansowanym
              funkcjom, jak Function Calling i długotrwała pamięć.
            </Text>
          </Card>
        </Flex>
      </Stack>
    </Container>
  );
};
export default WhyChoseCourse