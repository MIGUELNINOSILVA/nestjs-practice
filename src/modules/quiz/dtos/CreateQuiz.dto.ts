import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class CreateQuizDto {
    @IsNotEmpty({message: 'The quiz should have a title'})
    @Length(3, 255)
    title: string;
  
    @IsNotEmpty({message: 'The quiz should have a description'})
    description: string;
  }