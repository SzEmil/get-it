'use client';

import {
  Button,
  Flex,
  Text,
  Switch,
  Collapse,
  Accordion,
  Overlay,
  Group,
  Center,
  AccordionItem,
  AccordionPanel,
  AccordionControl,
} from '@mantine/core';
import { useState } from 'react';
import { useUserStore } from '../../../../stores/user/user.store';
import css from './Banner.module.css';

export const Banner = () => {
  const { setGoogleAnalyticsAccepted, setClarityAccepted } = useUserStore();
  const [isBannerOpen, setIsBannerOpen] = useState(true);
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false); // Sterowanie "Dostosuj"
  const [googleAnalyticsEnabled, setGoogleAnalyticsEnabled] = useState(true);
  const [clarityEnabled, setClarityEnabled] = useState(true);

  const handleAcceptAll = () => {
    const expiryDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000); // 1 rok
    setGoogleAnalyticsAccepted({ isEnabled: true, expiriesOn: expiryDate });
    setClarityAccepted({ isEnabled: true, expiriesOn: expiryDate });
    setIsBannerOpen(false);
  };

  const handleSavePreferences = () => {
    const expiryDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000); // 1 rok
    setGoogleAnalyticsAccepted({
      isEnabled: googleAnalyticsEnabled,
      expiriesOn: googleAnalyticsEnabled ? expiryDate : null,
    });
    setClarityAccepted({
      isEnabled: clarityEnabled,
      expiriesOn: clarityEnabled ? expiryDate : null,
    });
    setIsBannerOpen(false);
  };

  if (!isBannerOpen) return null;

  return (
    <Overlay
      opacity={1}
      color="black"
      zIndex={1000}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    >
      <Flex
        align="center"
        justify="center"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <Flex
          direction="column"
          style={{
            backgroundColor: 'black',
            padding: '2rem',
            borderRadius: '12px',
            width: '90%',
            maxWidth: '600px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          }}
        >
          <Text
            style={{
              fontSize: '18px',
              fontWeight: '500',
              marginBottom: '1.5rem',
              textAlign: 'center',
            }}
          >
            Aby zapewnić Ci jak najlepsze wrażenia i udoskonalić nasze produkty,
            wykorzystujemy narzędzia analityczne od Google Analytics i Microsoft
            Clarity. Korzystając z naszej witryny, wyrażasz zgodę na gromadzenie
            i wykorzystywanie tych danych przez nas.
          </Text>
          {!isCustomizeOpen ? (
            <Group align="center">
              <Button
                onClick={handleAcceptAll}
                style={{
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  fontSize: '16px',
                  width: '100%',
                  maxWidth: '250px',
                }}
              >
                Akceptuj wszystkie
              </Button>
              <Button
                onClick={() => setIsCustomizeOpen(true)}
                variant="outline"
                style={{
                  color: '#4CAF50',
                  fontSize: '14px',
                  padding: '0.5rem 1rem',
                  width: '100%',
                  maxWidth: '250px',
                }}
              >
                Dostosuj
              </Button>
            </Group>
          ) : (
            <>
              <Accordion
                multiple
                style={{ marginBottom: '1.5rem' }}
                defaultValue={[]}
              >
                <AccordionItem value="googleAnalytics">
                  <AccordionControl
                    style={{
                      color: 'white', // Ustawia tekst na biały
                      fontWeight: 'bold', // Opcjonalnie pogrubienie tekstu
                    }}
                  >
                    Google Analytics
                  </AccordionControl>
                  <AccordionPanel>
                    <Text style={{ fontSize: '14px', marginBottom: '1rem' }}>
                      Google Analytics to narzędzie analityczne, które pomaga
                      mierzyć ruch na stronie internetowej i analizować dane o
                      użytkownikach.
                    </Text>
                    <Switch
                      label="Włącz Google Analytics"
                      checked={googleAnalyticsEnabled}
                      onChange={e =>
                        setGoogleAnalyticsEnabled(e.currentTarget.checked)
                      }
                    />
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem value="clarity">
                  <AccordionControl
                    style={{
                      color: 'white', // Ustawia tekst na biały
                      fontWeight: 'bold', // Opcjonalnie pogrubienie tekstu
                    }}
                  >
                    Microsoft Clarity
                  </AccordionControl>
                  <AccordionPanel>
                    <Text style={{ fontSize: '14px', marginBottom: '1rem' }}>
                      Microsoft Clarity umożliwia nagrywanie sesji użytkowników
                      i analizowanie ich zachowań w celu poprawy UX.
                    </Text>
                    <Switch
                      label="Włącz Microsoft Clarity"
                      checked={clarityEnabled}
                      onChange={e => setClarityEnabled(e.currentTarget.checked)}
                    />
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Center>
                <Button
                  onClick={handleSavePreferences}
                  style={{
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    fontSize: '16px',
                  }}
                >
                  Zapisz zmiany
                </Button>
              </Center>
            </>
          )}
        </Flex>
      </Flex>
    </Overlay>
  );
};
