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
    lessons: [
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
        videoLink: '13J9zRH5fjEIdxTT-wUdUqHXs1VYR7S0o',
      },
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
              '<p><em>Wyjaśnienie:</em> Konsola Git Bash to środowisko, które pozwala na wykonywanie poleceń takich jak klonowanie repozytorium, zarządzanie plikami i uruchamianie aplikacji. Działa podobnie jak tradycyjny wiersz poleceń, ale jest zoptymalizowana do pracy z Git.</p>'
            ],
          },
          {
            title: 'Krok 2: Klonowanie Repozytorium Flowise z GitHub',
            description: [
              '<p>1. <strong>Przejdź do Strony Repozytorium Flowise na GitHub</strong><br>Otwórz przeglądarkę i wejdź na stronę <a href="https://github.com/FlowiseAI/Flowise">Flowise na GitHub</a>. Kliknij zielony przycisk „Code” i skopiuj wyświetlony link do repozytorium.</p>',
              '<p>2. <strong>Klonowanie Repozytorium</strong><br>W konsoli Git Bash wpisz komendę: <code>git clone [skopiowany-link]</code><br>Wklej skopiowany link i naciśnij Enter. Komenda <code>git clone</code> pobiera wszystkie pliki projektu na Twój komputer, co pozwala na lokalne uruchomienie Flowise.</p>',
              '<p><em>Wyjaśnienie:</em> <code>git clone</code> tworzy lokalną kopię całego repozytorium, czyli projektu, na Twoim komputerze. Pozwala to na dostęp do wszystkich plików i dalszą pracę bez potrzeby bycia online.</p>'
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
              '<p><em>Wyjaśnienie:</em> <code>npx</code> to narzędzie, które pozwala na uruchamianie pakietów Node.js bez potrzeby instalowania ich globalnie na systemie. Dzięki temu nie musisz ręcznie konfigurować dodatkowych ustawień.</p>'
            ],
          },

          {
            title: 'Krok 4: Dostęp do Interfejsu Flowise',
            description: [
              '<p>1. <strong>Otwórz Przeglądarkę</strong><br>Po uruchomieniu serwera zobaczysz adres URL w konsoli, zazwyczaj:<br><a href="#">http://localhost:3000</a></p>',
              '<p><em>Wyjaśnienie:</em> localhost to specjalna nazwa adresu, który odwołuje się do Twojego komputera. Port 3000 to konkretna lokalizacja, pod którą działa aplikacja na Twoim serwerze lokalnym.</p>',
              '<p>2. <strong>Zaloguj się i Zacznij Pracę z Flowise</strong><br>Po wpisaniu adresu w przeglądarce zobaczysz interfejs Flowise, który pozwoli Ci tworzyć i zarządzać projektami opartymi na modelach językowych.</p>'
            ],
          },

          {title: "Wyjaśnienie Terminów Technicznych"},

          {
            title: '1. Git',
            description: [
              '<p><strong>Co to jest?</strong> Git to system kontroli wersji, który śledzi zmiany w plikach projektu i umożliwia współpracę wielu osób nad tym samym kodem. Jest powszechnie używany w projektach programistycznych, umożliwiając łatwe cofanie się do wcześniejszych wersji kodu i zarządzanie jego historią.</p>',
              '<p><strong>Dlaczego jest używany?</strong> Dzięki Gitowi możesz tworzyć kopie (klonować) repozytoria, śledzić zmiany w plikach, a także udostępniać swoje projekty innym. W kontekście Flowise, Git jest wykorzystywany do pobrania i aktualizacji całego projektu z GitHub.</p>'
            ],
          },
          {
            title: '2. GitHub',
            description: [
              '<p><strong>Co to jest?</strong> GitHub to platforma hostingowa dla projektów programistycznych wykorzystujących Git. Pozwala na przechowywanie kodu w tzw. repozytoriach, współpracę zespołową, zgłaszanie błędów i dzielenie się kodem ze społecznością.</p>',
              '<p><strong>Dlaczego jest używany?</strong> GitHub centralizuje zarządzanie projektem i umożliwia łatwe klonowanie kodu oraz śledzenie zmian w aplikacji. Repozytorium Flowise na GitHub zawiera wszystkie potrzebne pliki do uruchomienia aplikacji.</p>'
            ],
          },
          {
            title: '3. Repozytorium',
            description: [
              '<p><strong>Co to jest?</strong> Repozytorium to zbiór plików i historii ich zmian w projekcie. Może zawierać kod źródłowy, dokumentację, konfiguracje i inne zasoby potrzebne do działania aplikacji.</p>',
              '<p><strong>Dlaczego jest używane?</strong> Repozytorium ułatwia organizację plików i umożliwia efektywną współpracę. Dzięki temu, każdy może pobrać projekt (klonować repozytorium) i pracować nad nim na swoim komputerze.</p>'
            ],
          },
          {
            title: '4. Klonowanie (git clone)',
            description: [
              '<p><strong>Co to jest?</strong> Klonowanie to proces tworzenia lokalnej kopii całego repozytorium na Twoim komputerze. Komenda git clone pobiera wszystkie pliki oraz historię zmian z serwera na Twoje urządzenie.</p>',
              '<p><strong>Dlaczego jest używane?</strong> Klonowanie pozwala na szybkie uzyskanie pełnej wersji projektu na własnym sprzęcie, co umożliwia dalszą pracę, wprowadzanie zmian oraz testowanie aplikacji bez konieczności bycia online.</p>'
            ],
          },
          {
            title: '5. Git Bash',
            description: [
              '<p><strong>Co to jest?</strong> Git Bash to konsola (terminal) dostosowana do pracy z Git na systemie Windows. Umożliwia wprowadzanie komend takich jak git clone, cd czy npm install, które są niezbędne do zarządzania projektem i jego uruchamiania.</p>',
              '<p><strong>Dlaczego jest używane?</strong> Git Bash łączy funkcjonalność tradycyjnego wiersza poleceń z zaawansowanymi narzędziami Gita, dzięki czemu praca z repozytoriami oraz instalacją aplikacji staje się łatwiejsza i bardziej intuicyjna.</p>'
            ],
          },
          {
            title: '6. npm (Node Package Manager)',
            description: [
              '<p><strong>Co to jest?</strong> npm to menedżer pakietów dla języka JavaScript, który umożliwia instalowanie, aktualizowanie i zarządzanie bibliotekami oraz narzędziami potrzebnymi do działania aplikacji.</p>',
              '<p><strong>Dlaczego jest używane?</strong> Flowise, jako aplikacja napisana w JavaScript, korzysta z wielu dodatkowych bibliotek. Komenda npm install pobiera i instaluje te zależności, co pozwala na uruchomienie aplikacji bez ręcznego instalowania każdej biblioteki osobno.</p>'
            ],
          },
          {
            title: '7. npx',
            description: [
              '<p><strong>Co to jest?</strong> npx to narzędzie, które pozwala na uruchamianie pakietów Node.js bez potrzeby instalowania ich globalnie na Twoim systemie. Dzięki temu możesz tymczasowo użyć narzędzi takich jak Flowise bez ich trwałej instalacji.</p>',
              '<p><strong>Dlaczego jest używane?</strong> Komenda npx flowise start umożliwia uruchomienie serwera Flowise, który następnie działa lokalnie na Twoim komputerze. Jest to wygodne, gdy chcesz szybko przetestować aplikację bez zbędnych konfiguracji.</p>'
            ],
          },
          {
            title: '8. cd (Change Directory)',
            description: [
              '<p><strong>Co to jest?</strong> cd to podstawowa komenda w konsoli służąca do zmiany bieżącego katalogu. Pozwala na nawigowanie po folderach na Twoim komputerze.</p>',
              '<p><strong>Dlaczego jest używane?</strong> Kiedy klonujesz repozytorium, projekt jest zapisywany w określonym folderze. Komenda cd flowise przenosi Cię do katalogu z pobranymi plikami, gdzie możesz uruchamiać kolejne komendy, takie jak instalacja pakietów czy uruchamianie serwera.</p>'
            ],
          },
          {
            title: '9. localhost i Port',
            description: [
              '<p><strong>Co to jest?</strong> localhost to specjalna nazwa oznaczająca Twój własny komputer jako serwer. Port, np. 3000, to "drzwi", przez które aplikacja komunikuje się z przeglądarką. Razem tworzą adres, pod którym możesz uzyskać dostęp do uruchomionych aplikacji (np. <a href="#">http://localhost:3000</a>).</p>',
              '<p><strong>Dlaczego jest używane?</strong> Gdy uruchamiasz Flowise lokalnie, serwer działa na Twoim komputerze. Adres <a href="#">localhost:3000</a> pozwala Ci zobaczyć interfejs aplikacji, jakby działała ona w internecie, ale wszystko dzieje się lokalnie.</p>'
            ],
          },
          {
            title: 'Podsumowanie',
            description: '<p>Oba podejścia – lokalna instalacja oraz instalacja w chmurze – mają swoje zalety i wady. Lokalna instalacja zapewnia prywatność i niskie koszty, ale wymaga odpowiedniego sprzętu i ciągłego działania serwera. Z kolei instalacja w chmurze oferuje skalowalność i dostępność z każdego miejsca, ale wiąże się z dodatkowymi kosztami oraz pewnymi ograniczeniami dotyczącymi prywatności.</p>',
          },
          {
            description: '<p>Wybór odpowiedniego rozwiązania zależy od Twoich potrzeb, etapu projektu i zasobów, jakimi dysponujesz. Dla testów i małych projektów lokalna instalacja będzie optymalnym wyborem, natomiast dla wdrożeń produkcyjnych lepszym rozwiązaniem będzie migracja do chmury.</p>',
          }
        ],
        videoLink: '1EvJ9oEhlM_rsEOc643PNUi2IVmR10Bre',
      },

      {
        id: 103,
        title: 'Lekcja 3 - Kurs Pierwszy',
        about: [
          {
            description:
              'W tej lekcji skupimy się na rozbudowanych przykładach, które pomogą w lepszym zrozumieniu, jak wykorzystać Flowise w praktycznych aplikacjach.',
          },
          {
            image: 'https://picsum.photos/900',
          },
        ],
        videoLink: 'https://www.youtube.com/watch?v=k1OEeqknoR0',
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
        videoLink: 'https://www.youtube.com/watch?v=k1OEeqknoR0',
      },
      {
        id: 202,
        title: 'Lesson 2 - Course Two',
        about: [
          {
            description:
              'In this lesson, we will cover more advanced topics such as custom components and complex logic implementation.',
            image: 'https://picsum.photos/900',
          },
          {
            description:
              'You will also learn how to create projects that scale efficiently.',
          },
        ],
        videoLink: 'https://www.youtube.com/watch?v=k1OEeqknoR0',
      },
      {
        id: 203,
        title: 'Lesson 3 - Course Two',
        about: [
          {
            title: 'Real-world use cases',
            description:
              'This lesson focuses on real-world use cases, showcasing how LangChain and Flowise can be used together in complex no-code environments.',
            image: 'https://picsum.photos/900',
          },
        ],
        videoLink: 'https://www.youtube.com/watch?v=k1OEeqknoR0',
      },
      {
        id: 204,
        title: 'Lesson 4 - Course Two',
        about: [
          {
            description:
              'Lesson four delves into advanced data handling techniques and the use of Flowise in large-scale projects.',
            image: 'https://picsum.photos/900',
          },
        ],
        videoLink: 'https://www.youtube.com/watch?v=k1OEeqknoR0',
      },
      {
        id: 205,
        title: 'Lesson 5 - Course Two',
        about: [
          {
            description:
              'The final lesson provides a recap of the entire course, with a focus on practical applications and projects that you can start building on your own.',
            image: 'https://picsum.photos/900',
          },
        ],
        videoLink: 'https://www.youtube.com/watch?v=k1OEeqknoR0',
      },
    ],
  },
];
