'use client';

import { useState, useEffect } from 'react';
import { getCouponDetails } from '@/lib/actions/coupon.actions';
import { findOfferById } from '@/lib/actions/offer';
import {
  Container,
  Stack,
  Title,
  Text,
  Button,
  Box,
  Flex,
  ThemeIcon,
  Skeleton,
} from '@mantine/core';
import { FaGift, FaTag, FaUsers } from 'react-icons/fa';
import { Coupon, Offer } from '@prisma/client';
import Link from 'next/link';
import { Routes } from '@/constants/endpoints';

const CallToAction = () => {
  const [offer, setOffer] = useState<Offer | null>(null);
  const [coupon, setCoupon] = useState<Coupon | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: offerData } = await findOfferById(1);
        const { data: couponData } = await getCouponDetails('First100');

        setOffer(offerData);
        setCoupon(couponData);
      } catch (error) {
        console.error('Błąd podczas pobierania danych:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const calculateDiscountedPrice = () => {
    if (offer && coupon) {
      return (offer.price * (1 - coupon.percentage / 100)).toFixed(2);
    }
    return null;
  };

  return (
    <Container size="lg" my="100px">
      <Stack gap="xl" align="center">
        {/* Nagłówek */}
        <Flex align="center" gap="sm">
          <ThemeIcon color="yellow" size={48} radius="xl">
            <FaGift size={32} />
          </ThemeIcon>
          <Title ta="center" order={2} mb="sm" style={{ color: 'white' }}>
            🎉 Wyjątkowa oferta z okazji otwarcia!
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
          {loading ? (
            <Skeleton height={200} />
          ) : (
            <Stack gap="sm">
              <Text c="white" size="sm" ta="center">
                Pierwsze 100 osób ma szansę skorzystać z kodu rabatowego{' '}
                <Text
                  component="span"
                  style={{ color: 'yellow', fontWeight: 'bold' }}
                >
                  {coupon ? `"${coupon.code}"` : 'Loading...'}
                </Text>
                , który obniży cenę kursu aż o {Math.round(coupon?.percentage ?? 0)}%! Nie
                przegap tej okazji — promocja obowiązuje tylko do wyczerpania
                miejsc.
              </Text>

              {/* Ilość pozostałych kuponów */}
              <Flex justify="center" align="center" gap="sm">
                <ThemeIcon color="blue" size={40} radius="xl">
                  <FaUsers size={24} />
                </ThemeIcon>
                <Text
                  c="white"
                  size="lg"
                  ta="center"
                  style={{ fontWeight: 'bold' }}
                >
                  Zgarnij rabat przed innymi! Pozostało{' '}
                  <Text
                    component="span"
                    style={{
                      color: 'yellow',
                      fontWeight: 'bold',
                      fontSize: '1.5rem',
                    }}
                  >
                    {coupon
                      ? Number(coupon.quantity || 0) -
                        Number(coupon.usedQuantity || 0)
                      : '...'}
                  </Text>{' '}
                  kuponów.
                </Text>
              </Flex>

              <Flex justify="space-between" align="center">
                <Flex align="center" gap="sm">
                  <ThemeIcon color="yellow" size={32} radius="xl">
                    <FaTag size={20} />
                  </ThemeIcon>
                  <Text c="white" size="sm">
                    Regularna cena kursu:
                  </Text>
                </Flex>
                <Text
                  c="white"
                  size="sm"
                  fw={700}
                  style={{ textDecoration: 'line-through', opacity: 0.7 }}
                >
                  {offer?.price} {offer?.currency}
                </Text>
              </Flex>

              <Flex justify="space-between" align="center">
                <Flex align="center" gap="sm">
                  <ThemeIcon color="green" size={32} radius="xl">
                    <FaTag size={20} />
                  </ThemeIcon>
                  <Text c="white" size="sm">
                    Cena promocyjna z kodem:
                  </Text>
                </Flex>
                <Text c="green" size="sm" fw={700}>
                  {calculateDiscountedPrice()} {offer?.currency}
                </Text>
              </Flex>

              <Flex justify="space-between" align="center">
                <Flex align="center" gap="sm">
                  <ThemeIcon color="blue" size={32} radius="xl">
                    <FaTag size={20} />
                  </ThemeIcon>
                  <Text c="white" size="sm">
                    Najniższa cena w ostatnich 30 dniach:
                  </Text>
                </Flex>
                <Text c="blue" size="sm" fw={700}>
                  {offer?.price} {offer?.currency}
                </Text>
              </Flex>
            </Stack>
          )}
        </Box>

        {/* Przycisk */}
        <Button
          size="lg"
          color="themePrimary.0"
          radius="md"
          style={{ fontWeight: 'bold' }}
          component={Link}
          href={Routes.offer}
        >
          Rozpocznij teraz
        </Button>
      </Stack>
    </Container>
  );
};

export default CallToAction;
