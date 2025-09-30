import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User2{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @Column({unique: true})
    email: string;  

    @Column()
    password:string;

    @Column({
        nullable:true
    })
    referesh_token:string

    @CreateDateColumn()
    createAt:Date;

    @CreateDateColumn()
    updateAt:Date;
}