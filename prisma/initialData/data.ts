import { CourseStatus, OfferStatus } from '@prisma/client';

export const courses = [
  {
    id: 1,
    courseId: 1,
    name: 'Langchain Flowise AI - kurs podstawowy',
    description:
      'Kurs podstawowy Langchain Flowise AI to doskonałe wprowadzenie do nowoczesnych technologii AI. Nauczysz się korzystać z frameworka LangChain oraz środowiska bez kodu Flowise AI, tworząc praktyczne projekty oparte na sztucznej inteligencji. Dzięki temu kursowi zrozumiesz kluczowe pojęcia i narzędzia, które pozwolą Ci projektować i wdrażać innowacyjne aplikacje AI w różnych dziedzinach.',
    images: ['image1.png', 'image2.png'],
    language: 'pl',
    status: CourseStatus.ACTIVE,
    //

    lessons: [],

    Offer: {
      create: {
        id: 1,
        courseId: 1,
        name: 'Kurs Langchain Flowise AI - kurs podstawowy',
        description:
          'Kurs „Langchain Flowise AI - kurs podstawowy” oferuje praktyczne wprowadzenie do programowania z użyciem frameworka LangChain oraz środowiska bez kodu Flowise AI. W trakcie kursu poznasz kluczowe koncepcje LangChain i nauczysz się tworzyć aplikacje AI, korzystając z zaawansowanych technik programistycznych oraz narzędzi do wizualnego modelowania procesów. Kurs jest skierowany zarówno do osób początkujących, jak i tych, które chcą poszerzyć swoje umiejętności w zakresie projektowania nowoczesnych aplikacji opartych na AI.',
        images: ['offer1.png', 'offer2.png'],
        tags: ['ai', 'langChain'],
        price: 99.99,
        currency: 'PLN',
        language: 'pl',
        goals: [
          'Poznanie podstaw LangChain: Opanuj składnię, struktury danych oraz kontrolę przepływu w programowaniu z użyciem LangChain.',
          'Wprowadzenie do Flowise AI: Naucz się korzystać z środowiska bez kodu Flowise, umożliwiającego tworzenie aplikacji opartych na dużych modelach językowych.',
          'Praktyczne projekty: Twórz rzeczywiste aplikacje, wykorzystując integrację LangChain i Flowise AI.',
          'Synergia programowania i narzędzi bez kodu: Zbadaj, jak łączyć tradycyjne podejście do programowania z nowoczesnymi narzędziami do modelowania procesów.',
          'Uniwersalne umiejętności: Rozwiń kompetencje, które znajdą zastosowanie w różnych branżach, takich jak analiza danych, projektowanie aplikacji AI czy automatyzacja procesów.',
        ],
        status: OfferStatus.DRAFT,
      },
    },
  },

  {
    id: 102,
    courseId: 102,
    name: 'Testowy Kurs - Zaawansowane Aplikacje Webowe',
    description:
      'Testowy kurs skupiający się na budowie zaawansowanych aplikacji webowych z użyciem nowoczesnych narzędzi i technologii.',
    images: ['test_course_image1.png', 'test_course_image2.png'],
    language: 'pl',
    status: CourseStatus.ACTIVE,
    lessons: [
      {
        id: 201,
        title: 'Lekcja 1 - Wprowadzenie do Aplikacji Webowych',
        about: [
          {
            title: 'Podstawy aplikacji webowych',
            description:
              '<p>W tej lekcji poznasz podstawowe pojęcia i technologie stosowane w budowie aplikacji webowych. Dowiesz się, jak działa internet oraz jakie są kluczowe komponenty aplikacji.</p>',
          },
        ],
      },
      {
        id: 202,
        title: 'Lekcja 2 - Tworzenie Komponentów',
        about: [
          {
            title: 'Budowanie komponentów w React',
            description:
              '<p>W tej lekcji nauczysz się, jak tworzyć i zarządzać komponentami w React. Dowiesz się, jak projektować interfejsy użytkownika i zarządzać stanem aplikacji.</p>',
          },
        ],
      },
      {
        id: 203,
        title: 'Lekcja 3 - Projekt Końcowy',
        about: [
          {
            title: 'Projekt Końcowy: Aplikacja E-commerce',
            description:
              '<p>W tej lekcji skonfigurujesz i zbudujesz kompletną aplikację e-commerce z funkcjami takimi jak zarządzanie produktami, koszyk oraz proces realizacji zamówienia. Projekt ten pomoże Ci zrozumieć, jak połączyć różne technologie i narzędzia w jeden spójny projekt.</p>',
          },
        ],
      },
    ],
    Offer: {
      create: {
        id: 301,
        courseId: 102,
        name: 'Testowa Oferta - Zaawansowane Aplikacje Webowe',
        description:
          'Ta oferta obejmuje pełny kurs budowy zaawansowanych aplikacji webowych, idealny dla osób chcących zdobyć praktyczne umiejętności w tej dziedzinie.',
        images: ['offer_test_image1.png', 'offer_test_image2.png'],
        tags: ['web development', 'advanced', 'react'],
        price: 199.99,
        currency: 'PLN',
        language: 'pl',
        goals: [
          'Zrozumienie podstaw aplikacji webowych.',
          'Tworzenie komponentów w React.',
          'Projektowanie i implementacja zaawansowanych aplikacji.',
          'Zarządzanie stanem aplikacji.',
          'Integracja różnych narzędzi i technologii w jednym projekcie.',
        ],
        status: OfferStatus.ACTIVE,
      },
    },
  },
];
