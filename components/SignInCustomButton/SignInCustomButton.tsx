import { SignInButton } from '@clerk/nextjs';
import { Button, ButtonProps } from '@mantine/core';
import React from 'react';

type SignInCustomButtonProps = {
  lang: string;
} & ButtonProps;

export const SignInCustomButton = ({
  lang,
  ...rest
}: SignInCustomButtonProps) => {
  return (
    <SignInButton>
      <Button
        style={{ fontSize: '1rem' }}
        variant="filled"
        size="lg"
        radius={30}
        color="themePrimary.0"
        {...rest}
      >
        Dołącz
      </Button>
    </SignInButton>
  );
};
