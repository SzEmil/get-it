export type CreateUserParams = {
  clerkId: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  photo: string;
};

export type UpdateUserParams = {
  firstName: string;
  lastName: string;
  photo: string;
};
