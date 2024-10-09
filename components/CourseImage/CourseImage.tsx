import { useAuth } from '@clerk/nextjs';
import Image, { ImageProps } from 'next/image';
import React from 'react';

type CourseImageProps = {
  courseId: string;
  imageName: string;
} & Omit<ImageProps, 'src'>;

export const CourseImage: React.FC<CourseImageProps> = ({
  courseId,
  imageName,
  alt = 'Course Image',
  ...rest
}) => {
  const { userId } = useAuth();

  if (!userId) {
    return null;
  }
 // const imageUrl = `/api/images/${courseId}/${imageName}`;
 const imageUrl = `/assets/coursesAssets/${courseId}/${imageName}`
  return <Image src={imageUrl} alt={alt} {...rest} />;
};
