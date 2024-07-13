import { Text, TextProps } from '@mantine/core';

type TypohraphyProps = { children: React.ReactNode } & TextProps;

export const Typohraphy = ({ children, ...rest }: TypohraphyProps) => {
  return (
    <Text c={'grayscaleWhite.0'} {...rest}>
      {children}
    </Text>
  );
};
