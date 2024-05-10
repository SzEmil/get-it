import { english } from './langugages/eng';
import { polish } from './langugages/pl';
import { ContentSchema } from './schema';

export const dictionary: Record<string, ContentSchema> = {
  en: english,

  pl: polish,
};
