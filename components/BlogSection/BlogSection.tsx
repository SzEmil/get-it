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
  Flex,
  Title,
} from '@mantine/core';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  createBlogPost,
  deleteBlogPost,
  getAllBlogPosts,
  updateBlogPost,
} from '@/lib/actions/blogPost.actions';
import css from './BlogSection.module.css';
import Image from 'next/image';

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

  const [editingPostId, setEditingPostId] = useState<number | null>(null);
  const [editPostData, setEditPostData] = useState<BlogPost | null>(null);

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

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
  
    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
  
    if (!res.ok) {
      console.error("Błąd przesyłania pliku");
      return;
    }
  
    const data = await res.json();
    setNewPost((prev) => ({ ...prev, img: data.filename }));
  };

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

  // Rozpoczęcie edycji posta
  const startEditingPost = (post: BlogPost) => {
    setEditingPostId(post.id);
    setEditPostData({ ...post });
  };

  // Anulowanie edycji
  const cancelEditing = () => {
    setEditingPostId(null);
    setEditPostData(null);
  };

  // Zapisanie edytowanego posta
  const handleSaveEdit = async () => {
    if (!editPostData) return;

    const updatedPost = await updateBlogPost(
      editPostData.id,
      editPostData.title,
      undefined,
      editPostData.html
    );

    // Konwersja null -> undefined
    const formattedPost: BlogPost = {
      ...updatedPost,
      img: updatedPost.img ?? undefined,
      html: updatedPost.html ?? undefined,
    };

    setPosts(
      posts.map(post => (post.id === editPostData.id ? formattedPost : post))
    );
    setEditingPostId(null);
    setEditPostData(null);
  };

  return (
    <Container mt={50}>
      {/* Formularz dodawania posta */}
      <Card shadow="sm" padding="lg" mb="lg">
        <Input
          placeholder="Tytuł posta"
          value={newPost.title}
          onChange={e => setNewPost({ ...newPost, title: e.target.value })}
          mb="sm"
        />

        <Box>
          <ReactQuill
            value={newPost.html}
            onChange={value => setNewPost({ ...newPost, html: value })}
            style={{ marginBottom: '10px', color: 'black' }}
            className="custom-quill"
          />
        </Box>
        <FileInput
          placeholder="Wybierz zdjęcie"
          accept="image/*"
          onChange={file => {
            if (file) uploadImage(file);
          }}
        />

        {newPost.img && (
          <Image
            src={`/images/blog/${newPost.img}`}
            alt="Podgląd"
            width={300}
            height={200}
          />
        )}

        <Button mt="sm" onClick={handleAddPost}>
          Dodaj Post
        </Button>
      </Card>

      <Title fz={32}>Lista postów</Title>

      {/* Lista postów */}
      <Flex w={'100%'} direction={'column'} gap={20} align={'center'}>
        {posts.map(post => (
          <Card key={post.id} shadow="sm" padding="lg" w={'100%'}>
            {editingPostId === post.id ? (
              <>
                {/* Tryb edycji */}
                <Input
                  value={editPostData?.title || ''}
                  onChange={e =>
                    setEditPostData(prev =>
                      prev ? { ...prev, title: e.target.value } : null
                    )
                  }
                  mb="sm"
                />
                <ReactQuill
                  value={editPostData?.html || ''}
                  onChange={value =>
                    setEditPostData(prev =>
                      prev ? { ...prev, html: value } : null
                    )
                  }
                  style={{ marginBottom: '10px', color: 'black' }}
                />
                <Group mt="md">
                  <Button color="green" onClick={handleSaveEdit}>
                    Zapisz
                  </Button>
                  <Button color="gray" onClick={cancelEditing}>
                    Anuluj
                  </Button>
                </Group>
              </>
            ) : (
              <Box>
                {/* Tryb podglądu */}
                <Text fw={700} size="lg" c={'black'}>
                  {post.title}
                </Text>

                <div dangerouslySetInnerHTML={{ __html: post.html || '' }} />

                {post.img && (
                  <Image
                    width={500}
                    height={300}
                    alt={post.title}
                    src={`/images/blog/${post.img}`}
                    style={{
                      display: 'block',
                      width: '100%',
                      height: 'auto',
                      maxWidth: '700px',
                    }}
                  />
                )}

                <Group mt="md">
                  <Button color="red" onClick={() => handleDeletePost(post.id)}>
                    Usuń
                  </Button>

                  <Button color="blue" onClick={() => startEditingPost(post)}>
                    Edytuj
                  </Button>
                </Group>
              </Box>
            )}
          </Card>
        ))}
      </Flex>
    </Container>
  );
};

export default BlogSection;
