import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Quiz } from "./quiz.entity";
import { Repository } from "typeorm";

@Injectable()
export class QuizService {

    constructor(
        @InjectRepository(Quiz)
        private quizRepository: Repository<Quiz>
    ) { }

    getAllQuiz() {
        return this.quizRepository.find();
    }

    sendQuiz(data: Partial<Quiz>): Promise<Quiz>
    {
        const quiz = this.quizRepository.create(data);

        try {
            return this.quizRepository.save(quiz); // Guardar el objeto en la base de datos
        } catch (error) {
            throw new Error(`Error al insertar el quiz: ${error.message}`);
        }
    }
}