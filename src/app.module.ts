import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostService } from './post/post.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PostService],
})
export class AppModule {}
