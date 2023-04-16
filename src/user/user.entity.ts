// src/user/user.entity.ts
import { PostEntity as Post } from '../post/post.entity';
import { User } from '@prisma/client';
export class UserEntity{
  id: number;
  email: string;
  password: string;
  name: string;
  posts?: Post[];
}
