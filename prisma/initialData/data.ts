import { CourseStatus, OfferStatus } from '@prisma/client';

export const courses = [
  {
    id: 1,
    courseId: 1,
    name: 'Lanchain - kurs podstawowy',
    description: 'Opis kursu pierwszego',
    images: ['image1.png', 'image2.png'],
    language: 'pl',
    status: CourseStatus.ACTIVE,

    //

    lessons: [
      // 1
      {
        id: 101,
        title:
          'Lekcja 1 - Wprowadzenie do Flowise: Tworzenie Aplikacji z Dużymi Modelami Językowymi',
        about: [
          {
            title: 'Wprowadzenie do Flowise',
            description:
              '<p>Flowise to narzędzie, które rewolucjonizuje tworzenie aplikacji opartych na sztucznej inteligencji, szczególnie tych korzystających z dużych modeli językowych (LLM). Dzięki niemu, osoby bez zaawansowanej wiedzy programistycznej mogą budować interaktywne chatboty, systemy analizy tekstu oraz aplikacje oparte na konwersacjach AI. Flowise pozwala na projektowanie interfejsów graficznych, integrację z różnymi modelami oraz efektywne zarządzanie danymi wejściowymi i wyjściowymi.</p>',
          },
          {
            title: 'Wprowadzenie do Dużych Modeli Językowych (LLM)',
            description:
              '<p>Duże modele językowe, takie jak GPT-3, GPT-4 czy Gemini od Google, są rdzeniem współczesnych technologii przetwarzania języka naturalnego (NLP). Te modele są trenowane na ogromnych zbiorach danych językowych, co pozwala im generować odpowiedzi na pytania, analizować teksty, a nawet prowadzić rozbudowane konwersacje, zbliżone do interakcji z człowiekiem.</p>',
          },
          {
            description:
              '<p>Jednym z kluczowych aspektów działania LLM są tokeny. Tokeny to jednostki tekstu – mogą to być słowa, znaki lub fragmenty zdań – które są analizowane przez model. Kiedy wpisujemy zdanie, jest ono rozbijane na tokeny, które model przetwarza, aby odpowiedzieć w sposób spójny i zrozumiały.</p>',
          },
          {
            description:
              '<p>Aby lepiej zrozumieć, czym są tokeny i jak działają, warto odwiedzić narzędzia takie jak strona OpenAI, gdzie można zobaczyć, jak GPT przetwarza tekst na tokeny i w jaki sposób analizuje je, aby wygenerować odpowiedzi.</p>',
          },
          {
            title: 'Przetwarzanie Kontekstu przez Modele Językowe',
            description:
              '<p>Ważne jest zrozumienie, że modele językowe, mimo zaawansowania, nie "pamiętają" poprzednich rozmów w taki sposób, jak moglibyśmy to sobie wyobrażać. Każda nowa odpowiedź jest generowana na podstawie nowego zapytania (promptu), który może zawierać skrótową historię wcześniejszej konwersacji.</p>',
          },
          {
            description:
              '<p>Na przykład, w modelach takich jak GPT-4, istnieje ograniczenie liczby tokenów, które można przetworzyć jednocześnie. GPT-4 może obsłużyć do 128 tysięcy tokenów (około 300 stron tekstu), podczas gdy GPT-3.5 – jedynie 16 tysięcy tokenów (około 14 stron). Choć nowszy model GPT-4 oferuje większe możliwości, nie zawsze jest konieczne jego użycie. GPT-3.5, mimo mniejszej liczby tokenów, działa szybciej i jest wystarczający do prostszych zadań.</p>',
          },
          {
            title: 'Wybór Modelu do Twojej Aplikacji',
            description:
              '<p>Wybór odpowiedniego modelu zależy od specyfiki zadania. Do zadań prostszych, gdzie kluczowa jest szybkość odpowiedzi, GPT-3.5 jest często lepszym wyborem. Z kolei przy bardziej skomplikowanych zagadnieniach, wymagających dogłębnej analizy czy szczegółowej wiedzy, warto sięgnąć po GPT-4. Warto też pamiętać, że istnieją inne modele, takie jak Falcon 40B, które oferują jeszcze większe możliwości przetwarzania języka.</p>',
          },
          {
            description: '<p>Dogłębniejsze objaśnienie terminów:</p>',
          },
          {
            title: '1. Duże Modele Językowe (LLM)',
            description:
              '<p>LLM to rodzaj sztucznej inteligencji, który został wytrenowany na ogromnych zbiorach danych tekstowych. Modele te analizują miliardy zdań i fragmentów tekstu, aby nauczyć się wzorców językowych, które pozwalają im generować spójne i kontekstowo adekwatne odpowiedzi. Przykłady LLM to GPT-3, GPT-4 oraz Gemini od Google. W kontekście Flowise, te modele są wykorzystywane jako podstawowe jednostki do przetwarzania tekstu i generowania odpowiedzi.</p>',
          },
          {
            title: '2. Tokeny',
            description:
              '<p>Tokeny to podstawowe jednostki tekstu wykorzystywane przez modele językowe. Można je zrozumieć jako słowa, znaki lub fragmenty zdań, na które model dzieli wejściowy tekst. Przykładowo, zdanie "ChatGPT to świetne narzędzie" może zostać podzielone na kilka tokenów: "Chat", "GPT", "to", "świetne", "narzędzie". Modele takie jak GPT-3 czy GPT-4 operują właśnie na tych tokenach, analizując je i na tej podstawie generując odpowiedzi.</p>',
          },
          {
            description: [
              '<p>GPT-4: Obsługuje do 128 tysięcy tokenów (ok. 300 stron tekstu).</p>',
              '<p>GPT-3.5: Obsługuje do 16 tysięcy tokenów (ok. 14 stron tekstu).</p>',
            ],
          },
          {
            description:
              '<p>Rozumienie liczby tokenów jest ważne przy budowaniu aplikacji, ponieważ wpływa to na długość konwersacji, którą model może „zapamiętać” oraz przetworzyć.</p>',
            image: 'course1_token_modifications.png',
          },
          {
            title: '3. Prompt (Zapytanie)',
            description:
              '<p>Prompt to zapytanie lub wejściowy tekst, który wysyłamy do modelu językowego w celu uzyskania odpowiedzi. Może to być proste pytanie ("Jaka jest stolica Francji?") lub bardziej skomplikowana instrukcja, która zawiera historię rozmowy. W Flowise prompty są podstawowym sposobem komunikacji z modelem i sterowania jego działaniem.</p>',
          },
          {
            title: '4. Konwersacja i Kontekst',
            description:
              '<p>Modele językowe, takie jak GPT, generują odpowiedzi na podstawie przesłanych do nich promptów. Jednakże nie mają one rzeczywistej "pamięci" – każdy nowy prompt traktowany jest jako oddzielne zapytanie. Aby kontynuować konwersację w sposób spójny, historia rozmowy jest zwykle zawierana w treści promptu. Dlatego im dłuższa konwersacja, tym więcej tokenów potrzeba na zachowanie kontekstu.</p>',
          },
          {
            title: '5. Wydajność a Skomplikowanie Modelu',
            description:
              '<p>W kontekście wyboru modelu do aplikacji warto znać różnice między różnymi wersjami:</p>',
          },
          {
            description: [
              '<p>GPT-3.5: Szybszy, ale obsługuje mniejszą liczbę tokenów. Idealny do prostszych zadań.</p>',
              '<p>GPT-4: Wolniejszy, ale bardziej precyzyjny i obsługujący większą ilość tokenów. Lepszy do zaawansowanych analiz i długich konwersacji.</p>',
            ],
          },
          {
            description:
              '<p>Oprócz modeli GPT, istnieją także inne modele, takie jak Falcon 40B, które oferują różne zalety w zależności od specyfiki aplikacji.</p>',
          },
          {
            title: '6. Model Falcon 40B',
            description:
              '<p>Falcon 40B to jeden z zaawansowanych modeli językowych o dużych możliwościach. Został zaprojektowany do przetwarzania jeszcze większej liczby tokenów niż GPT-4, co pozwala na generowanie bardziej rozbudowanych i kontekstowo bogatych odpowiedzi. Tego typu modele są szczególnie przydatne w aplikacjach wymagających dużej precyzji oraz złożonych analiz tekstu.</p>',
          },
          {
            title: 'Podsumowanie',
            description:
              '<p>Flowise daje użytkownikom możliwość tworzenia zaawansowanych aplikacji konwersacyjnych w oparciu o LLM, bez potrzeby znajomości programowania. Zrozumienie działania tokenów oraz wyboru odpowiedniego modelu pozwala na lepsze dostosowanie aplikacji do konkretnych potrzeb. Ostatecznie, wybór narzędzi i modelu zależy od celu aplikacji – czy to szybkie odpowiedzi, czy bardziej skomplikowane analizy. Dzięki takim rozwiązaniom, jak Flowise, tworzenie aplikacji AI staje się bardziej dostępne niż kiedykolwiek.</p>',
          },
        ],
        videoLink: [
          {
            link: '13J9zRH5fjEIdxTT-wUdUqHXs1VYR7S0o',
            name: 'Wprowadzenie do Flowise',
          },
          {
            link: '1mwSatqytUpDjAz_xfg2_bo5tHL653-q8',
            name: 'Wygląd aplikacji Flowise',
          },
        ],
      },
      // 2
      {
        id: 102,
        title: 'Lekcja 2 - Instalacja Flowise na Windows: Lokalnie i w Chmurze',
        about: [
          {
            title: 'Instalacja Flowise na Windows – Lokalnie i w Chmurze',
            description:
              '<p>W tej instrukcji omówimy dwa podejścia do instalacji Flowise – instalację lokalną oraz instalację w chmurze. Zanim przejdziemy do szczegółowej konfiguracji, warto zrozumieć, czym różnią się te dwa sposoby instalacji, jakie są ich zalety i wady, oraz dla jakich zastosowań każdy z nich jest optymalny.</p>',
          },
          {
            title: 'Czym Jest Instalacja Lokalna?',
            description:
              '<p>Instalacja lokalna oznacza, że aplikacja działa bezpośrednio na Twoim komputerze, czyli na Twoim lokalnym środowisku. Jest to najczęstsze rozwiązanie, zwłaszcza na etapie testów i rozwoju projektów.</p>',
          },
          {
            title: 'Plusy Instalacji Lokalnej',
            description: [
              '<p>1. Pełna Kontrola i Prywatność: Wszystkie dane i procesy są uruchamiane na Twoim sprzęcie. Masz pełny dostęp do plików i kodu bez konieczności dzielenia się nimi z zewnętrznymi serwerami, co zwiększa poziom prywatności.</p>',
              '<p>2. Brak Kosztów Związanych z Hostingiem: Instalacja lokalna nie wymaga wynajmowania serwerów w chmurze ani korzystania z usług typu SaaS (Software as a Service). Oznacza to brak dodatkowych kosztów.</p>',
              '<p>3. Szybkie Testowanie i Prototypowanie: Działając lokalnie, masz szybki dostęp do środowiska testowego. Każda zmiana może być natychmiast sprawdzona bez potrzeby synchronizowania z zewnętrznymi serwerami.</p>',
            ],
          },
          {
            title: 'Minusy Instalacji Lokalnej',
            description: [
              '<p>1. Ograniczone Zasoby Sprzętowe: Wydajność aplikacji zależy od specyfikacji Twojego komputera. Przy większych obciążeniach, takich jak praca z dużymi modelami językowymi, komputer może działać wolniej.</p>',
              '<p>2. Niezbędne Jest Ciągłe Uruchamianie Serwera: Aby aplikacja była dostępna, Twój komputer musi być włączony i działający przez cały czas. Przy wdrożeniach produkcyjnych może to być problematyczne.</p>',
              '<p>3. Brak Skalowalności: Jeśli chcesz udostępnić swoją aplikację wielu użytkownikom lub zwiększyć jej zasięg, rozwiązania lokalne mogą nie wystarczyć i wymagać migracji do chmury.</p>',
            ],
            image: 'advantagesAndDisadvantagesLocale.png',
          },
          {
            title: 'Czym Jest Instalacja w Chmurze?',
            description:
              '<p>Instalacja w chmurze oznacza, że Flowise jest uruchamiane na zewnętrznych serwerach dostawców takich jak AWS, Google Cloud, czy Azure. W takim przypadku aplikacja jest dostępna z każdego miejsca na świecie, a Ty nie musisz martwić się o infrastrukturę.</p>',
          },
          {
            title: 'Plusy Instalacji w Chmurze',
            description: [
              '<p>1. <strong>Skalowalność:</strong> Chmura umożliwia automatyczne dostosowanie zasobów do obciążenia. Możesz dynamicznie zwiększać lub zmniejszać moc obliczeniową w zależności od potrzeb, co jest idealne w przypadku większych wdrożeń.</p>',
              '<p>2. <strong>Dostępność:</strong> Aplikacja działa niezależnie od Twojego lokalnego sprzętu, co oznacza, że jest dostępna 24/7 z dowolnego miejsca, pod warunkiem dostępu do internetu.</p>',
              '<p>3. <strong>Brak Konieczności Zarządzania Infrastruktura:</strong> Chmura przejmuje na siebie obowiązki związane z utrzymaniem serwera, aktualizacjami, kopią zapasową i bezpieczeństwem, co odciąża użytkownika od tych zadań.</p>',
            ],
          },

          {
            title: 'Minusy Instalacji w Chmurze',
            description: [
              '<p>1. <strong>Koszty:</strong> Usługi chmurowe wiążą się z kosztami, które mogą wzrastać w zależności od zużycia zasobów, liczby użytkowników i poziomu obsługi.</p>',
              '<p>2. <strong>Prywatność i Bezpieczeństwo:</strong> Chociaż chmura oferuje zaawansowane mechanizmy ochrony, zawsze istnieje pewne ryzyko związane z przechowywaniem danych w zewnętrznych centrach danych.</p>',
              '<p>3. <strong>Zależność od Połączenia Internetowego:</strong> Bez stabilnego i szybkiego internetu nie będziesz w stanie efektywnie zarządzać aplikacją ani mieć do niej stałego dostępu.</p>',
            ],
            image: 'advantagesAndDisadvantagesCloud.png',
          },
          { title: 'Krok po Kroku: Instalacja Flowise na Windows (Lokalnie)' },
          {
            title: 'Krok 1: Instalacja Gita',
            description: [
              '<p>1. <strong>Pobierz i Zainstaluj Git</strong><br>Przejdź na stronę <a href="https://git-scm.com/">Git SCM</a> i pobierz odpowiednią wersję dla Windows. Instalator automatycznie wykryje Twój system operacyjny. Po pobraniu otwórz instalator i postępuj zgodnie z instrukcjami, akceptując ustawienia domyślne.</p>',
              '<p><em>Wyjaśnienie:</em> Git jest systemem kontroli wersji, który pozwala na śledzenie zmian w plikach oraz współpracę z innymi nad projektami. Dzięki temu możemy sklonować repozytorium Flowise z GitHub i pracować nad nim lokalnie.</p>',
              '<p>2. <strong>Uruchom Konsolę Git Bash</strong><br>Po zakończeniu instalacji możesz wybrać opcję uruchomienia Git Bash, czyli specjalnej konsoli dostosowanej do pracy z Git. W niej będziemy wykonywać kolejne komendy.</p>',
              '<p><em>Wyjaśnienie:</em> Konsola Git Bash to środowisko, które pozwala na wykonywanie poleceń takich jak klonowanie repozytorium, zarządzanie plikami i uruchamianie aplikacji. Działa podobnie jak tradycyjny wiersz poleceń, ale jest zoptymalizowana do pracy z Git.</p>',
            ],
          },
          {
            title: 'Krok 2: Klonowanie Repozytorium Flowise z GitHub',
            description: [
              '<p>1. <strong>Przejdź do Strony Repozytorium Flowise na GitHub</strong><br>Otwórz przeglądarkę i wejdź na stronę <a href="https://github.com/FlowiseAI/Flowise">Flowise na GitHub</a>. Kliknij zielony przycisk „Code” i skopiuj wyświetlony link do repozytorium.</p>',
              '<p>2. <strong>Klonowanie Repozytorium</strong><br>W konsoli Git Bash wpisz komendę: <code>git clone</code><br>Wklej skopiowany link i naciśnij Enter. Komenda <code>git clone</code> pobiera wszystkie pliki projektu na Twój komputer, co pozwala na lokalne uruchomienie Flowise.</p>',
              '<p><em>Wyjaśnienie:</em> <code>git clone</code> tworzy lokalną kopię całego repozytorium, czyli projektu, na Twoim komputerze. Pozwala to na dostęp do wszystkich plików i dalszą pracę bez potrzeby bycia online.</p>',
            ],
          },

          {
            title: 'Krok 3: Instalacja i Konfiguracja Flowise',
            description: [
              '<p>1. <strong>Przejdź do Katalogu Flowise</strong><br>Po zakończeniu klonowania przejdź do katalogu z projektem wpisując w konsoli:<br><code>cd flowise</code></p>',
              '<p><em>Wyjaśnienie:</em> Komenda <code>cd</code> (change directory) zmienia bieżący katalog roboczy. Jest to podstawowa operacja nawigacyjna w konsoli, która pozwala na pracę w wybranym folderze.</p>',
              '<p>2. <strong>Instalacja Zależności</strong><br>W katalogu Flowise wpisz: <code>npm install</code></p>',
              '<p><em>Wyjaśnienie:</em> <code>npm install</code> to polecenie, które automatycznie pobiera i instaluje wszystkie potrzebne biblioteki oraz pakiety do działania aplikacji. Jest to standardowa procedura w projektach Node.js, na których opiera się Flowise.</p>',
              '<p>3. <strong>Uruchomienie Flowise</strong><br>Aby uruchomić aplikację, wpisz: <code>npx flowise start</code></p>',
              '<p><em>Wyjaśnienie:</em> <code>npx</code> to narzędzie, które pozwala na uruchamianie pakietów Node.js bez potrzeby instalowania ich globalnie na systemie. Dzięki temu nie musisz ręcznie konfigurować dodatkowych ustawień.</p>',
            ],
          },

          {
            title: 'Krok 4: Dostęp do Interfejsu Flowise',
            description: [
              '<p>1. <strong>Otwórz Przeglądarkę</strong><br>Po uruchomieniu serwera zobaczysz adres URL w konsoli, zazwyczaj:<br><a href="#">http://localhost:3000</a></p>',
              '<p><em>Wyjaśnienie:</em> localhost to specjalna nazwa adresu, który odwołuje się do Twojego komputera. Port 3000 to konkretna lokalizacja, pod którą działa aplikacja na Twoim serwerze lokalnym.</p>',
              '<p>2. <strong>Zaloguj się i Zacznij Pracę z Flowise</strong><br>Po wpisaniu adresu w przeglądarce zobaczysz interfejs Flowise, który pozwoli Ci tworzyć i zarządzać projektami opartymi na modelach językowych.</p>',
            ],
          },

          { title: 'Wyjaśnienie Terminów Technicznych' },

          {
            title: '1. Git',
            description: [
              '<p><strong>Co to jest?</strong> Git to system kontroli wersji, który śledzi zmiany w plikach projektu i umożliwia współpracę wielu osób nad tym samym kodem. Jest powszechnie używany w projektach programistycznych, umożliwiając łatwe cofanie się do wcześniejszych wersji kodu i zarządzanie jego historią.</p>',
              '<p><strong>Dlaczego jest używany?</strong> Dzięki Gitowi możesz tworzyć kopie (klonować) repozytoria, śledzić zmiany w plikach, a także udostępniać swoje projekty innym. W kontekście Flowise, Git jest wykorzystywany do pobrania i aktualizacji całego projektu z GitHub.</p>',
            ],
          },
          {
            title: '2. GitHub',
            description: [
              '<p><strong>Co to jest?</strong> GitHub to platforma hostingowa dla projektów programistycznych wykorzystujących Git. Pozwala na przechowywanie kodu w tzw. repozytoriach, współpracę zespołową, zgłaszanie błędów i dzielenie się kodem ze społecznością.</p>',
              '<p><strong>Dlaczego jest używany?</strong> GitHub centralizuje zarządzanie projektem i umożliwia łatwe klonowanie kodu oraz śledzenie zmian w aplikacji. Repozytorium Flowise na GitHub zawiera wszystkie potrzebne pliki do uruchomienia aplikacji.</p>',
            ],
          },
          {
            title: '3. Repozytorium',
            description: [
              '<p><strong>Co to jest?</strong> Repozytorium to zbiór plików i historii ich zmian w projekcie. Może zawierać kod źródłowy, dokumentację, konfiguracje i inne zasoby potrzebne do działania aplikacji.</p>',
              '<p><strong>Dlaczego jest używane?</strong> Repozytorium ułatwia organizację plików i umożliwia efektywną współpracę. Dzięki temu, każdy może pobrać projekt (klonować repozytorium) i pracować nad nim na swoim komputerze.</p>',
            ],
          },
          {
            title: '4. Klonowanie (git clone)',
            description: [
              '<p><strong>Co to jest?</strong> Klonowanie to proces tworzenia lokalnej kopii całego repozytorium na Twoim komputerze. Komenda git clone pobiera wszystkie pliki oraz historię zmian z serwera na Twoje urządzenie.</p>',
              '<p><strong>Dlaczego jest używane?</strong> Klonowanie pozwala na szybkie uzyskanie pełnej wersji projektu na własnym sprzęcie, co umożliwia dalszą pracę, wprowadzanie zmian oraz testowanie aplikacji bez konieczności bycia online.</p>',
            ],
          },
          {
            title: '5. Git Bash',
            description: [
              '<p><strong>Co to jest?</strong> Git Bash to konsola (terminal) dostosowana do pracy z Git na systemie Windows. Umożliwia wprowadzanie komend takich jak git clone, cd czy npm install, które są niezbędne do zarządzania projektem i jego uruchamiania.</p>',
              '<p><strong>Dlaczego jest używane?</strong> Git Bash łączy funkcjonalność tradycyjnego wiersza poleceń z zaawansowanymi narzędziami Gita, dzięki czemu praca z repozytoriami oraz instalacją aplikacji staje się łatwiejsza i bardziej intuicyjna.</p>',
            ],
          },
          {
            title: '6. npm (Node Package Manager)',
            description: [
              '<p><strong>Co to jest?</strong> npm to menedżer pakietów dla języka JavaScript, który umożliwia instalowanie, aktualizowanie i zarządzanie bibliotekami oraz narzędziami potrzebnymi do działania aplikacji.</p>',
              '<p><strong>Dlaczego jest używane?</strong> Flowise, jako aplikacja napisana w JavaScript, korzysta z wielu dodatkowych bibliotek. Komenda npm install pobiera i instaluje te zależności, co pozwala na uruchomienie aplikacji bez ręcznego instalowania każdej biblioteki osobno.</p>',
            ],
          },
          {
            title: '7. npx',
            description: [
              '<p><strong>Co to jest?</strong> npx to narzędzie, które pozwala na uruchamianie pakietów Node.js bez potrzeby instalowania ich globalnie na Twoim systemie. Dzięki temu możesz tymczasowo użyć narzędzi takich jak Flowise bez ich trwałej instalacji.</p>',
              '<p><strong>Dlaczego jest używane?</strong> Komenda npx flowise start umożliwia uruchomienie serwera Flowise, który następnie działa lokalnie na Twoim komputerze. Jest to wygodne, gdy chcesz szybko przetestować aplikację bez zbędnych konfiguracji.</p>',
            ],
          },
          {
            title: '8. cd (Change Directory)',
            description: [
              '<p><strong>Co to jest?</strong> cd to podstawowa komenda w konsoli służąca do zmiany bieżącego katalogu. Pozwala na nawigowanie po folderach na Twoim komputerze.</p>',
              '<p><strong>Dlaczego jest używane?</strong> Kiedy klonujesz repozytorium, projekt jest zapisywany w określonym folderze. Komenda cd flowise przenosi Cię do katalogu z pobranymi plikami, gdzie możesz uruchamiać kolejne komendy, takie jak instalacja pakietów czy uruchamianie serwera.</p>',
            ],
          },
          {
            title: '9. localhost i Port',
            description: [
              '<p><strong>Co to jest?</strong> localhost to specjalna nazwa oznaczająca Twój własny komputer jako serwer. Port, np. 3000, to "drzwi", przez które aplikacja komunikuje się z przeglądarką. Razem tworzą adres, pod którym możesz uzyskać dostęp do uruchomionych aplikacji (np. <a href="#">http://localhost:3000</a>).</p>',
              '<p><strong>Dlaczego jest używane?</strong> Gdy uruchamiasz Flowise lokalnie, serwer działa na Twoim komputerze. Adres <a href="#">localhost:3000</a> pozwala Ci zobaczyć interfejs aplikacji, jakby działała ona w internecie, ale wszystko dzieje się lokalnie.</p>',
            ],
          },
          {
            title: 'Podsumowanie',
            description:
              '<p>Oba podejścia – lokalna instalacja oraz instalacja w chmurze – mają swoje zalety i wady. Lokalna instalacja zapewnia prywatność i niskie koszty, ale wymaga odpowiedniego sprzętu i ciągłego działania serwera. Z kolei instalacja w chmurze oferuje skalowalność i dostępność z każdego miejsca, ale wiąże się z dodatkowymi kosztami oraz pewnymi ograniczeniami dotyczącymi prywatności.</p>',
          },
          {
            description:
              '<p>Wybór odpowiedniego rozwiązania zależy od Twoich potrzeb, etapu projektu i zasobów, jakimi dysponujesz. Dla testów i małych projektów lokalna instalacja będzie optymalnym wyborem, natomiast dla wdrożeń produkcyjnych lepszym rozwiązaniem będzie migracja do chmury.</p>',
          },
        ],
        videoLink: [
          {
            link: '1EvJ9oEhlM_rsEOc643PNUi2IVmR10Bre',
            name: 'Instalacja Flowise na Windows: Lokalnie i w Chmurze',
          },
        ],
      },
      // 3
      {
        id: 103,
        title: 'Lekcja 3 - Jak Zaktualizować Flowise: Przewodnik Krok po Kroku',
        about: [
          {
            description:
              '<p>W tym artykule omówimy dwie metody aktualizacji Flowise – jedną, gdy mamy narzędzie zainstalowane lokalnie na komputerze, a drugą, gdy korzystamy z platformy Render do hostowania aplikacji. Obie metody są stosunkowo proste, ale różnią się podejściem i wymaganiami.</p>',
          },
          {
            title: '1. Aktualizacja Flowise Zainstalowanego Lokalnie',
            description: `<p>Jeśli masz Flowise zainstalowane lokalnie, proces aktualizacji jest szybki i prosty. Oto kroki, które należy wykonać:</p>`,
          },
          {
            title: 'Krok 1: Otwórz Wiersz Poleceń jako Administrator',
            description:
              '<p>Na początek wejdź na stronę Flowise i zauważysz, że brakuje tam szczegółowych instrukcji dotyczących aktualizacji. Jednak sam proces jest bardzo intuicyjny. Kliknij w lupkę w systemie Windows, wpisz „CMD” i uruchom wiersz poleceń jako administrator.</p>',
          },
          {
            title: 'Krok 2: Wpisz Komendę Aktualizacji',
            description:
              '<p>W wierszu poleceń wpisz następującą komendę: <code>npm update -g flowise</code>. Ta komenda zaktualizuje globalnie zainstalowaną wersję Flowise.</p>',
          },
          {
            title: 'Krok 3: Poczekaj na Zakończenie Procesu',
            description:
              '<p>Po wpisaniu komendy wystarczy chwilę poczekać, aż aktualizacja zostanie zakończona. Wszystko odbędzie się automatycznie – narzędzie pobierze najnowszą wersję Flowise i zaktualizuje ją na twoim urządzeniu.</p>',
          },
          {
            title: '2. Aktualizacja Flowise na Platformie Render',
            description:
              '<p>Jeżeli używasz Flowise na platformie Render, proces aktualizacji wygląda nieco inaczej. Poniżej znajdziesz szczegółowe instrukcje:</p>',
          },
          {
            title: 'Krok 1: Forkowanie Repozytorium na GitHubie',
            description:
              '<p>Wejdź na stronę GitHub, gdzie znajduje się repozytorium Flowise. Aby móc je zaktualizować, musisz utworzyć tzw. „fork” repozytorium. Kliknij przycisk „Fork” i utwórz jego kopię na swoim koncie GitHub.</p>',
            image: 'ls_3_gtihub_fork.jpg',
          },
          {
            title: 'Krok 2: Zmiana Ustawień na Renderze',
            description:
              '<p>Następnie wróć do panelu zarządzania na Renderze. W ustawieniach twojej aplikacji zauważysz, że używa ona dotychczasowego linku publicznego. Aby móc przeprowadzić aktualizację, będziesz musiał zamienić ten link na nowy – ten, który powstał po utworzeniu forka.</p>',
            image: 'ls_3_settings_render.jpg',
          },
          {
            description:
              '<p><strong>Uwaga:</strong> Ważne jest, aby przed zmianą linku zadbać o swoje dane. Jeśli po prostu zmienisz link bez odpowiednich kroków, możesz stracić wszystkie aplikacje i ustawienia.</p>',
          },
          {
            title: 'Krok 3: Dodanie Dysku na Renderze',
            description:
              '<p>Aby uniknąć utraty danych, dodaj dysk do swojej aplikacji. Nawet mały dysk o pojemności 1 GB wystarczy. W ustawieniach podaj domyślną ścieżkę, dodaj dysk i zapisz zmiany. Dzięki temu wszystkie twoje dane będą zapisane na dysku i nie zostaną usunięte podczas aktualizacji.</p>',
            image: 'ls_3_add_disk_render.jpg',
          },
          {
            title: 'Krok 4: Wklejenie Nowego Linku Repozytorium',
            description:
              '<p>Wróć do ustawień aplikacji na Renderze i kliknij przycisk „Edit”. Wklej tam link do forka swojego repozytorium z GitHuba, a następnie kliknij „Continue” i „Save Changes”. W tym momencie aplikacja uruchomi się ponownie, już z nowego repozytorium.</p>',
          },
          {
            title: 'Krok 5: Synchronizacja z GitHubem',
            description:
              '<p>Teraz, gdy pojawi się nowa wersja Flowise w publicznym repozytorium, wystarczy wrócić na GitHub i kliknąć „Sync Fork”. Render automatycznie odświeży usługę, pobierając najnowsze zmiany.</p>',
            image: 'ls_3_sync_fork_git.jpg',
          },
          {
            title: 'Wyjaśnienia techniczne',
            description:
              '<p>Warto omówić kilka dodatkowych terminów technicznych, które mogą pojawić się w kontekście aktualizacji i pracy z Flowise. Zrozumienie tych pojęć ułatwi efektywne korzystanie zarówno z narzędzia, jak i z różnych platform do jego wdrażania.</p>',
          },
          {
            title: '1. NPM (Node Package Manager)',
            description:
              '<p>NPM to menedżer pakietów dla języka programowania JavaScript, używany głównie do zarządzania bibliotekami i narzędziami opartymi na Node.js. Flowise jest aplikacją opartą na Node.js, dlatego NPM jest używany do instalacji, aktualizacji oraz zarządzania zależnościami. W kontekście aktualizacji Flowise, komenda <code>npm update -g flowise</code> aktualizuje globalnie zainstalowaną wersję narzędzia, pobierając najnowsze wersje pakietów.</p>',
          },
          {
            title: '2. Render',
            description:
              '<p>Render to platforma do hostowania aplikacji w chmurze. Umożliwia uruchamianie aplikacji, serwisów, baz danych i innych zasobów bez konieczności zarządzania serwerami. Flowise może być wdrażane na Renderze, co ułatwia jego obsługę w środowisku produkcyjnym. Kluczowym elementem pracy na Renderze jest możliwość forka repozytorium GitHub i podłączenia go do aplikacji w celu łatwego zarządzania aktualizacjami.</p>',
          },
          {
            title: '3. Forkowanie Repozytorium',
            description:
              '<p>Forkowanie to proces kopiowania istniejącego repozytorium na GitHubie do swojego konta. Dzięki temu masz pełną kontrolę nad tą kopią, co umożliwia dostosowanie jej do własnych potrzeb. Forkowanie repozytorium Flowise jest kluczowe w sytuacji, gdy chcesz samodzielnie zarządzać aktualizacjami i dostosowaniami na platformach takich jak Render. Po utworzeniu forka możesz synchronizować go z oryginalnym repozytorium, aby pobierać najnowsze aktualizacje.</p>',
          },
          {
            title: '4. Repozytorium (Repository)',
            description:
              '<p>Repozytorium to miejsce, gdzie przechowywany jest kod źródłowy projektu, najczęściej na platformach takich jak GitHub. W kontekście Flowise, repozytorium zawiera kod źródłowy aplikacji, który może być aktualizowany, modyfikowany lub wdrażany na różnych platformach. Repozytorium jest kluczowe dla zarządzania wersjami i aktualizacjami aplikacji.</p>',
          },
          {
            title: '5. Ścieżka Domyślna (Default Path)',
            description:
              '<p>Ścieżka domyślna to miejsce w systemie plików, gdzie zapisywane są określone dane lub pliki. W przypadku dodawania dysku w Renderze, ustawienie ścieżki domyślnej jest istotne, ponieważ zapewnia, że dane aplikacji Flowise zostaną zapisane w określonym miejscu i będą bezpieczne w trakcie aktualizacji.</p>',
          },
          {
            title: '6. Synchronizacja Forka (Sync Fork)',
            description:
              '<p>Synchronizacja forka polega na aktualizacji twojej kopii repozytorium na GitHubie, aby zawierała najnowsze zmiany z oryginalnego repozytorium. W kontekście Flowise, jeśli posiadasz fork na GitHubie, możesz łatwo synchronizować go z oryginalnym projektem, aby być na bieżąco z najnowszymi aktualizacjami. Dzięki temu wystarczy kliknąć „Sync Fork” i aplikacja na Renderze automatycznie zaktualizuje się.</p>',
          },
          {
            title: '7. Dysk w Chmurze (Cloud Disk)',
            description:
              '<p>Dysk w chmurze to przestrzeń dyskowa przydzielona na platformie hostingowej (np. Render), która jest używana do przechowywania danych aplikacji. W kontekście Flowise, dodanie dysku w Renderze jest kluczowe, aby uniknąć utraty danych przy aktualizacji repozytorium. Nawet niewielki dysk pozwala na zapisanie ustawień i danych użytkownika, co zwiększa stabilność aplikacji podczas jej rozwoju.</p>',
          },
          {
            title: '8. Komenda CLI (Command Line Interface)',
            description:
              '<p>CLI to interfejs wiersza poleceń, za pomocą którego użytkownik komunikuje się z systemem operacyjnym lub aplikacją poprzez wpisywanie tekstowych komend. W procesie aktualizacji Flowise lokalnie, korzystamy z komend CLI (np. <code>npm update -g flowise</code>), co pozwala na szybkie i efektywne zarządzanie aplikacją bez potrzeby interfejsu graficznego.</p>',
          },
          {
            title: 'Podsumowanie',
            description:
              '<p>W zależności od tego, jakiego środowiska używasz – lokalnego czy chmurowego – proces aktualizacji Flowise wygląda nieco inaczej. Dla lokalnej instalacji wystarczy szybka komenda w wierszu poleceń. Dla użytkowników Rendera, aktualizacja wymaga utworzenia forka repozytorium oraz odpowiedniego skonfigurowania aplikacji, aby zabezpieczyć dane przed utratą. Dzięki tym prostym krokom twoje środowisko Flowise będzie zawsze na bieżąco z najnowszymi funkcjami.</p>',
          },
        ],
        videoLink: [
          {
            link: '1JFJq0E1vasxvNMHjymRFt96CMD4qoAGU',
            name: 'Aktualizowanie Flowise',
          },
          {
            link: '1X-KP_Lbs6CcPpUU2Rb1oe-t6N-787OEZ',
            name: 'Aktualizowanie Flowise na Render',
          },
        ],
      },
      // 4
      {
        id: 104,
        title:
          'Lekcja 4 - Przewodnik po podstawach FlowiseAI: Tworzenie i zarządzanie projektami Chatflow',
        about: [
          {
            title:
              'Przewodnik po podstawach FlowiseAI: Tworzenie i zarządzanie projektami Chatflow',
            description:
              '<p>W tym artykule przeprowadzimy Cię przez podstawowe funkcje platformy FlowiseAI, skupiając się na tworzeniu i zarządzaniu projektami Chatflow. Nauczysz się, jak poruszać się po interfejsie, dodawać komponenty oraz jak optymalnie wykorzystać dostępne narzędzia. Ten przewodnik jest skierowany do osób początkujących, które chcą szybko zacząć korzystać z FlowiseAI.</p>',
          },
          {
            title: 'Widok Główny - Panel Chatflow',
            description:
              '<p>Główny widok w FlowiseAI to Panel Chatflow, w którym będziemy tworzyć i zarządzać projektami. Jest to centralne miejsce, gdzie odbywa się cała praca nad projektami, dlatego warto poznać jego podstawowe funkcje:</p>',
          },
          {
            description:
              '<p><strong>1. Lista Projektów:</strong> W panelu możesz przeglądać swoje projekty. Masz możliwość ich wyszukiwania po nazwie, sortowania według różnych kryteriów, a także zarządzania nimi.</p>',
            image: 'ls_4_0(1).jpg',
          },
          {
            description:
              '<p><strong>2. Motyw Ciemny/Jasny:</strong> FlowiseAI pozwala na dostosowanie motywu interfejsu do Twoich preferencji – do wyboru jest jasny lub ciemny tryb.</p>',
            image: 'ls_4_1.png',
          },
          {
            description:
              '<p><strong>3. Eksport i Import Projektów:</strong> W ustawieniach znajdziesz opcje eksportu i importu Chatflow. Dzięki temu możesz łatwo przenosić swoje projekty pomiędzy różnymi instancjami FlowiseAI.</p>',
            image: 'ls_4_2(1).jpg',
          },
          {
            description:
              '<p><strong>4. Informacje o Wersji:</strong> Klikając w sekcję "About Flowise", uzyskasz informacje o aktualnej wersji aplikacji oraz o dacie jej ostatniej aktualizacji.</p>',
            image: 'ls_4_3.png',
          },
          {
            title: 'Tworzenie Nowego Projektu Chatflow',
            description:
              '<p>Aby rozpocząć pracę nad nowym projektem, w głównym widoku kliknij przycisk umożliwiający tworzenie nowego Chatflow. Jest to punkt startowy dla Twojej aplikacji opartej na AI. W panelu znajdziesz kilka kluczowych sekcji:</p>',
          },
          {
            description:
              '<p><strong>Agenci (Agents):</strong> Tu zarządzasz agentami AI, czyli modelami, które będą odpowiadać za interakcje z użytkownikami. Będziemy o nich mówić w kolejnych poradnikach.</p>',
            image: 'ls_4_4.jpg',
          },
          {
            description:
              '<p><strong>Marketplace:</strong> To miejsce, gdzie znajdziesz gotowe projekty stworzone przez społeczność. Możesz je zaimportować do swojego panelu i dostosować do własnych potrzeb.</p>',
            image: 'ls_4_5.jpg',
          },
          {
            description:
              '<p><strong>Tools (Narzędzia):</strong> Sekcja, w której zarządzasz narzędziami, które będą wykorzystywane w Twoich projektach. W kolejnych artykułach omówimy, jak je tworzyć i integrować z FlowiseAI.</p>',
            image: 'ls_4_6.jpg',
          },
          {
            description:
              '<p><strong>API Keys (Klucze API):</strong> W tej sekcji możesz zarządzać kluczami API potrzebnymi do integracji z zewnętrznymi usługami.</p>',
            image: 'ls_4_7.jpg',
          },
          {
            description:
              '<p><strong>Document Source (Źródła Dokumentów):</strong> Tu przechowywane są dokumenty, z których Twoje modele AI będą mogły korzystać podczas działania aplikacji.</p>',
            image: 'ls_4_8.jpg',
          },
          {
            title: 'Dodawanie Komponentów do Chatflow',
            description:
              '<p>Po utworzeniu nowego projektu, czas na dodawanie komponentów, które będą tworzyć logikę Twojego Chatflow:</p>',
          },
          {
            description:
              '<p><strong>1. Dodawanie Komponentu:</strong> W lewym górnym rogu ekranu znajdziesz przycisk „+”. Kliknij go, aby wybrać komponent, który chcesz dodać do swojego projektu. Wybór komponentu polega na przeciągnięciu go do głównego obszaru roboczego.</p>',
            image: 'ls_4_9.png',
          },
          {
            description:
              '<p><strong>2. Przeciąganie i Upuszczanie:</strong> Każdy komponent możesz łatwo dodać do swojego projektu metodą „przeciągnij i upuść”. Po umieszczeniu go na płótnie, jest gotowy do dalszej konfiguracji.</p>',
          },
          {
            description:
              '<p><strong>3. Wyszukiwanie Komponentów:</strong> Jeśli wiesz, jakiego komponentu szukasz, możesz skorzystać z wbudowanej wyszukiwarki, aby szybko znaleźć i dodać go do swojego projektu.</p>',
            image: 'ls_4_10.png',
          },
          {
            description:
              '<p><strong>4. Operacje na Komponentach:</strong> FlowiseAI umożliwia kopiowanie, usuwanie i duplikowanie komponentów, co ułatwia pracę nad bardziej skomplikowanymi projektami.</p>',
            image: 'ls_4_11.jpg',
          },
          {
            title: 'Chat i Testowanie Modeli',
            description:
              '<p>Podczas pracy nad projektem kluczowe będzie testowanie, jak zachowują się modele AI:</p>',
          },
          {
            description:
              '<p><strong>Panel Czatu:</strong> W prawym górnym rogu znajduje się panel czatu, gdzie możesz testować interakcje z modelem AI. To właśnie tu będziesz prowadzić rozmowy symulujące interakcję użytkowników z Twoją aplikacją.</p>',
            image: 'ls_4_12.png',
          },
          {
            description:
              '<p><strong>Usuwanie Historii Czatu:</strong> Masz możliwość usunięcia całej historii rozmów, aby rozpocząć testy od nowa w czystym środowisku.</p>',
          },
          {
            description:
              '<p><strong>Rozszerzenie Panelu Czatu:</strong> Możesz powiększyć okno czatu, aby mieć lepszy widok na prowadzoną rozmowę.</p>',
            image: 'ls_4_14.jpg',
          },
          {
            title: 'Zarządzanie Projektem Chatflow',
            description:
              '<p>Ostatnim krokiem w procesie tworzenia Chatflow jest zarządzanie zapisanymi projektami:</p>',
          },
          {
            description: [
              '<p><strong>Brak Autozapisu:</strong> Pamiętaj, że FlowiseAI nie posiada automatycznego zapisu projektów. Każdy projekt musisz zapisać ręcznie, aby nie utracić postępów pracy.</p>',
              '<p><strong>Nadawanie Nazwy i Zapisywanie:</strong> Możesz nazwać swój projekt, kliknąć „Save” i zobaczyć, jak zostaje zapisany na liście projektów. W dowolnym momencie możesz edytować nazwę projektu lub powrócić do jego edycji.</p>',
            ],
            image: 'ls_4_13.png',
          },
          {
            title: 'Wyjaśnienia Pojęć Technicznych',
          },
          {
            title: '1. Chatflow',
            description:
              '<p>Chatflow to struktura, która definiuje, jak przepływa rozmowa między użytkownikiem a modelem AI. Składa się z komponentów, które określają poszczególne etapy konwersacji, takie jak pytania, odpowiedzi czy logika decyzyjna. W FlowiseAI to właśnie w Chatflow tworzysz całą logikę działania swojej aplikacji AI.</p>',
          },
          {
            title: '2. Komponenty',
            description:
              '<p>Komponenty to podstawowe elementy używane w Chatflow. Mogą to być różne bloki funkcji, które dodajesz do projektu, np. elementy odpowiadające za przetwarzanie tekstu, podejmowanie decyzji czy integracje z zewnętrznymi narzędziami. Komponenty można łatwo dodawać metodą „przeciągnij i upuść”.</p>',
          },
          {
            title: '3. Agenci (Agents)',
            description:
              '<p>Agenci to modele AI, które realizują zadania w ramach Twojej aplikacji. Mogą być to chatboty, systemy rekomendacyjne lub inne modele, które odpowiadają na zapytania użytkowników na podstawie danych dostarczonych przez Ciebie lub innych źródeł.</p>',
          },
          {
            title: '4. API Keys (Klucze API)',
            description:
              '<p>Klucze API to specjalne kody, które pozwalają Twojej aplikacji na komunikację z zewnętrznymi serwisami i narzędziami. Na przykład, jeśli chcesz zintegrować swojego Chatflow z zewnętrzną bazą danych lub systemem przetwarzania języka naturalnego (NLP), potrzebujesz klucza API do autoryzacji takiej operacji.</p>',
          },
          {
            title: '5. Marketplace',
            description:
              '<p>Marketplace w FlowiseAI to miejsce, gdzie znajdziesz gotowe projekty i komponenty stworzone przez innych użytkowników. Możesz je pobrać i dostosować do swoich potrzeb, co znacznie przyspiesza proces tworzenia nowych aplikacji.</p>',
          },
          {
            title: '6. Variables (Zmienne)',
            description:
              '<p>Zmienne to miejsca, w których przechowujesz wartości, które mogą się zmieniać w trakcie działania Twojego Chatflow. Przykładowo, jeśli użytkownik poda swoje imię na początku rozmowy, możesz zapisać je w zmiennej, aby później wykorzystać je w innych częściach konwersacji.</p>',
          },
          {
            title: '7. Document Source (Źródła Dokumentów)',
            description:
              '<p>Źródła dokumentów to sekcja, w której przechowujesz wszystkie pliki tekstowe i dokumenty, z których model AI będzie mógł czerpać informacje podczas interakcji z użytkownikami. Mogą to być pliki PDF, dokumenty tekstowe lub inne zasoby, które Twój agent wykorzysta, aby udzielić dokładnych odpowiedzi.</p>',
          },
          {
            title: '8. Autozapis',
            description:
              '<p>W FlowiseAI nie ma automatycznego zapisywania postępów w projekcie. Oznacza to, że każdą zmianę musisz ręcznie zapisać, klikając „Save”. Brak autozapisu może spowodować utratę danych, jeśli zapomnisz o ręcznym zapisaniu swojej pracy.</p>',
          },
          {
            title: 'Podsumowanie',
            description:
              '<p>W tej lekcji zapoznaliśmy się z podstawami obsługi FlowiseAI, od tworzenia projektów po zarządzanie komponentami i testowanie modeli. W kolejnych artykułach zagłębimy się w bardziej zaawansowane funkcje, takie jak konfiguracja agentów AI czy integracja z narzędziami zewnętrznymi. FlowiseAI oferuje wiele możliwości dostosowania aplikacji AI do własnych potrzeb, więc warto eksperymentować i odkrywać dostępne opcje.</p>',
          },
        ],
        videoLink: [
          {
            link: '1RJNZ0oCLQi7BJPjxM6z1zRd5KmFV03mG',
            name: 'Przewodnik po podstawach FlowiseAI: Tworzenie i zarządzanie projektami Chatflow',
          },
        ],
      },
      // 5
      {
        id: 105,
        title: 'Lekcja 5 - Jak Zbudować Pierwszy Przepływ w FlowiseAI',
        about: [
          {
            title: 'Jak Zbudować Pierwszy Przepływ w FlowiseAI',
            description:
              '<p>W tym artykule przejdziemy przez proces stworzenia prostego przepływu w aplikacji FlowiseAI. Skonfigurujemy model językowy OpenAI, połączymy go z odpowiednimi komponentami, a także dodamy elementy pamięci i szablonów (Prompt Templates) dla bardziej zaawansowanych interakcji.</p>',
          },
          {
            title: '1. Przygotowanie Przepływu: Dodawanie Modelu OpenAI',
            description:
              '<p>Na początek, zakładamy, że masz już zainstalowaną aplikację Flowise i możesz przystąpić do budowy swojego pierwszego przepływu.</p>',
          },
          {
            description:
              '<p><strong>1. Uruchomienie Flowise:</strong> Otwórz aplikację i kliknij ikonę „+” na głównym ekranie, aby dodać pierwszy element. Wybierz opcję Chat Models.</p>',
          },
          {
            description:
              '<p><strong>2. Dodanie Modelu OpenAI:</strong> Przewiń listę dostępnych modeli w dół i wybierz ChatOpenAI. Przeciągnij go na obszar roboczy. Teraz skonfigurujemy podstawowe parametry tego modelu:</p>',
          },
          {
            description: [
              '<p><strong>API Key:</strong> Aby połączyć się z modelem OpenAI, musisz uzyskać klucz API. Przejdź na stronę OpenAI, zaloguj się, a następnie w zakładce API wygeneruj nowy klucz. Skopiuj go i wróć do Flowise, aby wkleić go w odpowiednie pole.</p>',
              '<p><strong>Temperatura:</strong> Ustawienie temperatury wpływa na kreatywność odpowiedzi modelu. Dla stabilnych odpowiedzi sugerujemy wartość około 0.7. Wartości wyższe (np. 0.9) mogą sprawić, że model będzie generował bardziej twórcze odpowiedzi.</p>',
            ],
            image: 'ls_5_0.jpg',
          },
          {
            description:
              '<p>Po wklejeniu klucza kliknij przycisk <strong>Connect</strong>, aby połączyć model z API.</p>',
          },
          {
            title: '2. Dodawanie Łańcuchów i Pamięci',
            description:
              '<p>Po skonfigurowaniu modelu językowego przejdźmy do dodania łańcuchów konwersacyjnych i pamięci.</p>',
          },
          {
            description:
              '<p><strong>1. Dodawanie Łańcucha Konwersacji (Conversation Chain):</strong> Kliknij ponownie ikonę „+” i przejdź do sekcji Chains. Wybierz opcję Conversation Chain i przeciągnij ją na obszar roboczy. Połącz ten element z wcześniej dodanym modelem OpenAI.</p>',
            image: 'ls_5_1.jpg',
          },
          {
            description:
              '<p><strong>2. Dodawanie Pamięci (Memory):</strong> Kliknij „+” i przejdź do sekcji Memory. Wybierz Buffer Memory i przeciągnij ją na obszar roboczy. Połącz ją z łańcuchem konwersacji. Dzięki temu model będzie mógł zapamiętywać poprzednie interakcje i dostosowywać odpowiedzi na podstawie wcześniejszych rozmów.</p>',
          },
          {
            description:
              '<p>W tym momencie Twój podstawowy przepływ jest gotowy. Możesz go przetestować, klikając przycisk Save Chatflow w prawym górnym rogu i nadając nazwę, np. „Test”. Następnie przejdź do okienka czatu, aby sprawdzić, jak model reaguje na Twoje zapytania.</p>',
          },
          {
            title: '3. Tworzenie Szablonów Promptów (Prompt Templates)',
            description:
              '<p>Kolejnym krokiem będzie dodanie szablonów promptów, które pozwalają precyzyjnie określić sposób, w jaki model powinien odpowiadać na zapytania.</p>',
          },
          {
            description: [
              '<p><strong>1. Dodanie Szablonu Promptu:</strong> Kliknij „+” i wybierz LLM Chain. Następnie dodaj Prompt Template. Przeciągnij element na obszar roboczy i połącz go z modelem OpenAI.</p>',
              '<p><strong>2. Konfiguracja Promptu:</strong> W polu tekstowym promptu możesz wstawić dynamiczne zmienne, np. {temat}, które będą uzupełniane na podstawie danych wprowadzonych przez użytkownika. Na przykład: Opowiedz mi żart o {temat}.</p>',
              '<p><strong>3. Zmienna Wejściowa (Input Variable):</strong> Aby szablon działał dynamicznie, musisz dodać zmienną wejściową. Kliknij opcję Format Prompt Values i dodaj zmienną „temat”. Teraz model będzie mógł generować różne żarty, w zależności od wpisanego tematu.</p>',
            ],
            image: 'ls_5_2.jpg',
          },
          {
            title: '4. Testowanie i Dalsze Dostosowania',
            description:
              '<p>Zapisz zmiany i przejdź do okienka czatu, aby przetestować nowy szablon. Na przykład wpisz „Opowiedz mi żart o psach” i sprawdź, czy model rzeczywiście zmienia temat zgodnie z instrukcją.</p>',
          },
          {
            description:
              '<p>Jeśli wszystko działa poprawnie, Twój przepływ jest gotowy do użycia!</p>',
          },
          {
            title: 'Wyjaśnienie Pojęć Technicznych',
          },
          {
            title: '1. Model Językowy (Chat Model)',
            description:
              '<p>Model językowy, taki jak ChatOpenAI, to algorytm sztucznej inteligencji stworzony do generowania tekstu na podstawie dostarczonych danych. W kontekście FlowiseAI model ten odpowiada na pytania, generuje tekst lub realizuje inne zadania tekstowe w ramach stworzonego przepływu. Kluczowe parametry to:</p>',
          },
          {
            description: [
              '<p><strong>API Key:</strong> Klucz dostępu, który łączy aplikację z zewnętrznym serwisem, takim jak OpenAI. Jest on wymagany, aby model mógł generować odpowiedzi.</p>',
              '<p><strong>Temperatura:</strong> Parametr, który kontroluje „kreatywność” odpowiedzi. Niska wartość (np. 0.1) sprawia, że model będzie bardziej przewidywalny, natomiast wysoka (np. 0.9) powoduje, że odpowiedzi będą bardziej różnorodne i kreatywne.</p>',
            ],
            image: 'ls_5_3.png',
          },
          {
            title: '2. Łańcuch Konwersacyjny (Conversation Chain)',
            description:
              '<p>Łańcuch konwersacyjny to element, który umożliwia prowadzenie dialogu z modelem językowym, utrzymując kontekst rozmowy. Dzięki niemu odpowiedzi modelu mogą być dostosowywane na podstawie wcześniejszych interakcji.</p>',
          },
          {
            description: [
              '<p><strong>Buffer Memory:</strong> Ten rodzaj pamięci pozwala modelowi przechowywać historię rozmów, co jest kluczowe, aby model mógł „pamiętać” wcześniejsze odpowiedzi i dostosowywać się do dalszego kontekstu.</p>',
            ],
          },
          {
            title: '3. Pamięć (Memory)',
            description:
              '<p>Pamięć w modelach AI to mechanizm, który umożliwia przechowywanie i przypominanie sobie informacji z poprzednich interakcji. Dzięki niej model może analizować wcześniejsze rozmowy i dostosowywać odpowiedzi do kolejnych zapytań użytkownika.</p>',
          },
          {
            description: [
              '<p><strong>Buffer Memory:</strong> Najczęściej używany typ pamięci w Flowise, który przechowuje określoną liczbę wcześniejszych interakcji w celu zachowania kontekstu.</p>',
            ],
          },
          {
            title: '4. Szablon Promptu (Prompt Template)',
            description:
              '<p>Szablon promptu to predefiniowana instrukcja, która określa, jak model ma odpowiadać na pytania. Umożliwia ona wprowadzenie zmiennych, które mogą być dynamicznie uzupełniane podczas interakcji.</p>',
          },
          {
            description: [
              '<p><strong>Zmienna Wejściowa (Input Variable):</strong> To dynamiczna część promptu, która może być uzupełniona na podstawie tego, co wpisze użytkownik. Przykład: {temat} w szablonie „Opowiedz mi żart o {temat}” pozwala użytkownikowi samodzielnie decydować, o czym ma być żart.</p>',
            ],
          },
          {
            title: '5. Frontend a Backend w FlowiseAI',
            description:
              '<p>W kontekście Flowise, front to warstwa użytkownika – to, co użytkownik widzi i jak może wchodzić w interakcję z aplikacją (np. wpisywanie zapytań). Backend to wszystko, co dzieje się „za kulisami” – przetwarzanie danych, generowanie odpowiedzi przez model, a także logika szablonów promptów i zarządzanie pamięcią.</p>',
          },
          {
            title: 'Podsumowanie',
            description:
              '<p>To wszystko na temat tworzenia podstawowego przepływu w FlowiseAI. Ten przewodnik powinien pomóc Ci w zbudowaniu funkcjonalnej aplikacji, która wykorzystuje zaawansowane techniki, takie jak łańcuchy konwersacyjne i szablony promptów, aby dostosować interakcje do potrzeb użytkownika.</p>',
          },
        ],
        videoLink: [
          {
            link: '1GHN1sWYOofHhCMTxAAslWbc3xzwwwfl7',
            name: 'Przewodnik po podstawach FlowiseAI: Tworzenie i zarządzanie projektami Chatflow',
          },
        ],
      },
      // 6
      {
        id: 106,
        title:
          'Lekcja 6 - Jak Monitorować Aplikacje z Modelami Językowymi za Pomocą LangSmith',
        about: [
          {
            title:
              'Jak Monitorować Aplikacje z Modelami Językowymi za Pomocą LangSmith',
          },
          {
            title: 'Dlaczego Monitoring Jest Ważny?',
            description:
              '<p>W przypadku aplikacji opartych na modelach językowych, takich jak GPT-3 czy GPT-4, monitorowanie działania jest kluczowe z kilku powodów:</p>',
          },
          {
            title: '1. Śledzenie Zużycia Tokenów i Optymalizacja Kosztów',
            description:
              '<p>Każda interakcja z modelem AI wymaga przetworzenia określonej liczby tokenów, które bezpośrednio przekładają się na koszty. Tokeny to jednostki tekstowe, na które model dzieli dane – mogą to być słowa, znaki lub ich fragmenty. Im bardziej złożone zapytanie, tym więcej tokenów jest zużywanych. Dzięki LangSmith możesz monitorować liczbę zużytych tokenów w czasie rzeczywistym, co pozwala na bieżąco kontrolować wydatki i optymalizować zapytania tak, aby były jak najkrótsze, jednocześnie zachowując precyzyjne odpowiedzi. To narzędzie działa jako "middleware", który przechwytuje każde zapytanie i analizuje, ile tokenów zostało użytych oraz jakie są z tym związane koszty.</p>',
          },
          {
            title: '2. Analiza Wydajności i Latencji',
            description:
              '<p>Wydajność aplikacji AI jest kluczowa dla zapewnienia pozytywnych doświadczeń użytkowników. LangSmith precyzyjnie mierzy czas odpowiedzi modelu na każde zapytanie, co pozwala na monitorowanie latencji oraz identyfikowanie wąskich gardeł w przetwarzaniu danych. LangSmith działa w czasie rzeczywistym, przechwytując każde zapytanie i rejestrując metryki takie jak średni czas odpowiedzi, co umożliwia szybką reakcję na problemy związane z wydajnością. Narzędzie to śledzi przepływ danych pomiędzy aplikacją a modelem AI, zapewniając dokładne informacje na temat latencji i efektywności działania.</p>',
          },
          {
            title: '3. Diagnostyka i Klasyfikacja Błędów',
            description:
              '<p>Błędy w generowanych odpowiedziach mogą wynikać z wielu przyczyn, od źle sformułowanych zapytań, przez problemy techniczne, aż po nieadekwatne przetwarzanie danych przez model. LangSmith rejestruje każdą interakcję, identyfikując przypadki, w których wystąpiły błędy. Co więcej, narzędzie to automatycznie klasyfikuje błędy według rodzaju i priorytetu, co pozwala na szybkie diagnozowanie problemów oraz ich skuteczne rozwiązywanie. Analiza tych logów pozwala lepiej zrozumieć, dlaczego model AI generuje błędy i jak można poprawić jego działanie.</p>',
          },
          {
            title: '4. Zrozumienie Zachowań Użytkowników',
            description:
              '<p>Monitorowanie interakcji użytkowników z aplikacją jest kluczowe do dostosowania jej funkcji do rzeczywistych potrzeb. LangSmith rejestruje wszystkie zapytania oraz odpowiedzi generowane przez model, co pozwala na analizę wzorców użycia oraz identyfikację najczęstszych zapytań. Dzięki temu można lepiej dostosować aplikację do preferencji użytkowników, poprawiając jej efektywność i użyteczność. To narzędzie dostarcza interaktywnych dashboardów, które umożliwiają filtrowanie danych według różnych kryteriów, takich jak czas, typ zapytania czy występowanie błędów, co daje pełny wgląd w działanie aplikacji.</p>',
            image: 'ls_6_0.png',
          },
          {
            title: 'Jak Działa LangSmith?',
            description:
              '<p>LangSmith integruje się z twoją aplikacją jako dodatkowa warstwa monitorująca, działając w czasie rzeczywistym. Kiedy użytkownik wysyła zapytanie do modelu AI, LangSmith przechwytuje te dane przed ich przetworzeniem przez model. Następnie, każde zapytanie oraz odpowiedź są rejestrowane i analizowane, co pozwala na śledzenie kluczowych wskaźników, takich jak liczba zużytych tokenów, czas odpowiedzi oraz występowanie błędów.</p>',
          },
          {
            description:
              '<p>Dane te są przetwarzane w czasie rzeczywistym za pomocą systemów przetwarzania strumieniowego (streaming), co oznacza, że metryki i raporty są natychmiast dostępne w dashboardzie. LangSmith działa jako „middleware”, który przechwytuje każde zapytanie i odpowiedź, dostarczając cennych informacji na temat tego, jak model AI przetwarza dane, jakie wyniki generuje oraz ile to wszystko kosztuje.</p>',
          },
          {
            title: 'Jak Używać LangSmith w Praktyce?',
            description:
              '<p>Poniżej znajduje się szczegółowy przewodnik, jak krok po kroku skonfigurować LangSmith w twojej aplikacji opartej na Flowise.</p>',
          },
          {
            title: '1. Tworzenie API Key na LangSmith',
            description: [
              '<p>Zarejestruj się na <a href="https://smith.langchain.com/" target="_blank">LangSmith</a>.</p>',
              '<p>Przejdź do zakładki „Manage Organizations” i wygeneruj nowy klucz API. Nazwij go np. „Flowise Monitoring” i skopiuj.</p>',
            ],
          },
          {
            title: '2. Integracja z Flowise',
            description: [
              '<p>W aplikacji Flowise przejdź do sekcji „Configuration” i wybierz „Analyse Chatflow”.</p>',
              '<p>Wybierz „LangSmith” i kliknij „Create New”. Wklej skopiowany klucz API i skonfiguruj nazwę profilu monitorowania.</p>',
              '<p>Zapisz ustawienia i uruchom monitoring.</p>',
            ],
          },
          {
            title: '3. Sprawdzanie Statystyk w LangSmith',
            description: [
              '<p>Przejdź do zakładki „Projects” w LangSmith. Znajdziesz tam kluczowe informacje, takie jak liczba tokenów, koszty, czas odpowiedzi oraz szczegółowe dane o interakcjach użytkowników z twoją aplikacją.</p>',
            ],
          },
          {
            title: 'Dlaczego Warto Korzystać z LangSmith?',
            description:
              '<p>LangSmith wyróżnia się tym, że oferuje kompleksową analizę działania aplikacji AI, nie tylko monitorując zużycie zasobów, ale także dostarczając głębszych informacji na temat interpretacji i przetwarzania danych przez model. Dzięki przejrzystym dashboardom i raportom, narzędzie to umożliwia szybką identyfikację problemów oraz dostosowanie konfiguracji aplikacji. Niezależnie od skali projektu, LangSmith jest w stanie dostarczyć precyzyjne dane potrzebne do efektywnego zarządzania aplikacją, optymalizując jej działanie i kontrolując koszty.</p>',
          },
          {
            description:
              '<p>Podsumowując, LangSmith działa jako zaawansowane narzędzie analityczne, które monitoruje każdy aspekt działania aplikacji AI, dostarczając kluczowych danych, które są niezbędne do jej optymalizacji i rozwoju. Dzięki temu narzędziu masz pełny wgląd w działanie twojej aplikacji, co pozwala na szybsze reagowanie na problemy oraz skuteczniejsze zarządzanie zasobami.</p>',
          },
        ],
        videoLink: [
          {
            link: '1Xx-XcYwgd-Pl0CsPzRuxSvscX_3oS1CK',
            name: 'Przewodnik po podstawach FlowiseAI: Tworzenie i zarządzanie projektami Chatflow',
          },
        ],
      },
      // 7
      {
        id: 107,
        title:
          'Lekcja 7 - Weryfikacja informacji i łączenie modeli w FlowiseAI',
        about: [
          {
            title: 'Weryfikacja informacji i łączenie modeli w FlowiseAI',
            description:
              '<p>W tym przewodniku przeanalizujemy dwie techniki w FlowiseAI: weryfikację informacji z użyciem szablonów promptów oraz łączenie modeli (prompt chaining). Te podejścia umożliwiają budowanie inteligentnych przepływów pracy, takich jak automatyczna analiza prawdziwości stwierdzeń czy ocena wygenerowanych treści.</p>',
          },
        ],
        videoLink: [
          {
            link: '1Xx-XcYwgd-Pl0CsPzRuxSvscX_3oS1CK',
            name: 'Przewodnik po podstawach FlowiseAI: Tworzenie i zarządzanie projektami Chatflow',
          },
        ],
      },
    ],
    Offer: {
      create: {
        id: 1,
        courseId: 1,
        name: 'Oferta dla Kursu Pierwszego',
        description: 'Opis oferty dla kursu pierwszego',
        images: ['offer1.png', 'offer2.png'],
        tags: ['ai', 'langChain'],
        price: 99.99,
        currency: 'PLN',
        language: 'pl',
        goals: [
          'Naucz się programowania w języku LangChain od podstaw, w tym składni',
          'struktur danych i sterowania przepływem.,Zanurz się w środowisku bez kodu Flowise i zrozum jego możliwości.',
          'Twórz projekty realnego świata, używając zarówno LangChain, jak i Flowise.',
          'Zbadaj synergii między tradycyjnym programowaniem a tworzeniem aplikacji bez konieczności kodowania.',
          'Zdobądź umiejętności przydatne w różnych branżach, od programowania po tworzenie aplikacji bez kodu.',
        ],
        status: OfferStatus.ACTIVE,
      },
    },
  },
  {
    id: 2,
    courseId: 2,
    name: 'Course Two',
    description: 'Description for the second course',
    images: ['image3.png', 'image4.png'],
    language: 'en',
    status: CourseStatus.ACTIVE,
    lessons: [
      {
        id: 201,
        title: 'Lesson 1 - Course Two',
        about: [
          {
            title: 'Introduction to Course Two',
            description:
              'This lesson introduces the basic concepts of Course Two. You will learn the fundamentals of the course structure, and how the materials are organized to guide you step by step through more advanced topics.',
            image: 'https://picsum.photos/900',
          },
          {
            description:
              'We also delve into specific topics related to performance optimization, providing practical examples of how to improve your applications.',
          },
        ],
        videoLink: [
          {
            link: 'https://www.youtube.com/watch?v=k1OEeqknoR0',
            name: 'Wprowadzenie do pziomu zaawansowanego',
          },
        ],
      },
    ],
  },
];
