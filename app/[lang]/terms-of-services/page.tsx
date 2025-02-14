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
              Regulamin sklepu internetowego ToKnowAI
            </Typography>
          </Center>
          <Center>
            <Stack>
              <Typography mb={10}>Postanowienia ogólne</Typography>
              <Typography>
                1.1. Niniejszy Regulamin określa zasady sprzedaży kursów online
                z zakresu sztucznej inteligencji, prowadzonej przez firmę Karol
                Sapiołko Narevka, z siedzibą w Narewce, ul. Hajnowska 1A, 17-220
                Narewka, NIP: 6030083353, za pośrednictwem strony internetowej
                https://toknowai.pl, zwanej dalej &quot;Sklepem&quot;.
              </Typography>
              <Typography>
                1.2. Sklep internetowy ToKnowAI prowadzony jest przez firmę
                Karol Sapiołko Narevka, zwaną dalej &quot;Sprzedawcą&quot;.
              </Typography>
              <Typography>
                1.3. Kontakt ze Sprzedawcą możliwy jest poprzez e-mail:
                info@toknowai.pl lub pisemnie na adres siedziby firmy.
              </Typography>
              <Typography>
                1.4. Regulamin stanowi integralną część umowy sprzedaży
                zawieranej pomiędzy Kupującym a Sprzedawcą. Akceptacja
                Regulaminu jest warunkiem koniecznym do złożenia zamówienia w
                Sklepie.
              </Typography>

              <Typography>Definicje</Typography>
              <Typography>
                2.1. Kupujący - osoba fizyczna, osoba prawna lub jednostka
                organizacyjna nieposiadająca osobowości prawnej, dokonująca
                zakupów w Sklepie.
              </Typography>
              <Typography>
                2.2. Sprzedawca - Karol Sapiołko Narevka, z siedzibą w Narewce,
                ul. Hajnowska 1A, 17-220 Narewka, NIP: 6030083353.
              </Typography>
              <Typography>
                2.3. Kurs online - produkt cyfrowy dostępny w formie dostępu do
                materiałów edukacyjnych oferowany przez Sprzedawcę w Sklepie.
              </Typography>
              <Typography>
                2.4. Umowa sprzedaży - umowa zawarta pomiędzy Kupującym a
                Sprzedawcą na odległość, za pośrednictwem Sklepu, dotycząca
                sprzedaży Kursów online.
              </Typography>

              <Typography>Składanie zamówień</Typography>
              <Typography>
                3.1. Zamówienia na Kursy online można składać za pośrednictwem
                strony internetowej Sklepu, dostępnej pod adresem
                https://toknowai.pl.
              </Typography>
              <Typography>
                3.2. Kupujący zobowiązany jest do podania prawidłowych danych
                osobowych, niezbędnych do realizacji zamówienia. Sprzedawca nie
                ponosi odpowiedzialności za błędy w danych podanych przez
                Kupującego.
              </Typography>
              <Typography>
                3.3. Po złożeniu zamówienia, Kupujący otrzymuje e-mail
                potwierdzający przyjęcie zamówienia do realizacji. Umowa
                sprzedaży zostaje zawarta w momencie otrzymania przez Kupującego
                potwierdzenia zamówienia.
              </Typography>

              <Typography>Płatności</Typography>
              <Typography>
                4.1. Ceny Kursów online podane w Sklepie są cenami brutto.
                Sprzedawca nie jest płatnikiem VAT, w związku z czym na
                fakturach widnieje adnotacja &quot;faktura bez VAT&quot;.
              </Typography>
              <Typography>
                4.2. Kupujący może dokonać płatności za zamówione Kursy online
                za pośrednictwem dostępnych w Sklepie metod płatności, takich
                jak: przelew bankowy, płatność kartą płatniczą, płatności
                elektroniczne (np. Przelewy24).
              </Typography>
              <Typography>
                4.3. Realizacja zamówienia rozpoczyna się po zaksięgowaniu
                płatności na koncie Sprzedawcy.
              </Typography>
              <Typography>
                4.4. Sprzedawca zastrzega sobie prawo do zmiany cen Kursów
                online, oferowania promocji i rabatów. Zmiany cen nie dotyczą
                zamówień już złożonych przez Kupujących.
              </Typography>

              <Typography>Realizacja zamówień</Typography>
              <Typography>
                5.1. Po dokonaniu płatności i zawarciu umowy sprzedaży, Kupujący
                otrzymuje dostęp do zakupionego Kursu online za pośrednictwem
                konta użytkownika w Sklepie lub poprzez bezpośredni link wysłany
                na podany adres e-mail.
              </Typography>
              <Typography>
                5.2. Dostęp do Kursu online jest udzielany na czas określony lub
                nieokreślony, w zależności od specyfikacji kursu podanej w
                opisie produktu na stronie Sklepu.
              </Typography>
              <Typography>
                5.3. Sprzedawca zastrzega sobie prawo do czasowego wstrzymania
                dostępu do Kursów online w celu przeprowadzenia prac
                konserwacyjnych lub aktualizacji, informując o tym Kupującego z
                odpowiednim wyprzedzeniem.
              </Typography>
              <Typography>
                6.1. Kupującemu, będącemu konsumentem, przysługuje prawo do
                odstąpienia od umowy zawartej na odległość bez podania
                przyczyny, w terminie 14 dni od dnia zawarcia umowy, zgodnie z
                przepisami ustawy o prawach konsumenta.
              </Typography>
              <Typography>
                6.2. Prawo odstąpienia od umowy nie przysługuje w przypadku
                dostarczenia treści cyfrowych, które nie są zapisane na nośniku
                materialnym, jeżeli spełnianie świadczenia rozpoczęło się za
                wyraźną zgodą konsumenta przed upływem terminu do odstąpienia od
                umowy i po poinformowaniu go przez Sprzedawcę o utracie prawa
                odstąpienia od umowy.
              </Typography>
              <Typography>
                6.3. Aby skorzystać z prawa odstąpienia od umowy, Kupujący
                powinien złożyć jednoznaczne oświadczenie o odstąpieniu od
                umowy, wysyłając je na adres e-mail: info@toknowai.pl.
                Sprzedawca niezwłocznie potwierdzi otrzymanie takiego
                oświadczenia.
              </Typography>
              <Typography>
                6.4. W przypadku skutecznego odstąpienia od umowy, Sprzedawca
                zwróci Kupującemu wszystkie otrzymane od niego płatności, w tym
                koszty dostarczenia treści cyfrowych (jeśli takie były), nie
                później niż w terminie 14 dni od dnia otrzymania oświadczenia o
                odstąpieniu od umowy.
              </Typography>

              <Typography>Reklamacje</Typography>
              <Typography>
                7.1. Sprzedawca zobowiązuje się dostarczać Kupującemu Kursy
                online zgodne z opisem zawartym na stronie Sklepu.
              </Typography>
              <Typography>
                7.2. W przypadku niezgodności Kursu online z umową, Kupujący ma
                prawo do złożenia reklamacji.
              </Typography>
              <Typography>
                7.3. Reklamacje należy składać drogą elektroniczną na adres
                e-mail: info@toknowai.pl, opisując niezgodność oraz
                przedstawiając dowód zakupu.
              </Typography>
              <Typography>
                7.4. Sprzedawca rozpatrzy reklamację w terminie 14 dni od jej
                otrzymania i poinformuje Kupującego o wyniku rozpatrzenia
                reklamacji drogą elektroniczną.
              </Typography>
              <Typography>
                7.5. W przypadku uznania reklamacji za zasadną, Sprzedawca
                niezwłocznie podejmie działania mające na celu naprawienie
                stwierdzonej niezgodności, np. poprzez dostarczenie poprawnego
                Kursu online lub zwrot ceny zakupu.
              </Typography>

              <Typography>Polityka zwrotów</Typography>
              <Typography>
                8.1. Kupujący, będący konsumentem, ma prawo do zwrotu Kursu
                online w przypadkach przewidzianych przez prawo oraz na zasadach
                określonych w niniejszym Regulaminie.
              </Typography>
              <Typography>
                8.2. Zwrot środków następuje w terminie do 14 dni od dnia
                otrzymania przez Sprzedawcę oświadczenia o odstąpieniu od umowy
                lub uznania reklamacji.
              </Typography>
              <Typography>
                8.3. Środki zostaną zwrócone Kupującemu przy użyciu takiej samej
                metody płatności, jakiej użył Kupujący do zapłaty za Kurs
                online, chyba że Kupujący wyraźnie zgodzi się na inne
                rozwiązanie.
              </Typography>
              <Typography>
                8.4. W przypadku zwrotu środków, Sprzedawca nie ponosi kosztów
                dodatkowych opłat bankowych lub prowizyjnych, które mogą być
                naliczone przez bank Kupującego.
              </Typography>
              <Typography>
                9.1. Sprzedawca nie ponosi odpowiedzialności za przerwy w
                dostępności Sklepu wynikające z przyczyn niezależnych od niego,
                takich jak awarie techniczne, działania siły wyższej, przerwy w
                dostawie usług internetowych.
              </Typography>
              <Typography>
                9.2. Sprzedawca nie odpowiada za problemy techniczne lub
                ograniczenia techniczne w urządzeniach, z których korzysta
                Kupujący, a które uniemożliwiają mu prawidłowe korzystanie z
                Kursów online.
              </Typography>
              <Typography>
                9.3. Sprzedawca nie ponosi odpowiedzialności za skutki
                wynikające z niewłaściwego korzystania z Kursów online przez
                Kupującego.
              </Typography>

              <Typography>Postanowienia końcowe</Typography>
              <Typography>
                10.1. Niniejszy Regulamin jest dostępny na stronie internetowej
                https://toknowai.pl i wchodzi w życie z dniem jego publikacji.
              </Typography>
              <Typography>
                10.2. Sprzedawca zastrzega sobie prawo do wprowadzenia zmian w
                Regulaminie w każdym czasie, z zastrzeżeniem, że do umów
                zawartych przed zmianą Regulaminu stosuje się wersję Regulaminu
                obowiązującą w chwili zawarcia umowy.
              </Typography>
              <Typography>
                10.3. Wszelkie spory wynikłe z realizacji umów sprzedaży
                pomiędzy Sprzedawcą a Kupującym będą rozstrzygane w pierwszej
                kolejności na drodze negocjacji, z intencją polubownego
                zakończenia sporu. W przypadku braku porozumienia spór
                rozstrzygany będzie przez właściwy sąd powszechny.
              </Typography>
              <Typography>
                10.4. W sprawach nieuregulowanych w niniejszym Regulaminie mają
                zastosowanie przepisy prawa polskiego, w szczególności Kodeksu
                cywilnego oraz ustawy o prawach konsumenta.
              </Typography>
            </Stack>
          </Center>
        </Box>
      </Container>
    </div>
  );
}
