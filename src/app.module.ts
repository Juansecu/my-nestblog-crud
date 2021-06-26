import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PostsModule } from './posts/posts.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'myblog_user',
      password: 'myblog_password',
      database: 'myblog_db',
      entities: [__dirname + './**/**/*.entity.{ts,js}'],
      autoLoadEntities: true,
      synchronize: true
    }),
    PostsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
