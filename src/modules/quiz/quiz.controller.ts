import { Body, Controller, Get, HttpCode, Post } from "@nestjs/common";
import { QuizService } from "./quiz.service";
import { CreateQuizDto } from "./dtos/CreateQuiz.dto";

@Controller('quiz')
export class QuizController {

    constructor(private readonly _quizService:QuizService){}

    @Get('/')
    @HttpCode(200)
    getAllQuiz() {
        return this._quizService.getAllQuiz();
    }

    @Post('')
    @HttpCode(201)
    createQuiz(
        @Body() quizData: CreateQuizDto
    ){
        return this._quizService.sendQuiz(quizData);
    }
}