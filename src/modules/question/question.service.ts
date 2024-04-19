import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Question } from "./question.entity";
import { Repository } from "typeorm";

@Injectable()
export class QuestionService {

    constructor(
        @InjectRepository(Question)
        private readonly _questionRepository: Repository<Question>
    ) { }

    createQuestion(data: Partial<Question>) : Promise<Question> 
    {

        const question = this._questionRepository.create(data);
        try {
            return this._questionRepository.save(question); // Guardar el objeto en la base de datos
        } catch (error) {
            throw new Error(`Error al insertar el question: ${error.message}`);
        }
    }
}