// src/post/post.entity.ts
import { UserEntity } from '../user/user.entity';

export class PostEntity {
  id: number;
  title: string;
  content: string;
  authorId: number;
  author?: UserEntity;
  createdAt: Date;
}
