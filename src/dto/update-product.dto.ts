import { IsNotEmpty, IsString } from "class-validator";

export class UpdateProductDto{
    id: number;
    @IsString({message:'phai la chuoi'})
    @IsNotEmpty({message:' khong dc de trong'})
    name :string;

    @IsString({message:'phai la chuoi'})
    price: string;

    @IsString({message:'phai la chuoi'})
    decription:string;
}