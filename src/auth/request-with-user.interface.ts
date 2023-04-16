// src/auth/request-with-user.interface.ts
import { Request } from 'express';
import { UserEntity } from '../user/user.entity';

export interface RequestWithUser extends Request {
  user: UserEntity;
}
