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
    description: 'Opis kursu drugiego',
    images: ['image3.png', 'image4.png'],
    language: 'pl',
    status: CourseStatus.ACTIVE,
    videos: {
      create: [
        {
          id: 3,
          courseId: 2,
          link: 'https://example.com/video3',
          description: 'Opis dla wideo trzeciego',
          image: 'video3.png',
        },
        {
          id: 4,
          courseId: 2,
          link: 'https://example.com/video4',
          description: 'Opis dla wideo czwartego',
          image: 'video4.png',
        },
      ],
    },
    Offer: {
      create: {
        id: 2,
        courseId: 2,
        name: 'Oferta dla Kursu Drugiego',
        description: 'Opis oferty dla kursu drugiego',
        images: ['offer3.png', 'offer4.png'],
        price: 149.99,
        currency: "PLN",
        language: 'pl',
        tags: ["ai", "langChain"],
        goals: [
          'Zaawansowane wykorzystanie narzędzi: Rozbuduj swoją istniejącą wiedzę i odkryj zaawansowane funkcje LangChain i Flowise, umożliwiające tworzenie złożonych aplikacji z finezją.',
          'Niestandardowe komponenty i logika: Zanurz się w dziedzinie niestandardowych komponentów i skomplikowanej logiki, rozszerzając możliwości aplikacji poza tym, co zostało omówione w kursie podstawowym.',
          'Integracja danych: Opanuj sztukę integrowania danych z różnych źródeł, umożliwiając dynamiczną interakcję Twoich aplikacji z zewnętrznymi bazami danych, interfejsami API i nie tylko.',
          'Optymalizacja i tuning wydajności: Udoskonal swoje aplikacje pod kątem prędkości, reaktywności i efektywności, zapewniając, że działają doskonale w różnych warunkach.',
          'Zaawansowane projekty i wyzwania: Staw czoła skomplikowanym wyzwaniom rzeczywistego świata, projektując i budując zaawansowane projekty bez kodu, które przesuwają granice tego, co jest możliwe.',
        ],
        status: OfferStatus.ACTIVE,
      },
    },
  },
];
