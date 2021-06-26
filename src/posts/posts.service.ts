import { Injectable } from '@nestjs/common';

import { CreatePostDto, EditPostDto } from './dtos';

@Injectable()
export class PostsService {
  createPost(createPostDto: CreatePostDto) {}

  deletePost(postId: number) {}

  getPosts() {}

  getPost(postId: number) {}

  updatePost(editPostDto: EditPostDto, postId: number) {}
}
