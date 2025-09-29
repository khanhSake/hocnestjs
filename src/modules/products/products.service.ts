import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from 'src/dto/create-product.dto';
import { Product } from 'src/entities/Product';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
     constructor(
            @InjectRepository(Product)
            private readonly prodRepository: Repository<Product>,
        ){}

    async find(id : number){
        const proD= await this.prodRepository.findOneBy({id});
        if(!proD){
            throw new HttpException('Ko tim thay san pham', HttpStatus.NOT_FOUND);
        }
    }

    findAll(){
        return this.prodRepository.find();
    }

    create(prodData: CreateProductDto): Promise<Product>{
        console.log(prodData);
        
        const product=this.prodRepository.create(prodData);
        return this.prodRepository.save(product);
    }
    async update(id:number, prodData:Partial<Product>){
        prodData.updateAt=new Date();
        await this.prodRepository.update(id,prodData);
        return this.prodRepository.findOneBy({id});
    }
    async delete(id: number){
        const proD= await this.prodRepository.findOneBy({id});
        if( !proD){
            throw new HttpException('Ko tim thay san pham', HttpStatus.NOT_FOUND);
        }
        await this.prodRepository.delete(id);
        return proD;

    }
}
