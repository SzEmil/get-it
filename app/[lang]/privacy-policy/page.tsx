import Image from 'next/image';
import {
  BackgroundImage,
  Box,
  Center,
  Container,
  Flex,
  SimpleGrid,
  Stack,
} from '@mantine/core';
import { Typography } from '@/components/Typography/Typohraphy';
import { I18nProps } from '@/types/types';
import { getLanguagesStaticParams } from '@/i18n/helpers';

export const revalidate = 1800;
export const generateStaticParams = getLanguagesStaticParams;

type Params = I18nProps;
type PageProps = {
  params: Params;
};

export default async function Blog({ params: { lang } }: PageProps) {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      <Container pt={100} pb={100} style={{ position: 'relative', zIndex: 1 }}>
        <Box w={'100%'}>
          <Center>
            <Typography tt={'uppercase'} fw={700} fz={38}>
              Polityka Prywatności i Plików Cookies ToKnowAI
            </Typography>
          </Center>
          <Center>
            <Stack>
              <Typography mb={10}>Postanowienia ogólne</Typography>
              <Typography>
                1.1. Niniejsza Polityka Prywatności i Plików Cookies określa
                zasady przetwarzania i ochrony danych osobowych użytkowników
                strony internetowej prowadzonej przez firmę Karol Sapiołko
                Narevka, z siedzibą w Narewce, ul. Hajnowska 1A, 17-220 Narewka,
                NIP: 6030083353, zwanej dalej &quot;Administratorem&quot;.
              </Typography>
              <Typography>
                1.2. Administrator przetwarza dane osobowe użytkowników zgodnie
                z obowiązującymi przepisami prawa, w szczególności z
                Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z
                dnia 27 kwietnia 2016 r. (RODO).
              </Typography>
              <Typography>
                1.3. Polityka ma na celu zapewnienie transparentności w zakresie
                przetwarzania danych osobowych oraz wykorzystywania plików
                cookies na stronie internetowej.
              </Typography>
              <Typography>
                1.4. Administrator stosuje odpowiednie środki techniczne i
                organizacyjne w celu ochrony danych osobowych przed
                nieuprawnionym dostępem, zmianą, utratą lub zniszczeniem.
              </Typography>

              <Typography>Zakres przetwarzanych danych osobowych</Typography>
              <Typography>
                2.1. Administrator przetwarza dane osobowe niezbędne do
                realizacji usług oferowanych na stronie internetowej, takich
                jak: Imię i nazwisko, Adres e-mail, Numer telefonu, Adres
                zamieszkania lub korespondencyjny, Adres IP, Dane dotyczące
                płatności.
              </Typography>
              <Typography>
                2.2. Administrator może zbierać inne dane dobrowolnie
                udostępnione przez użytkownika, np. w formularzach kontaktowych
                lub ankietach.
              </Typography>

              <Typography>Cele przetwarzania danych</Typography>
              <Typography>
                3.1. Dane osobowe są przetwarzane w następujących celach:
                Świadczenie usług (np. realizacja umów, przetwarzanie płatności,
                obsługa reklamacji), Marketing (np. wysyłka newsletterów za
                zgodą użytkownika), Analiza i statystyka (np. optymalizacja
                strony i oferta kursów online), Spełnienie obowiązków prawnych
                (np. prowadzenie ksiąg rachunkowych).
              </Typography>

              <Typography>Podstawy prawne przetwarzania danych</Typography>
              <Typography>
                4.1. Administrator przetwarza dane osobowe na podstawie: Zgody
                użytkownika (art. 6 ust. 1 lit. a RODO), Realizacji umowy (art.
                6 ust. 1 lit. b RODO), Obowiązku prawnego (art. 6 ust. 1 lit. c
                RODO), Prawnie uzasadnionego interesu Administratora (art. 6
                ust. 1 lit. f RODO).
              </Typography>

              <Typography>Przekazywanie danych osobowych</Typography>
              <Typography>
                5.1. Dane osobowe mogą być przekazywane podmiotom trzecim,
                m.in.: Firmom obsługującym płatności elektroniczne, Dostawcom
                usług hostingowych i IT, Firmom kurierskim.
              </Typography>
              <Typography>
                5.2. Administrator nie przekazuje danych do państw spoza
                Europejskiego Obszaru Gospodarczego bez zapewnienia
                odpowiedniego poziomu ochrony.
              </Typography>

              <Typography>Prawa użytkowników</Typography>
              <Typography>
                6.1. Użytkownicy mają prawo do: Dostępu do swoich danych,
                Sprostowania danych, Usunięcia danych, Ograniczenia
                przetwarzania, Przenoszenia danych, Sprzeciwu wobec
                przetwarzania, Wycofania zgody.
              </Typography>
              <Typography>
                6.2. Aby skorzystać z tych praw, należy skontaktować się z
                Administratorem poprzez e-mail: info@toknowai.pl.
              </Typography>

              <Typography>Pliki cookies</Typography>
              <Typography>
                7.1. Strona internetowa wykorzystuje pliki cookies w
                następujących celach: Zapewnienie funkcjonalności strony,
                Analiza ruchu na stronie, Personalizacja treści marketingowych.
              </Typography>
              <Typography>
                7.2. Użytkownik może zarządzać plikami cookies za pomocą
                ustawień swojej przeglądarki.
              </Typography>
              <Typography>
                7.3. Ograniczenie stosowania plików cookies może wpłynąć na
                funkcjonalność strony internetowej.
              </Typography>

              <Typography>Okres przechowywania danych</Typography>
              <Typography>
                8.1. Dane osobowe są przechowywane przez okres: Niezbędny do
                realizacji celów przetwarzania, Wymagany przepisami prawa.
              </Typography>
              <Typography>
                8.2. Dane przetwarzane na podstawie zgody przechowywane są do
                momentu jej wycofania.
              </Typography>

              <Typography>Bezpieczeństwo danych</Typography>
              <Typography>
                9.1. Administrator stosuje szyfrowanie danych, regularne
                aktualizacje systemów oraz kontrole dostępu w celu ochrony
                danych osobowych.
              </Typography>
              <Typography>
                9.2. Użytkownicy są zobowiązani do zabezpieczenia swoich danych
                dostępowych.
              </Typography>

              <Typography>Zmiany w Polityce</Typography>
              <Typography>
                10.1. Administrator zastrzega sobie prawo do zmian w niniejszej
                Polityce w przypadku zmiany przepisów prawa lub technologii.
              </Typography>
              <Typography>
                10.2. Aktualna wersja Polityki będzie dostępna na stronie
                internetowej.
              </Typography>

              <Typography>Kontakt</Typography>
              <Typography>
                11.1. W przypadku pytań dotyczących Polityki lub przetwarzania
                danych, prosimy o kontakt na adres e-mail: info@toknowai.pl lub
                pisemnie na adres: Karol Sapiołko Narevka, ul. Hajnowska 1A,
                17-220 Narewka.
              </Typography>
            </Stack>
          </Center>
        </Box>
      </Container>
    </div>
  );
}
