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

    lessons: [],
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
