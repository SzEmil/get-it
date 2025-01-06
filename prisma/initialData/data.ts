import { CourseStatus, OfferStatus } from '@prisma/client';

export const courses = [
  {
    id: 1,
    courseId: 1,
    name: 'KURS FLOWISE AI – TWORZENIE APLIKACJI AI BEZ KODOWANIA',
    description:
      'Witaj w kursie "Flowise AI - kurs podstawowy"! Tutaj znajdziesz wszystkie lekcje oraz materiały dodatkowe, które pomogą Ci w opanowaniu Flowise AI. Zacznij od pierwszego kroku i odkrywaj możliwości Flowise w swoim tempie.',
    images: ['image1.png', 'image2.png'],
    language: 'pl',
    status: CourseStatus.ACTIVE,
    //

    lessons: [],

    Offer: {
      create: {
        id: 1,
        courseId: 1,
        name: 'KURS FLOWISE AI – TWORZENIE APLIKACJI AI BEZ KODOWANIA',
        description:
          'Zanurz się w świecie sztucznej inteligencji i odkryj, jak budować potężne aplikacje AI przy użyciu graficznej nakładki Flowise AI! Nasz kurs to idealny wybór dla osób, które chcą projektować aplikacje korzystające z modeli AI i frameworka LangChain, ale bez konieczności znajomości programowania.',
        images: ['offer1.png', 'offer2.png'],
        tags: ['ai', 'flowise'],
        price: 349,
        currency: 'PLN',
        language: 'pl',
        goals: [
          'Opanuj Flowise AI: Nauczysz się, jak efektywnie korzystać z Flowise AI, graficznego narzędzia do budowy aplikacji AI za pomocą prostego łączenia bloków.',
          'Twórz aplikacje krok po kroku: Dowiesz się, jak stworzyć chatboty, integracje API i przepływy złożone z wielu modeli AI bez potrzeby kodowania.',
          'Rozwijaj kluczowe umiejętności: Poznasz zaawansowane funkcje, takie jak Function Calling, długoterminowa pamięć i moderacja treści, by maksymalnie wykorzystać potencjał Flowise AI.',
          'Idealne dla każdego: Niezależnie od Twojego poziomu doświadczenia w AI — kurs wprowadzi Cię w świat nowoczesnych technologii i pomoże w ich praktycznym zastosowaniu.',
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
