import { Metadata, ResolvingMetadata } from 'next';

const defaultMetadata: Metadata = {
  title: 'ToKnowAI',
  description:
    'ToKnowAI to platforma edukacyjna oferująca kursy online z zakresu sztucznej inteligencji. Naucz się korzystać z FlowiseAI i LangChain, aby budować zaawansowane modele językowe oraz automatyzować procesy biznesowe. Odkryj praktyczne zastosowania AI w codziennej pracy.',
    metadataBase: new URL('https://toknowai.pl'),
    keywords:
    'AI, sztuczna inteligencja, FlowiseAI, LangChain, kursy AI, modele językowe, automatyzacja, przetwarzanie języka naturalnego, edukacja AI, kursy online, deep learning, machine learning, GPT, LLM, chatboty, uczenie maszynowe',
  authors: [{ name: 'Karol Sapiołko Narevka' }],
  openGraph: {
    title: 'ToKnowAI - Kursy online',
    description:
      'Dołącz do kursów AI na ToKnowAI i zdobądź praktyczne umiejętności w pracy z FlowiseAI i LangChain. Twórz zaawansowane modele językowe oraz automatyzuj procesy za pomocą sztucznej inteligencji.',
    images: ['url_do_obrazka.jpg'],
    url: 'https://toknowai.pl/',
    siteName: 'ToKnowAI',
  },
};

const offerPageMetadata: Metadata = {
  title: `${defaultMetadata.title} | Oferta`,
};

export const SEO = {
  defaultMetadata,
  offerPageMetadata,
};
