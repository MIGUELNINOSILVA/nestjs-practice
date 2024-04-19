import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('questions')
export class Question {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar'
    })
    question: string;

}