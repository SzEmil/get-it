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
  Loader,
  Center,
  Switch,
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
  isPublic: boolean;
}

const BlogSection = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [newPost, setNewPost] = useState<Omit<BlogPost, 'id'>>({
    title: '',
    html: '',
    img: undefined,
    isPublic: false,
  });

  const [editingPostId, setEditingPostId] = useState<number | null>(null);
  const [editPostData, setEditPostData] = useState<BlogPost | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const [isLoadingFetch, setIsLoadingFetch] = useState(true);
  const [isLoadingAdd, setIsLoadingAdd] = useState(false);
  const [isLoadingEdit, setIsLoadingEdit] = useState(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState<number | null>(null);

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
    try {
      setIsLoadingFetch(true);
      fetchPosts();
    } finally {
      setIsLoadingFetch(false);
    }
  }, []);

  // Tworzenie posta i zapisywanie do bazy
  const handleAddPost = async () => {
    if (!newPost.title.trim()) return;

    try {
      setIsLoadingAdd(true);
      let uploadedImageFilename = undefined;

      // Jeśli użytkownik wybrał plik, wyślij go do API
      if (file) {
        const formData = new FormData();
        formData.append('file', file);

        const res = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (!res.ok) {
          console.error('Błąd przesyłania pliku');
          return;
        }

        const data = await res.json();
        uploadedImageFilename = data.filename;
      }

      // Teraz tworzymy post z linkiem do obrazka
      const createdPost = await createBlogPost(
        newPost.title,
        newPost.isPublic,
        uploadedImageFilename, // Przekazujemy nazwę pliku do bazy
        newPost.html
      );

      const formattedPost: BlogPost = {
        ...createdPost,
        img: createdPost.img ?? undefined,
        html: createdPost.html ?? undefined,
      };

      setPosts(prev => [formattedPost, ...prev]);

      // Resetujemy stan
      setNewPost({ title: '', html: '', img: undefined, isPublic: false });
      setFile(null);
    } finally {
      setIsLoadingAdd(false);
    }
  };

  // Usuwanie posta
  const handleDeletePost = async (id: number) => {
    try {
      setIsLoadingDelete(id);
      const postToDelete = posts.find(post => post.id === id);

      if (postToDelete?.img) {
        await fetch('/api/upload', {
          method: 'DELETE',
          body: JSON.stringify({ filename: postToDelete.img }),
        });
      }

      await deleteBlogPost(id);
      setPosts(posts.filter(post => post.id !== id));
    } finally {
      setIsLoadingDelete(null);
    }
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

    try {
      setIsLoadingEdit(true);
      let uploadedImageFilename = editPostData.img;

      // Jeśli użytkownik wybrał nowe zdjęcie, wysyłamy je
      if (file) {
        const formData = new FormData();
        formData.append('file', file);

        const res = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (!res.ok) {
          console.error('Błąd przesyłania pliku');
          return;
        }

        const data = await res.json();
        uploadedImageFilename = data.filename;

        // Usuwamy stare zdjęcie, jeśli istnieje
        if (editPostData.img) {
          await fetch('/api/upload', {
            method: 'DELETE',
            body: JSON.stringify({ filename: editPostData.img }),
          });
        }
      }

      const updatedPost = await updateBlogPost(
        editPostData.id,
        editPostData.isPublic,
        editPostData.title,
        uploadedImageFilename, // Przekazujemy nowe zdjęcie lub pozostawiamy stare
        editPostData.html
      );

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
      setFile(null);
    } finally {
      setIsLoadingEdit(false);
    }
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
          onChange={file => setFile(file)}
        />

        <Switch
          mt={5}
          label="Publiczny post"
          checked={newPost.isPublic}
          onChange={event =>
            setNewPost(prev => ({
              ...prev,
              isPublic: event.target.checked ?? false,
            }))
          }
        />

        <Button mt="sm" onClick={handleAddPost} disabled={isLoadingAdd}>
          {isLoadingAdd ? <Loader size={20} /> : 'Dodaj Post'}
        </Button>
      </Card>

      <Title fz={32}>Lista postów</Title>

      {/* Lista postów */}

      {isLoadingFetch ? (
        <Flex w={'100%'} justify="center">
          <Loader />
        </Flex>
      ) : (
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

                  <Switch
                    label="Publiczny post"
                    checked={editPostData?.isPublic || false}
                    onChange={event =>
                      setEditPostData(prev =>
                        prev
                          ? { ...prev, isPublic: event.target.checked ?? false }
                          : null
                      )
                    }
                  />

                  <Group mt="md">
                    <Button
                      color="green"
                      onClick={handleSaveEdit}
                      disabled={isLoadingEdit}
                    >
                      {isLoadingEdit ? <Loader size={20} /> : 'Zapisz'}
                    </Button>
                    <Button color="gray" onClick={cancelEditing}>
                      Anuluj
                    </Button>
                  </Group>
                </>
              ) : (
                <Box>
                  {/* Tryb podglądu */}
                  <Flex direction={'row'} w={'100%'} justify={'space-between'}>
                    {' '}
                    <Text fw={700} size="lg" c={'black'}>
                      {post.title}
                    </Text>
                    <Text fw={600} size="md" c={'black'}>
                      {post.isPublic ? 'publiczny' : 'niepubliczny'}
                    </Text>
                  </Flex>

                  <div dangerouslySetInnerHTML={{ __html: post.html || '' }} />

                  {post.img && (
                    <Center>
                      {' '}
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
                      />{' '}
                    </Center>
                  )}

                  <Group mt="md">
                    <Button
                      color="red"
                      onClick={() => handleDeletePost(post.id)}
                      disabled={isLoadingDelete === post.id}
                    >
                      {isLoadingDelete === post.id ? (
                        <Loader size={20} />
                      ) : (
                        'Usuń'
                      )}
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
      )}
    </Container>
  );
};

export default BlogSection;
