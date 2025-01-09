import {
  Container,
  Stack,
  Title,
  Text,
  Flex,
  Box,
  List,
  ThemeIcon,
  ListItem,
} from '@mantine/core';
import {
  FaRobot,
  FaFileAlt,
  FaLink,
  FaBrain,
  FaChartLine,
  FaMoneyBillAlt,
} from 'react-icons/fa';
import { Typography } from '../Typography/Typohraphy';

 const WhatYouWillAchieve = () => {
  return (
    <Container size="lg" my="100px">
      <Stack gap="xl">
        {/* Nagłówek */}
        <Stack gap="xs" align="center">
          <Title ta="center" order={2} mb="sm" style={{ color: 'white' }}>
            Co osiągniesz dzięki kursowi?
          </Title>
          <Typography ta="center" size="sm" c="dimmed">
            Praktyczne umiejętności i wiedza, które wyniesiesz z tego kursu.
          </Typography>
        </Stack>

        {/* Główna sekcja */}
        <Flex
          direction={{ base: 'column', md: 'row' }}
          gap="lg"
          align="stretch"
          justify="space-between"
        >
          {/* Zbudujesz aplikacje */}
          <Box
            style={{
              flex: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '1rem',
              borderRadius: '8px',
            }}
          >
            <Title
              order={3}
              style={{
                color: 'white',
                fontSize: '1.5rem',
                marginBottom: '1rem',
              }}
            >
              Zbudujesz aplikacje AI w praktyce:
            </Title>
            <List
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon color="themePrimary.0" size={24} radius="xl">
                  <FaFileAlt />
                </ThemeIcon>
              }
            >
              <ListItem style={{ color: 'white' }}>
                Chatboty do analizy PDF.
              </ListItem>
              <ListItem
                style={{ color: 'white' }}
                icon={
                  <ThemeIcon color="themePrimary.0" size={24} radius="xl">
                    <FaRobot />
                  </ThemeIcon>
                }
              >
                Autonomiczne aplikacje oparte na agentach AI.
              </ListItem>
              <ListItem
                style={{ color: 'white' }}
                icon={
                  <ThemeIcon color="themePrimary.0" size={24} radius="xl">
                    <FaLink />
                  </ThemeIcon>
                }
              >
                Integracje z zewnętrznymi API (np. Google Sheets, bazy danych).
              </ListItem>
            </List>
          </Box>

          {/* Rozwiniesz swoje umiejętności */}
          <Box
            style={{
              flex: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '1rem',
              borderRadius: '8px',
            }}
          >
            <Title
              order={3}
              style={{
                color: 'white',
                fontSize: '1.5rem',
                marginBottom: '1rem',
              }}
            >
              Rozwiniesz swoje umiejętności:
            </Title>
            <List
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon color="themePrimary.0" size={24} radius="xl">
                  <FaBrain />
                </ThemeIcon>
              }
            >
              <ListItem style={{ color: 'white' }}>
                Zrozumiesz podstawy modeli językowych i Flowise AI.
              </ListItem>
              <ListItem
                style={{ color: 'white' }}
                icon={
                  <ThemeIcon color="themePrimary.0" size={24} radius="xl">
                    <FaChartLine />
                  </ThemeIcon>
                }
              >
                Dowiesz się, jak monitorować wydajność aplikacji.
              </ListItem>
              <ListItem
                style={{ color: 'white' }}
                icon={
                  <ThemeIcon color="themePrimary.0" size={24} radius="xl">
                    <FaMoneyBillAlt />
                  </ThemeIcon>
                }
              >
                Nauczysz się optymalizować koszt użycia modeli GPT.
              </ListItem>
            </List>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};

export default WhatYouWillAchieve