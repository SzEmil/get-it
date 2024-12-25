import { CourseStatus, OfferStatus } from '@prisma/client';

export const courses = [
  {
    id: 1,
    courseId: 1,
    name: 'Langchain Flowise AI - kurs podstawowy',
    description: 'Opis kursu pierwszego',
    images: ['image1.png', 'image2.png'],
    language: 'pl',
    status: CourseStatus.ACTIVE,
    //

    lessons: [],
    trailers: [
      {
        name: 'Trailer kursu - Langchain Flowise AI - kurs podstawowy',
        link: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
      },
    ],
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
