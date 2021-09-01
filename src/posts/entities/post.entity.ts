import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn
} from 'typeorm';

import { EPostCategory } from '../typings/enums/post-category.enum';

@Entity('Posts')
export class PostEntity {
  @PrimaryGeneratedColumn('increment') postId: number;
  @Column({ type: 'varchar', length: 255, nullable: false }) title!: string;
  @Column({ type: 'text', nullable: false }) content!: string;
  @Column({ type: 'text', nullable: false }) slug!: string;
  @Column({ type: 'varchar', length: 255 }) excerpt?: string;
  @Column({ type: 'simple-array' }) tags?: string[];
  @Column({
    type: 'varchar',
    length: 100,
    nullable: false
  })
  category!: EPostCategory;
  @Column({ type: 'bool', default: true }) status?: boolean;
  @CreateDateColumn({ type: 'timestamp' }) createdAt: Date;
}
