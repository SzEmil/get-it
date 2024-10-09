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
