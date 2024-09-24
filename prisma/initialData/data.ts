import { CourseStatus, OfferStatus } from '@prisma/client';

export const courses = [
  {
    id: 1,
    courseId: 1,
    name: 'Course One',
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
              'Flowise to narzędzie, które rewolucjonizuje tworzenie aplikacji opartych na sztucznej inteligencji, szczególnie tych korzystających z dużych modeli językowych (LLM). Dzięki niemu, osoby bez zaawansowanej wiedzy programistycznej mogą budować interaktywne chatboty, systemy analizy tekstu oraz aplikacje oparte na konwersacjach AI. Flowise pozwala na projektowanie interfejsów graficznych, integrację z różnymi modelami oraz efektywne zarządzanie danymi wejściowymi i wyjściowymi.',
          },
          {
            title: 'Wprowadzenie do Dużych Modeli Językowych (LLM)',
            description:
              'Duże modele językowe, takie jak GPT-3, GPT-4 czy Gemini od Google, są rdzeniem współczesnych technologii przetwarzania języka naturalnego (NLP). Te modele są trenowane na ogromnych zbiorach danych językowych, co pozwala im generować odpowiedzi na pytania, analizować teksty, a nawet prowadzić rozbudowane konwersacje, zbliżone do interakcji z człowiekiem.',
          },
          {
            description:
              'Jednym z kluczowych aspektów działania LLM są tokeny. Tokeny to jednostki tekstu – mogą to być słowa, znaki lub fragmenty zdań – które są analizowane przez model. Kiedy wpisujemy zdanie, jest ono rozbijane na tokeny, które model przetwarza, aby odpowiedzieć w sposób spójny i zrozumiały.',
          },
          {
            description:
              'Aby lepiej zrozumieć, czym są tokeny i jak działają, warto odwiedzić narzędzia takie jak strona OpenAI, gdzie można zobaczyć, jak GPT przetwarza tekst na tokeny i w jaki sposób analizuje je, aby wygenerować odpowiedzi.',
          },
          {
            title: 'Przetwarzanie Kontekstu przez Modele Językowe',
            description:
              'Ważne jest zrozumienie, że modele językowe, mimo zaawansowania, nie "pamiętają" poprzednich rozmów w taki sposób, jak moglibyśmy to sobie wyobrażać. Każda nowa odpowiedź jest generowana na podstawie nowego zapytania (promptu), który może zawierać skrótową historię wcześniejszej konwersacji.',
          },
          {
            description:
              'Na przykład, w modelach takich jak GPT-4, istnieje ograniczenie liczby tokenów, które można przetworzyć jednocześnie. GPT-4 może obsłużyć do 128 tysięcy tokenów (około 300 stron tekstu), podczas gdy GPT-3.5 – jedynie 16 tysięcy tokenów (około 14 stron). Choć nowszy model GPT-4 oferuje większe możliwości, nie zawsze jest konieczne jego użycie. GPT-3.5, mimo mniejszej liczby tokenów, działa szybciej i jest wystarczający do prostszych zadań.',
          },
          {
            title: 'Wybór Modelu do Twojej Aplikacji',
            description:
              'Wybór odpowiedniego modelu zależy od specyfiki zadania. Do zadań prostszych, gdzie kluczowa jest szybkość odpowiedzi, GPT-3.5 jest często lepszym wyborem. Z kolei przy bardziej skomplikowanych zagadnieniach, wymagających dogłębnej analizy czy szczegółowej wiedzy, warto sięgnąć po GPT-4. Warto też pamiętać, że istnieją inne modele, takie jak Falcon 40B, które oferują jeszcze większe możliwości przetwarzania języka.',
          },
          { description: 'Dogłębniejsze objaśnienie terminów:' },

          {
            title: '1. Duże Modele Językowe (LLM)',
            description:
              'LLM to rodzaj sztucznej inteligencji, który został wytrenowany na ogromnych zbiorach danych tekstowych. Modele te analizują miliardy zdań i fragmentów tekstu, aby nauczyć się wzorców językowych, które pozwalają im generować spójne i kontekstowo adekwatne odpowiedzi. Przykłady LLM to GPT-3, GPT-4 oraz Gemini od Google. W kontekście Flowise, te modele są wykorzystywane jako podstawowe jednostki do przetwarzania tekstu i generowania odpowiedzi.',
          },

          {
            title: '2. Tokeny',
            description:
              'Tokeny to podstawowe jednostki tekstu wykorzystywane przez modele językowe. Można je zrozumieć jako słowa, znaki lub fragmenty zdań, na które model dzieli wejściowy tekst. Przykładowo, zdanie "ChatGPT to świetne narzędzie" może zostać podzielone na kilka tokenów: "Chat", "GPT", "to", "świetne", "narzędzie". Modele takie jak GPT-3 czy GPT-4 operują właśnie na tych tokenach, analizując je i na tej podstawie generując odpowiedzi.',
          },
          {
            description: [
              'GPT-4: Obsługuje do 128 tysięcy tokenów (ok. 300 stron tekstu).',
              'GPT-3.5: Obsługuje do 16 tysięcy tokenów (ok. 14 stron tekstu).',
            ],
          },
          {
            description:
              'Rozumienie liczby tokenów jest ważne przy budowaniu aplikacji, ponieważ wpływa to na długość konwersacji, którą model może „zapamiętać” oraz przetworzyć.',
            image: 'course1_token_modifications.png',
          },

          {
            title: '3. Prompt (Zapytanie)',
            description:
              'Prompt to zapytanie lub wejściowy tekst, który wysyłamy do modelu językowego w celu uzyskania odpowiedzi. Może to być proste pytanie ("Jaka jest stolica Francji?") lub bardziej skomplikowana instrukcja, która zawiera historię rozmowy. W Flowise prompty są podstawowym sposobem komunikacji z modelem i sterowania jego działaniem.',
          },
          {
            title: '4. Konwersacja i Kontekst',
            description:
              'Modele językowe, takie jak GPT, generują odpowiedzi na podstawie przesłanych do nich promptów. Jednakże nie mają one rzeczywistej "pamięci" – każdy nowy prompt traktowany jest jako oddzielne zapytanie. Aby kontynuować konwersację w sposób spójny, historia rozmowy jest zwykle zawierana w treści promptu. Dlatego im dłuższa konwersacja, tym więcej tokenów potrzeba na zachowanie kontekstu.',
          },

          {
            title: '5. Wydajność a Skomplikowanie Modelu',
            description:
              'W kontekście wyboru modelu do aplikacji warto znać różnice między różnymi wersjami:',
          },
          {
            description: [
              'GPT-3.5: Szybszy, ale obsługuje mniejszą liczbę tokenów. Idealny do prostszych zadań.',
              'GPT-4: Wolniejszy, ale bardziej precyzyjny i obsługujący większą ilość tokenów. Lepszy do zaawansowanych analiz i długich konwersacji.',
            ],
          },
          {
            description:
              'Oprócz modeli GPT, istnieją także inne modele, takie jak Falcon 40B, które oferują różne zalety w zależności od specyfiki aplikacji.',
          },
          {
            title: '6. Model Falcon 40B',
            description:
              'Falcon 40B to jeden z zaawansowanych modeli językowych o dużych możliwościach. Został zaprojektowany do przetwarzania jeszcze większej liczby tokenów niż GPT-4, co pozwala na generowanie bardziej rozbudowanych i kontekstowo bogatych odpowiedzi. Tego typu modele są szczególnie przydatne w aplikacjach wymagających dużej precyzji oraz złożonych analiz tekstu.',
          },
          {
            title: 'Podsumowanie',
            description:
              'Flowise daje użytkownikom możliwość tworzenia zaawansowanych aplikacji konwersacyjnych w oparciu o LLM, bez potrzeby znajomości programowania. Zrozumienie działania tokenów oraz wyboru odpowiedniego modelu pozwala na lepsze dostosowanie aplikacji do konkretnych potrzeb. Ostatecznie, wybór narzędzi i modelu zależy od celu aplikacji – czy to szybkie odpowiedzi, czy bardziej skomplikowane analizy. Dzięki takim rozwiązaniom, jak Flowise, tworzenie aplikacji AI staje się bardziej dostępne niż kiedykolwiek.',
          },
        ],
        //videoLink: '13J9zRH5fjEIdxTT-wUdUqHXs1VYR7S0o',
        videoLink: 'wstep.mp4',
      },
      {
        id: 102,
        title: 'Lekcja 2 - Kurs Pierwszy',
        about: [
          {
            title: 'Struktury danych i algorytmy',
            description:
              'Druga lekcja wprowadza bardziej zaawansowane koncepcje, takie jak struktury danych oraz algorytmy wykorzystywane w LangChain.',
            image: 'https://picsum.photos/900',
          },
          {
            description:
              'Lekcja zawiera przykłady praktyczne, które pomagają w lepszym zrozumieniu tematów.',
          },
          {
            image: 'https://picsum.photos/900',
          },
        ],
        videoLink: 'https://www.youtube.com/watch?v=k1OEeqknoR0',
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
      {
        id: 104,
        title: 'Lekcja 4 - Kurs Pierwszy',
        about: [
          {
            title: 'Zaawansowane techniki',
            description:
              'Czwarta lekcja poświęcona jest zaawansowanym technikom wykorzystywania LangChain do analizy danych i tworzenia algorytmów przetwarzających duże ilości informacji w czasie rzeczywistym.',
            image: 'https://picsum.photos/900',
          },
        ],
        videoLink: 'https://www.youtube.com/watch?v=k1OEeqknoR0',
      },
      {
        id: 105,
        title: 'Lekcja 5 - Kurs Pierwszy',
        about: [
          {
            description:
              'Ostatnia lekcja wprowadza podsumowanie całego kursu, gdzie przeanalizujemy, co zostało osiągnięte i jak wykorzystać zdobytą wiedzę w rzeczywistych projektach.',
            image: 'https://picsum.photos/900',
          },
          {
            description:
              'Na koniec lekcji omówimy również dalsze kroki w nauce oraz polecane zasoby do poszerzania wiedzy z zakresu LangChain i Flowise.',
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
