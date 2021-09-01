import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Body,
  Param,
  ParseIntPipe
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreatePostDto, EditPostDto } from './dtos';

import { PostsService } from './posts.service';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Delete(':postId')
  deletePost(@Param('postId', ParseIntPipe) postId: number) {
    this.postsService.deletePost(postId);
  }

  @Get()
  getPosts() {
    return this.postsService.getPosts();
  }

  @Get(':postId')
  getPost(@Param('postId', ParseIntPipe) postId: number) {
    return this.postsService.getPost(postId);
  }

  @Post()
  createPost(@Body() createPostDto: CreatePostDto) {
    return this.postsService.createPost(createPostDto);
  }

  @Put(':postId')
  updatePost(
    @Body() editPostDto: EditPostDto,
    @Param('postId', ParseIntPipe) postId: number
  ) {
    return this.postsService.updatePost(editPostDto, postId);
  }
}
