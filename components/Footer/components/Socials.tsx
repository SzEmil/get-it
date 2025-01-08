import { Typography } from '@/components/Typography/Typohraphy';
import { SocialLinks } from '@/constants/endpoints';
import { Flex } from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

type SocialsProps = {
  lang: string;
};

export const Socials = ({ lang }: SocialsProps) => {
  return (
    <Flex direction={'column'} gap={20}>
      <Typography fz={26} fw={500}>
        Znajdź nas na
      </Typography>
      <Flex gap={20}>
        <Link href={SocialLinks.facebook}>
          <FaFacebookF size={24} />
        </Link>
        {/* <Link href={SocialLinks.tiktok}>
          <SiTiktok size={24} />
        </Link> */}
      </Flex>
    </Flex>
  );
};
