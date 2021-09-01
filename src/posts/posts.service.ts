import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PostEntity } from './entities/post.entity';

import { CreatePostDto, EditPostDto } from './dtos';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly _POST_REPOSITORY: Repository<PostEntity>
  ) {}

  createPost(createPostDto: CreatePostDto) {}

  deletePost(postId: number) {}

  async getPosts(): Promise<PostEntity[]> {
    return await this._POST_REPOSITORY.find();
  }

  getPost(postId: number) {
    return this._POST_REPOSITORY.findOne(postId);
  }

  updatePost(editPostDto: EditPostDto, postId: number) {}
}
