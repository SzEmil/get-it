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
        status: OfferStatus.ACTIVE,
      },
    },
  },
];
