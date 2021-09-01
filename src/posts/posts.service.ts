import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

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

  async deletePost(postId: number): Promise<DeleteResult> {
    const post = await this._POST_REPOSITORY.findOne(postId);
    if (!post) throw new NotFoundException('Post does not exist');
    return await this._POST_REPOSITORY.delete(postId);
  }

  async getPosts(): Promise<PostEntity[]> {
    return await this._POST_REPOSITORY.find();
  }

  async getPost(postId: number): Promise<PostEntity> {
    const post = await this._POST_REPOSITORY.findOne(postId);
    if (!post) throw new NotFoundException(`Post does not exist`);
    return post;
  }

  async updatePost(
    editPostDto: EditPostDto,
    postId: number
  ): Promise<UpdateResult> {
    const post = await this._POST_REPOSITORY.findOne(postId);
    if (!post) throw new NotFoundException('Post does not exist');
    return await this._POST_REPOSITORY.update(postId, editPostDto);
  }
}
