'use client';

import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  FileInput,
  Grid,
  Group,
  Input,
  Text,
  Container,
  Box,
} from '@mantine/core';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  createBlogPost,
  deleteBlogPost,
  getAllBlogPosts,
  updateBlogPost,
} from '@/lib/actions/blogPost.actions';

interface BlogPost {
  id: number;
  title: string;
  html?: string;
  img?: string;
}

const BlogSection = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [newPost, setNewPost] = useState<Omit<BlogPost, 'id'>>({
    title: '',
    html: '',
    img: undefined,
  });

  useEffect(() => {
    async function fetchPosts() {
      const data = await getAllBlogPosts();

      // Konwersja null -> undefined
      const formattedData: BlogPost[] = data.map(post => ({
        ...post,
        img: post.img ?? undefined,
        html: post.html ?? undefined,
      }));

      setPosts(formattedData);
    }
    fetchPosts();
  }, []);

  // Tworzenie posta i zapisywanie do bazy
  const handleAddPost = async () => {
    if (!newPost.title.trim()) return;

    const createdPost = await createBlogPost(
      newPost.title,
      newPost.img,
      newPost.html
    );

    // Konwersja null -> undefined
    const formattedPost: BlogPost = {
      ...createdPost,
      img: createdPost.img ?? undefined,
      html: createdPost.html ?? undefined,
    };

    setPosts(prev => [formattedPost, ...prev]);
    setNewPost({ title: '', html: '', img: undefined });
  };

  // Usuwanie posta
  const handleDeletePost = async (id: number) => {
    await deleteBlogPost(id);
    setPosts(posts.filter(post => post.id !== id));
  };

  // Aktualizacja posta
  const handleUpdatePost = async (id: number) => {
    const updatedTitle = prompt('Nowy tytuł') || '';
    const updatedHtml = prompt('Nowa treść') || '';
    if (!updatedTitle) return;

    const updatedPost = await updateBlogPost(
      id,
      updatedTitle,
      undefined,
      updatedHtml
    );

    // Konwersja null -> undefined
    const formattedPost: BlogPost = {
      ...updatedPost,
      img: updatedPost.img ?? undefined,
      html: updatedPost.html ?? undefined,
    };

    setPosts(posts.map(post => (post.id === id ? formattedPost : post)));
  };

  return (
    <Container>
      <h2>Blog</h2>

      {/* Formularz dodawania posta */}
      <Card shadow="sm" padding="lg" mb="lg">
        <Input
          placeholder="Tytuł posta"
          value={newPost.title}
          onChange={e => setNewPost({ ...newPost, title: e.target.value })}
          mb="sm"
        />

        <Box c={'black'} color={'black'}>
          <ReactQuill
            value={newPost.html}
            onChange={value => setNewPost({ ...newPost, html: value })}
            style={{ marginBottom: '10px', color: 'black' }}
          />
        </Box>
        <FileInput
          placeholder="Wybierz zdjęcie"
          accept="image/*"
          onChange={file => {
            if (file) {
              const reader = new FileReader();
              reader.onload = e => {
                setNewPost({ ...newPost, img: e.target?.result as string });
              };
              reader.readAsDataURL(file);
            }
          }}
        />

        <Button mt="sm" onClick={handleAddPost}>
          Dodaj Post
        </Button>
      </Card>

      {/* Lista postów */}
      <Grid>
        {posts.map(post => (
          <Grid.Col key={post.id} span={12}>
            <Card shadow="sm" padding="lg">
              <Text fw={700} size="lg">
                {post.title}
              </Text>

              {post.img && <img src={post.img} alt="Post" width="100%" />}

              <div dangerouslySetInnerHTML={{ __html: post.html || '' }} />

              <Group mt="md">
                <Button color="red" onClick={() => handleDeletePost(post.id)}>
                  Usuń
                </Button>

                <Button color="blue" onClick={() => handleUpdatePost(post.id)}>
                  Edytuj
                </Button>
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default BlogSection;
