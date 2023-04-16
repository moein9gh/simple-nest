// src/user/user.controller.ts
import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    UseGuards,
    Req,
  } from '@nestjs/common';
  import { UserService } from './user.service';
  import { UserEntity } from './user.entity';
  import { JwtAuthGuard } from '../auth/jwt-auth.guard';
  import { RequestWithUser } from '../auth/request-with-user.interface';
import { User } from '@prisma/client';
  
  @Controller('users')
  export class UserController {
    constructor(private readonly userService: UserService) {}
  
    @Post()
    async createUser(@Body() user: Partial<User>): Promise<User> {
      return this.userService.createUser(user);
    }
  
    @Get(':id')
    async getUserById(@Param('id') id: number): Promise<User> {
      return this.userService.findUserById(id);
    }
  
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async getProfile(@Req() request: RequestWithUser): Promise<User> {
      const { id } = request.user;
      return this.userService.findUserById(id);
    }
  
    @UseGuards(JwtAuthGuard)
    @Put('profile')
    async updateUser(
      @Req() request: RequestWithUser,
      @Body() userData: Partial<User>,
    ): Promise<User> {
      const { id } = request.user;
      return this.userService.updateUser(id, userData);
    }
  }
  