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
        title: 'Lekcja 1 - Kurs Pierwszy',
        about: [
          { 
            description: 'W tej lekcji przedstawiamy podstawowe informacje o kursie, w tym najważniejsze zagadnienia, które będą omówione. Zaczniemy od ogólnego wprowadzenia i opisania, jak kurs jest zorganizowany oraz jakie cele chcemy osiągnąć.', 
            image: 'https://picsum.photos/900' 
          },
          { 
            description: 'Kontynuujemy od bardziej szczegółowych informacji dotyczących treści kursu, w tym przeglądu najważniejszych tematów. Lekcja koncentruje się również na metodach nauczania oraz na tym, jak najlepiej podejść do materiału.', 
            image: 'https://picsum.photos/900' 
          }
        ],
        videoLink: 'https://www.youtube.com/watch?v=k1OEeqknoR0',
      },
      {
        id: 102,
        title: 'Lekcja 2 - Kurs Pierwszy',
        about: [
          { 
            description: 'Druga lekcja wprowadza bardziej zaawansowane koncepcje, takie jak struktury danych oraz algorytmy wykorzystywane w LangChain. Lekcja zawiera przykłady praktyczne, które pomagają w lepszym zrozumieniu tematów.', 
            image: 'https://picsum.photos/900' 
          },
          { 
            description: 'Dodatkowo, omówimy kluczowe problemy związane z wydajnością aplikacji i przedstawimy sposoby ich rozwiązywania. Lekcja pokazuje również, jak zoptymalizować kod w codziennej pracy programisty.', 
            image: 'https://picsum.photos/900' 
          }
        ],
        videoLink: 'https://www.youtube.com/watch?v=k1OEeqknoR0',
      },
      {
        id: 103,
        title: 'Lekcja 3 - Kurs Pierwszy',
        about: [
          { 
            description: 'W tej lekcji skupimy się na rozbudowanych przykładach, które pomogą w lepszym zrozumieniu, jak wykorzystać Flowise w praktycznych aplikacjach. Zobaczysz, jak zintegrować LangChain z innymi narzędziami bez kodowania.', 
            image: 'https://picsum.photos/900' 
          },
          { 
            description: 'Poznamy również techniki debugowania aplikacji oraz sposoby monitorowania ich wydajności. Dzięki temu będziesz mógł tworzyć bardziej stabilne i responsywne rozwiązania.', 
            image: 'https://picsum.photos/900' 
          }
        ],
        videoLink: 'https://www.youtube.com/watch?v=k1OEeqknoR0',
      },
      {
        id: 104,
        title: 'Lekcja 4 - Kurs Pierwszy',
        about: [
          { 
            description: 'Czwarta lekcja poświęcona jest zaawansowanym technikom wykorzystywania LangChain do analizy danych i tworzenia algorytmów przetwarzających duże ilości informacji w czasie rzeczywistym.', 
            image: 'https://picsum.photos/900' 
          },
          { 
            description: 'Lekcja obejmuje także omówienie tematów związanych z bezpieczeństwem aplikacji oraz ochroną danych. Przedstawimy najlepsze praktyki dotyczące zabezpieczania aplikacji przed zagrożeniami.', 
            image: 'https://picsum.photos/900' 
          }
        ],
        videoLink: 'https://www.youtube.com/watch?v=k1OEeqknoR0',
      },
      {
        id: 105,
        title: 'Lekcja 5 - Kurs Pierwszy',
        about: [
          { 
            description: 'Ostatnia lekcja wprowadza podsumowanie całego kursu, gdzie przeanalizujemy, co zostało osiągnięte i jak wykorzystać zdobytą wiedzę w rzeczywistych projektach. Będziemy omawiać również projekty do samodzielnego wykonania.', 
            image: 'https://picsum.photos/900' 
          },
          { 
            description: 'Na koniec lekcji omówimy również dalsze kroki w nauce oraz polecane zasoby do poszerzania wiedzy z zakresu LangChain i Flowise. Jest to doskonały punkt wyjścia do kolejnych wyzwań programistycznych.', 
            image: 'https://picsum.photos/900' 
          }
        ],
        videoLink: 'https://www.youtube.com/watch?v=k1OEeqknoR0',
      }
    ],
    videos: {
      create: [
        {
          id: 1,
          courseId: 1,
          link: 'https://example.com/video1',
          description: 'Opis dla wideo pierwszego',
          image: 'video1.png',
        },
        {
          id: 2,
          courseId: 1,
          link: 'https://example.com/video2',
          description: 'Opis dla wideo drugiego',
          image: 'video2.png',
        },
      ],
    },
    Offer: {
      create: {
        id: 1,
        courseId: 1,
        name: 'Oferta dla Kursu Pierwszego',
        description: 'Opis oferty dla kursu pierwszego',
        images: ['offer1.png', 'offer2.png'],
        tags: ["ai", "langChain"],
        price: 99.99,
        currency: "PLN",
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
            description: 'This lesson introduces the basic concepts of Course Two. You will learn the fundamentals of the course structure, and how the materials are organized to guide you step by step through more advanced topics.', 
            image: 'https://picsum.photos/900' 
          },
          { 
            description: 'We also delve into specific topics related to performance optimization, providing practical examples of how to improve your applications.', 
            image: 'https://picsum.photos/900' 
          }
        ],
        videoLink: 'https://www.youtube.com/watch?v=k1OEeqknoR0',
      },
      {
        id: 202,
        title: 'Lesson 2 - Course Two',
        about: [
          { 
            description: 'In this lesson, we will cover more advanced topics such as custom components and complex logic implementation. You will also learn how to create projects that scale efficiently.', 
            image: 'https://picsum.photos/900' 
          },
          { 
            description: 'Additionally, this lesson covers integration of external APIs and databases, making your application more dynamic and connected to real-world data sources.', 
            image: 'https://picsum.photos/900' 
          }
        ],
        videoLink: 'https://www.youtube.com/watch?v=k1OEeqknoR0',
      },
      {
        id: 203,
        title: 'Lesson 3 - Course Two',
        about: [
          { 
            description: 'This lesson focuses on real-world use cases, showcasing how LangChain and Flowise can be used together in complex no-code environments. We will also discuss troubleshooting techniques.', 
            image: 'https://picsum.photos/900' 
          },
          { 
            description: 'Furthermore, we will explore strategies for ensuring security and protecting your applications from common vulnerabilities.', 
            image: 'https://picsum.photos/900' 
          }
        ],
        videoLink: 'https://www.youtube.com/watch?v=k1OEeqknoR0',
      },
      {
        id: 204,
        title: 'Lesson 4 - Course Two',
        about: [
          { 
            description: 'Lesson four delves into advanced data handling techniques and the use of Flowise in large-scale projects. This includes real-time processing and big data management.', 
            image: 'https://picsum.photos/900' 
          },
          { 
            description: 'We will also cover performance tuning and ensuring that your projects remain responsive under heavy load.', 
            image: 'https://picsum.photos/900' 
          }
        ],
        videoLink: 'https://www.youtube.com/watch?v=k1OEeqknoR0',
      },
      {
        id: 205,
        title: 'Lesson 5 - Course Two',
        about: [
          { 
            description: 'The final lesson provides a recap of the entire course, with a focus on practical applications and projects that you can start building on your own.', 
            image: 'https://picsum.photos/900' 
          },
          { 
            description: 'You will also learn about further learning resources and how to expand your knowledge beyond this course, preparing you for advanced challenges.', 
            image: 'https://picsum.photos/900' 
          }
        ],
        videoLink: 'https://www.youtube.com/watch?v=k1OEeqknoR0',
      }
    ],
    videos: {
      create: [
        {
          id: 3,
          courseId: 2,
          link: 'https://example.com/video3',
          description: 'Description for the third video',
          image: 'video3.png',
        },
        {
          id: 4,
          courseId: 2,
          link: 'https://example.com/video4',
          description: 'Description for the fourth video',
          image: 'video4.png',
        },
      ],
    },
    Offer: {
      create: {
        id: 2,
        courseId: 2,
        name: 'Offer for Course Two',
        description: 'Description of the offer for the second course',
        images: ['offer3.png', 'offer4.png'],
        price: 149.99,
        currency: "PLN",
        language: 'en',
        tags: ["ai", "langChain"],
        goals: [
          'Advanced use of tools: Expand your existing knowledge and discover advanced features of LangChain and Flowise for building complex applications with finesse.',
          'Custom components and logic: Dive into custom components and complex logic, extending the capabilities of applications beyond what was covered in the basic course.',
          'Data integration: Master the art of integrating data from various sources, enabling dynamic interaction of your applications with external databases, APIs, and more.',
          'Performance optimization and tuning: Improve your applications for speed, responsiveness, and efficiency, ensuring they perform well under various conditions.',
          'Advanced projects and challenges: Face real-world challenges by designing and building advanced no-code projects that push the boundaries of what’s possible.',
        ],
        status: OfferStatus.ACTIVE,
      },
    },
  },
];
