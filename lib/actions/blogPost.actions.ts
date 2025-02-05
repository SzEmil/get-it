"use server"

import prisma from '../../prisma/client';
import * as DB from '@prisma/client';
import { FormatResponse } from './response';

// Pobranie wszystkich postów
export async function getAllBlogPosts(isPublic?: boolean) {
    return await prisma.blogPost.findMany({
      where:{isPublic},
      orderBy: { createdAt: "desc" },
    });
  }
  
  // Pobranie pojedynczego postu po ID
  export async function getBlogPostById(id: number) {
    return await prisma.blogPost.findUnique({
      where: { id },
    });
  }
  
  // Tworzenie nowego posta
  export async function createBlogPost(title: string,isPublic: boolean, img?: string, html?: string, ) {
    return await prisma.blogPost.create({
      data: {
        title,
        img,
        html,
        isPublic
      },
    });
  }
  
  // Aktualizacja posta po ID
  export async function updateBlogPost(id: number,isPublic: boolean, title?: string, img?: string, html?: string) {
    return await prisma.blogPost.update({
      where: { id },
      data: {
        title,
        img,
        html,
        isPublic,
        updatedAt: new Date(),
      },
    });
  }
  
  // Usuwanie posta po ID
  export async function deleteBlogPost(id: number) {
    return await prisma.blogPost.delete({
      where: { id },
    });
  }