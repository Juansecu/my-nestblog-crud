import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PostsModule } from './posts/posts.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
      database: process.env.DATABASE_NAME,
      entities: [__dirname + '/**/**/*.entity.{ts,js}'],
      dropSchema: true,
      host: process.env.DATABASE_HOST,
      password: process.env.DATABASE_PASSWORD,
      port: parseInt(process.env.DATABASE_PORT),
      synchronize: true,
      type: 'mysql',
      username: process.env.DATABASE_USER
    }),
    PostsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
