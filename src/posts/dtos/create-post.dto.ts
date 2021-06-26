import { IsArray, IsBoolean, IsEnum, IsString } from 'class-validator';

import { EPostCategory } from '../typings/enums/post-category.enum';

import { enumToString } from 'src/helpers/enum-to-string.helper';

export class CreatePostDto {
  @IsString() title: string;
  @IsString() content: string;
  @IsString() slug: string;
  @IsString() excerpt: string;
  @IsArray() @IsString({ each: true }) tags: string[];
  @IsEnum(EPostCategory, {
    message: `Invalid Option! Category value must be one of the following:
      ${enumToString(EPostCategory)}`
  })
  category: EPostCategory;
  @IsBoolean() status: boolean;
}
