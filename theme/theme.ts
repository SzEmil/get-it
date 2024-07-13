import { createTheme, rem } from '@mantine/core';
import { colors } from './colors';
import { components } from './components';

export const theme = createTheme({
  //  fontFamily: "General Sans, sans-serif",
  cursorType: 'pointer',
  headings: {
    fontWeight: '600',
    sizes: {
      h1: { fontSize: rem(48) },
      h2: { fontSize: rem(36) },
      h3: { fontSize: rem(32) },
      h4: { fontSize: rem(24) },
      h5: { fontSize: rem(18) },
      h6: { fontSize: rem(16) },
    },
  },
  primaryColor: 'grayscaleWhite',
  //components,
  colors,
  shadows: {
    sm: '0px 1px 4px 0px rgba(0, 0, 0, 0.12)',
    md: '0px 2px 8px 0px rgba(0, 0, 0, 0.12)',
    lg: '0px 2px 16px 0px rgba(0, 0, 0, 0.16)',
  },
});
