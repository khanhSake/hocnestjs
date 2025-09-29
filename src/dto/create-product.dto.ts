import { IsNotEmpty, IsString, Validate, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";


    @ValidatorConstraint()
    export class isUpperCase implements ValidatorConstraintInterface{
        async validate(text: string, validationArguments: ValidationArguments) {
            return text===text.toUpperCase();
        }
    }

 export class CreateProductDto{
    @IsString({message:'phai la chuoi'})
    @IsNotEmpty({message:' khong dc de trong'})
    @Validate(isUpperCase,{message:'Phai viet hoa toan bo'})
    name :string;

    @IsString({message:'phai la chuoi'})
    price: string;

    @IsString({message:'phai la chuoi'})
    decription:string
}