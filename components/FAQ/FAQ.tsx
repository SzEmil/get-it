import {
  Container,
  Stack,
  Title,
  Text,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionControl,
} from '@mantine/core';
import { Typography } from '../Typography/Typohraphy';

export const FAQ = () => {
  const faqs = [
    {
      question: 'Czym jest kurs Flowise AI?',
      answer:
        'To kompleksowy kurs wprowadzający do tworzenia aplikacji AI za pomocą intuicyjnej, graficznej platformy Flowise AI. Nie wymaga znajomości programowania!',
    },
    {
      question: 'Czy kurs jest odpowiedni dla początkujących?',
      answer:
        'Tak! Kurs został zaprojektowany z myślą o osobach bez doświadczenia technicznego, które chcą nauczyć się korzystać z AI w praktyce.',
    },
    {
      question: 'Jak długo trwa kurs?',
      answer:
        'Łączny czas materiałów wideo to około 2,5 godziny. Kurs zawiera również dodatkowe materiały w formie grafik i tekstów, a powtarzanie przykładów przedstawionych w kursie może zająć dodatkowy czas.',
    },
    {
      question: 'Czy mogę otrzymać fakturę za zakup kursu?',
      answer:
        'Tak, wystawiamy faktury bez VAT. Wystarczy podać dane do faktury podczas zakupu.',
    },
    {
      question: 'Na ile czasu otrzymuję dostęp do kursu?',
      answer:
        'Dostęp jest bezterminowy — możesz wracać do materiałów w dowolnym momencie.',
    },
    {
      question: 'Czy muszę posiadać specjalistyczny sprzęt lub oprogramowanie?',
      answer:
        'Nie, do kursu wystarczy komputer z dostępem do internetu. Wszystkie narzędzia używane w kursie są bezpłatne lub posiadają darmowe wersje próbne.',
    },
    {
      question: 'Czy kurs jest dostępny na urządzeniach mobilnych?',
      answer:
        'Tak, materiały kursu możesz oglądać na komputerze, tablecie lub smartfonie.',
    },
    {
      question: 'Czy mogę wracać do materiałów po ukończeniu kursu?',
      answer:
        'Tak, dostęp do kursu jest bezterminowy. Możesz wracać do materiałów w dowolnym momencie.',
    },
    {
      question: 'Czy potrzebuję znajomości języka angielskiego?',
      answer:
        'Nie, cały kurs jest w języku polskim. Jeśli pojawiają się narzędzia lub interfejsy w języku angielskim, są one dokładnie omówione w lekcjach.',
    },
    {
      question: 'Czy mogę kupić kurs dla zespołu lub kilku osób?',
      answer:
        'Tak, oferujemy opcję zakupu licencji grupowych. Skontaktuj się z nami na info@toknowai.pl, aby dowiedzieć się więcej.',
    },
    {
      question: 'Co zrobić, jeśli napotkam problemy techniczne podczas kursu?',
      answer:
        'Jeśli napotkasz jakiekolwiek problemy techniczne, skontaktuj się z naszym zespołem wsparcia na info@toknowai.pl.',
    },
    {
      question:
        'Czy kurs obejmuje aktualizacje, jeśli Flowise AI wprowadzi nowe funkcje?',
      answer:
        'Tak, kurs będzie aktualizowany, aby uwzględnić nowe funkcje i zmiany w Flowise AI. Masz do nich dostęp bez dodatkowych opłat.',
    },
    {
      question: 'Co wyróżnia ten kurs na tle innych?',
      answer:
        'Nasz kurs koncentruje się na praktycznym wykorzystaniu Flowise AI i tworzeniu aplikacji krok po kroku. Dzięki temu szybko nauczysz się używać narzędzia w rzeczywistych projektach.',
    },
    {
      question: 'Czy mogę przetestować fragment kursu przed zakupem?',
      answer:
        'Tak, na stronie kursu znajdziesz darmową lekcję demonstracyjną, aby zapoznać się z jakością materiałów.',
    },
  ];

  return (
    <Container size="lg" my="100px">
      <Stack gap="xl">
        {/* Nagłówek */}
        <Stack align="center" gap="xs">
          <Title ta="center" order={2} mb="sm" style={{ color: 'white' }}>
            FAQ - Najczęściej zadawane pytania
          </Title>
          <Typography ta="center" c="dimmed">
            Masz pytania? Znajdziesz tutaj odpowiedzi na najczęściej zadawane
            pytania!
          </Typography>
        </Stack>

        {/* Accordion */}
        <Accordion
          variant="separated"
          radius="md"
          transitionDuration={200}
          maw={580}
          w={'100%'}
        >
          {faqs.map((faq, index) => (
            <AccordionItem value={faq.question} key={index}>
              <AccordionControl style={{ color: 'black' }}>
                {faq.question}
              </AccordionControl>
              <AccordionPanel>
                <Text c="black" size="sm">
                  {faq.answer}
                </Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Stack>
    </Container>
  );
};
