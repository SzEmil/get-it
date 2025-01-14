import { Routes } from '@/constants/endpoints';
import {
  Container,
  Stack,
  Title,
  Text,
  Box,
  ThemeIcon,
  Flex,
  Button,
} from '@mantine/core';
import Link from 'next/link';
import { FaShieldAlt, FaMoneyBillWave, FaRegSmile } from 'react-icons/fa';

const Guarantee = () => {
  return (
    <Container size="lg" my="100px">
      <Stack gap="xl" align="center">
        {/* Nagłówek */}
        <Flex align="center" gap="sm">
          <ThemeIcon color="themePrimary.0" size={48} radius="xl">
            <FaShieldAlt size={32} />
          </ThemeIcon>
          <Title ta="center" order={2} mb="sm" style={{ color: 'white' }}>
            Gwarancja zadowolenia
          </Title>
        </Flex>

        {/* Treść */}
        <Box
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '1.5rem',
            borderRadius: '8px',
            maxWidth: '800px',
          }}
        >
          <Stack gap="sm">
            <Flex align="center" gap="sm">
              <ThemeIcon color="yellow" size={32} radius="xl">
                <FaMoneyBillWave size={20} />
              </ThemeIcon>
              <Text c="white" size="md" fw={500}>
                30-dniowa gwarancja satysfakcji
              </Text>
            </Flex>
            <Text c="white" size="sm">
              Rozumiemy, że decyzja o zakupie kursu to inwestycja w Twój rozwój.
              Dlatego oferujemy Ci pełną swobodę — jeśli po zakupie uznasz, że
              kurs nie spełnia Twoich oczekiwań, możesz w ciągu 30 dni zwrócić
              produkt bez żadnych konsekwencji.
            </Text>

            <Flex align="center" gap="sm">
              <ThemeIcon color="green" size={32} radius="xl">
                <FaRegSmile size={20} />
              </ThemeIcon>
              <Text c="white" size="md" fw={500}>
                Bez ryzyka
              </Text>
            </Flex>
            <Text c="white" size="sm">
              Wystarczy, że skontaktujesz się z nami na{' '}
              <Text
                component="a"
                href="mailto:info@toknowai.pl"
                style={{ color: 'yellow', textDecoration: 'underline' }}
                size="sm"
              >
                info@toknowai.pl
              </Text>
              , a zwrot środków nastąpi w najkrótszym możliwym czasie.
            </Text>

            <Text c="white" size="sm" mt="sm">
              Postaw na swoje umiejętności bez żadnego ryzyka!
            </Text>
          </Stack>
        </Box>
        {/* <Button
          size="lg"
          color="themePrimary.0"
          radius="md"
          style={{ fontWeight: 'bold' }}
          component={Link}
          href={Routes.offer}
        >
          Przekonaj sie
        </Button> */}
      </Stack>
    </Container>
  );
};

export default Guarantee;
