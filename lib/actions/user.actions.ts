'use server';

import { revalidatePath } from 'next/cache';
import prisma from '@/prisma/client';
import { redirect } from 'next/navigation';
import { CreateUserParams, UpdateUserParams } from '@/types/user.types';
import { ROUTES } from '@/constants';
import * as DB from '@prisma/client';
import { FormatResponse } from './response';

export const createUser = async (user: CreateUserParams) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        firstName: user.firstName ?? '',
        lastName: user.lastName ?? '',
        clerkId: user.clerkId,
        email: user.email,
        photo: user.photo,
        planId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    return JSON.parse(JSON.stringify(newUser));
  } catch (e) {
    console.log(e);
  }
};

export const getCurrentUser = async (clerkId: string) => {
  try {
    if (!clerkId) {
      console.error(`User with id ${clerkId} is not logged in!`);
      redirect(ROUTES.HOME);
    }
    const user = await prisma.user.findUnique({
      where: { clerkId: clerkId },
    });

    if (!user) throw new Error(`User with id: ${clerkId} not found`);
    return JSON.parse(JSON.stringify(user));
  } catch (e) {
    console.log(e);
  }
};

export const getUserClerkId = async (userId: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (!user) throw new Error(`User with id: ${userId} not found`);
    return JSON.parse(JSON.stringify(user));
  } catch (e) {
    console.log(e);
  }
};


export const getUserById = async (userId: number) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) throw new Error(`User with id: ${userId} not found`);
    return JSON.parse(JSON.stringify(user));
  } catch (e) {
    console.log(e);
  }
};

export const getUserCourses = FormatResponse(async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
    include: {
      courses: true,
    },
  });

  if (!user) {
    throw new Error('User not found');
  }

  return user;
});

export const updateUser = async (clerkId: string, user: UpdateUserParams) => {
  try {
    const updatedUser = await prisma.user.update({
      where: { clerkId },
      data: user,
    });

    if (!updatedUser) throw new Error(`Failed during update user`);
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (e) {
    console.log(e);
  }
};

export const deleteUser = async (clerkId: string) => {
  try {
    const userToDelete = await prisma.user.findUnique({
      where: { clerkId },
    });
    if (!userToDelete) throw new Error(`User with id: ${clerkId} not found`);

    const deletedUser = await prisma.user.delete({
      where: { id: userToDelete.id },
    });
    revalidatePath(ROUTES.HOME);

    if (!deletedUser) throw new Error(`Failed during delete user`);
    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (e) {
    console.log(e);
  }
};
