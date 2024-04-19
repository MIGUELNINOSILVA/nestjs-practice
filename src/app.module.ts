import { Module } from '@nestjs/common';
import { QuizModule } from './modules/quiz/quiz.module';
import { ConfigModule } from '@nestjs/config';
import { typeOrmConfig } from './config/type.orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionModule } from './modules/question/question.module';

@Module({
  imports: [
    QuizModule,
    QuestionModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmConfig)
  ],
})
export class AppModule {}