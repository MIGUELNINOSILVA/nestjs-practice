import { Body, Controller, Post } from "@nestjs/common";
import { CreateQuestionDto } from "./dto/CreateQuestion.dto";
import { QuestionService } from "./question.service";

@Controller('question')
export class QuestionController{

    constructor(private readonly _questionService:QuestionService){}

    @Post()
    saveQuestion(
        @Body()data:CreateQuestionDto
    ){
        return this._questionService.createQuestion(data);
    }
}