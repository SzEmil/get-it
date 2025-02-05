'use client';

import React, { useEffect, useState } from 'react';
import {
  Container,
  Card,
  Title,
  Text,
  Image,
  Flex,
  Loader,
} from '@mantine/core';
import { getAllBlogPosts } from '@/lib/actions/blogPost.actions';
import dayjs from 'dayjs';
import { BlogPost } from '@prisma/client';

const PublicBlogSection = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getAllBlogPosts(true);
        setPosts(data ?? []);
      } catch (error) {
        console.error('Błąd pobierania postów:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <Container size="md" mt={30}>

      {isLoading ? (
        <Flex justify="center">
          <Loader size="lg" />
        </Flex>
      ) : (
        <Flex direction="column" gap="lg">
          {posts.length > 0 ? (
            posts.map(post => (
              <Card key={post.id} shadow="sm" padding="lg" radius="md">
                <Title order={2}>{post.title}</Title>
                <Text size="sm" c="dimmed">
                  {dayjs(post.createdAt).format('DD.MM.YYYY')}
                </Text>

                <div
                  dangerouslySetInnerHTML={{ __html: post.html || '' }}
                  style={{ marginTop: 10 }}
                />

                {post.img && (
                  <Image
                    src={`/images/blog/${post.img}`}
                    alt={post.title}
                    height={300}
                    radius="md"
                    fit="cover"
                    mt="md"
                  />
                )}
              </Card>
            ))
          ) : (
            <Text ta="center" color="dimmed">
              Brak postów do wyświetlenia.
            </Text>
          )}
        </Flex>
      )}
    </Container>
  );
};

export default PublicBlogSection;
