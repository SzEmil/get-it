'use client';

import {
  Container,
  Stack,
  Title,
  Text,
  Timeline,
  ThemeIcon,
  TimelineItem,
  Button,
} from '@mantine/core';
import {
  FaTools,
  FaCloud,
  FaSyncAlt,
  FaChartLine,
  FaCog,
  FaEye,
  FaCogs,
  FaRobot,
  FaWrench,
  FaServer,
  FaProjectDiagram,
  FaBolt,
} from 'react-icons/fa';
import { Typography } from '../Typography/Typohraphy';
import { useState } from 'react';

const modules = [
  {
    icon: <FaTools />,
    title: 'Moduł 1: Wprowadzenie do Flowise',
    content: [
      'Dowiesz się, czym są duże modele językowe (LLM) i jak działają.',
      'Poznasz podstawy pracy z Flowise, od instalacji po pierwsze kroki w aplikacji.',
      'Odkryjesz różnice między GPT-3.5 a GPT-4 oraz ich zastosowania.',
      'Nauczysz się efektywnie wybierać modele do różnych projektów.',
    ],
  },
  {
    icon: <FaCloud />,
    title: 'Moduł 2: Instalacja Flowise',
    content: [
      'Nauczysz się instalować Flowise lokalnie i w chmurze.',
      'Poznasz zalety i wady obu metod instalacji.',
      'Zdobędziesz wiedzę na temat konfiguracji środowiska pracy.',
    ],
  },
  {
    icon: <FaSyncAlt />,
    title: 'Moduł 3: Aktualizacja Flowise',
    content: [
      'Dowiesz się, jak szybko i bezpiecznie zaktualizować Flowise lokalnie oraz w chmurze.',
      'Poznasz narzędzia, takie jak NPM i GitHub, używane w procesie aktualizacji.',
      'Zrozumiesz różnicę między aktualizacją lokalną a na platformie Render.',
      'Nauczysz się unikać typowych błędów podczas aktualizacji.',
    ],
  },
  {
    icon: <FaCog />,
    title: 'Moduł 4: Podstawy FlowiseAI',
    content: [
      'Nauczysz się korzystać z Panelu Chatflow do zarządzania projektami.',
      'Poznasz narzędzia, takie jak Agenci, Marketplace i Klucze API.',
      'Dowiesz się, jak dodawać i zarządzać komponentami w projektach.',
      'Odkryjesz, jak eksportować i importować projekty dla większej elastyczności.',
    ],
  },
  {
    icon: <FaWrench />,
    title: 'Moduł 5: Budowa pierwszego przepływu',
    content: [
      'Stworzysz swój pierwszy przepływ oparty na modelach OpenAI.',
      'Dodasz komponenty, takie jak Łańcuchy Konwersacyjne i Pamięć.',
      'Nauczysz się tworzyć szablony promptów i zmienne dynamiczne.',
      'Przetestujesz swoje rozwiązania w praktycznym środowisku Flowise.',
    ],
  },
  {
    icon: <FaChartLine />,
    title: 'Moduł 6: Monitorowanie aplikacji',
    content: [
      'Nauczysz się monitorować zużycie tokenów i optymalizować koszty użycia modeli.',
      'Poznasz narzędzie LangSmith i jego zastosowania w śledzeniu statystyk.',
      'Dowiesz się, jak analizować wydajność aplikacji i wykrywać błędy.',
      'Zrozumiesz, jak interpretować metryki, takie jak latencja czy użycie zasobów.',
    ],
  },
  {
    icon: <FaProjectDiagram />,
    title: 'Moduł 7: Weryfikacja i łączenie modeli',
    content: [
      'Dowiesz się, jak łączyć modele i weryfikować treści za pomocą szablonów promptów.',
      'Stworzysz złożone interakcje między modelami AI.',
      'Nauczysz się optymalizować ustawienia modeli dla lepszych wyników.',
      'Odkryjesz techniki oceny treści generowanych przez modele.',
    ],
  },
  {
    icon: <FaRobot />,
    title: 'Moduł 8: Praktyczne przykłady',
    content: [
      'Poznasz konkretne przypadki zastosowania Flowise, takie jak chatboty obsługujące PDF-y czy integracje z Google Sheets.',
      'Dowiesz się, jak efektywnie wdrożyć te techniki w swoich projektach.',
      'Odkryjesz, jak zarządzać dużymi zbiorami danych w aplikacjach AI.',
      'Nauczysz się projektować przepływy zoptymalizowane pod kątem użytkownika końcowego.',
    ],
  },
  {
    icon: <FaBolt />,
    title: 'Moduł 9: Zaawansowane techniki',
    content: [
      'Opanujesz moderację treści i integrację z Redis w celu utrzymania długotrwałej pamięci.',
      'Nauczysz się korzystać z Function Calling i Agentów do realizacji złożonych zadań.',
      'Poznasz techniki skalowania aplikacji AI dla większej liczby użytkowników.',
      'Dowiesz się, jak integrować zaawansowane API i narzędzia analityczne w swoich projektach.',
    ],
  },
];

export const CourseProgram = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleModules = showAll ? modules : modules.slice(0, 4);

  return (
    <Container size="lg" my="100px">
      <Stack gap="xl">
        {/* Nagłówek */}
        <Stack align="center" gap="xs">
          <Title ta="center" order={2} mb="sm" style={{ color: 'white' }}>
            Program kursu
          </Title>
          <Typography ta="center" c="dimmed">
            Kompleksowy program nauczania krok po kroku
          </Typography>
        </Stack>

        {/* Timeline */}
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
          <Timeline
            active={-1}
            bulletSize={24}
            lineWidth={2}
            color="themePrimary.0"
          >
            {visibleModules.map((module, index) => (
              <TimelineItem
                key={index}
                bullet={
                  <ThemeIcon color="themePrimary.0" size={24} radius="xl">
                    {module.icon}
                  </ThemeIcon>
                }
                title={module.title}
                styles={{ itemTitle: { color: 'white' } }}
              >
                {module.content.map((text, idx) => (
                  <Text c="white" size="sm" key={idx}>
                    {text}
                  </Text>
                ))}
              </TimelineItem>
            ))}
          </Timeline>
        </div>

        {/* Przycisk Rozwiń/Zwiń */}
        <Stack align="center" mt="md">
          <Button
            onClick={() => setShowAll(prev => !prev)}
            variant="outline"
            color="themePrimary.0"
          >
            {showAll ? 'Zwiń' : 'Rozwiń'}
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default CourseProgram