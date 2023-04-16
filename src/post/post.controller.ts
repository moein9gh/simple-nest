// src/post/post.controller.ts
import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
    UseGuards,
    Req,
  } from '@nestjs/common';
  import { PostService } from './post.service';
  import { PostEntity } from './post.entity';
  import { JwtAuthGuard } from '../auth/jwt-auth.guard';
  import { RequestWithUser } from '../auth/request-with-user.interface';
  
  @Controller('posts')
  export class PostController {
    constructor(private readonly postService: PostService) {}
  
    @UseGuards(JwtAuthGuard)
    @Post()
    async createPost(
      @Req() request: RequestWithUser,
      @Body() post: Partial<PostEntity>,
    ): Promise<PostEntity> {
      const authorId = request.user.id;
      return this.postService.createPost(authorId, post);
    }
  
    @Get()
    async findAllPosts(): Promise<PostEntity[]> {
      return this.postService.findAllPosts();
    }
  
    @Get(':id')
    async findPostById(@Param('id') id: number): Promise<PostEntity> {
      return this.postService.findPostById(id);
    }
  
    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async updatePost(
      @Param('id') id: number,
      @Body() postData: Partial<PostEntity>,
    ): Promise<PostEntity> {
      return this.postService.updatePost(id, postData);
    }
  
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async deletePost(@Param('id') id: number): Promise<PostEntity> {
      return this.postService.deletePost(id);
    }
  }
  