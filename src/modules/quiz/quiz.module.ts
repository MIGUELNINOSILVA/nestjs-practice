import { Module } from "@nestjs/common";
import { QuizController } from "./quiz.controller";
import { QuizService } from "./quiz.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from "src/config/type.orm.config";
import { Quiz } from "./quiz.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([Quiz])
    ],
    controllers: [QuizController],
    providers: [QuizService]
})
export class QuizModule { }