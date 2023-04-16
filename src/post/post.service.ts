// src/post/post.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PostEntity } from './post.entity';
import { Post } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async createPost(
    authorId: number,
    post: Partial<PostEntity>,
  ): Promise<PostEntity> {
    return this.prisma.post.create({
      data: { ...post, author: { connect: { id: authorId } } } as Post,
    });
  }

  async findAllPosts(): Promise<PostEntity[]> {
    return this.prisma.post.findMany({
      include: { author: true },
    });
  }

  async findPostById(id: number): Promise<PostEntity | null> {
    return this.prisma.post.findUnique({
      where: { id },
      include: { author: true },
    });
  }

  async updatePost(
    id: number,
    postData: Partial<PostEntity>,
  ): Promise<PostEntity> {
    return this.prisma.post.update({
      where: { id },
      data: postData as Post,
    });
  }

  async deletePost(id: number): Promise<PostEntity> {
    return this.prisma.post.delete({ where: { id } });
  }
}
