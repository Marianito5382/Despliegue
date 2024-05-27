import {BeforeInsert, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from "@nestjs/swagger";

@Entity('projects')
class Project {
    @PrimaryGeneratedColumn()
    @Column({ primary: true, generated: true })
    id: number;

    @Column({type: 'varchar'})
    titulo: string;

    @Column({type: 'varchar'})
    cuerpo: string
}

export default Project;