import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Quiz {
    @PrimaryGeneratedColumn({
        comment: 'The quiz unique identifier'
    })
    id: number;

    @Column({
        type: 'varchar'
    })
    title: string;

    @Column({
        type: 'text'
    })
    description: string;

    
    isActive:boolean;
}