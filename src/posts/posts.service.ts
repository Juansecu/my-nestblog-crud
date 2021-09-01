import { Injectable, NotFoundException } from '@nestjs/common';
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

  async createPost(
    createPostDto: CreatePostDto
  ): Promise<CreatePostDto & PostEntity> {
    return await this._POST_REPOSITORY.save(createPostDto);
  }

  deletePost(postId: number) {}

  async getPosts(): Promise<PostEntity[]> {
    return await this._POST_REPOSITORY.find();
  }

  async getPost(postId: number): Promise<PostEntity> {
    const post = await this._POST_REPOSITORY.findOne(postId);
    if (!post) throw new NotFoundException();
    return post;
  }

  updatePost(editPostDto: EditPostDto, postId: number) {}
}
