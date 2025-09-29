import { ArgumentMetadata, BadRequestException, Body, Controller, Delete, Get, Inject, Param, Patch, PipeTransform, Post, Req, UsePipes } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from '../../dto/create-product.dto';
import { REQUEST } from '@nestjs/core';
import { UpdateProductDto } from 'src/dto/update-product.dto';


export class ValidationPipe implements PipeTransform{
  constructor(@Inject(REQUEST) private readonly request: Request){}
  transform(value: any, metadata: ArgumentMetadata) {
    const id= this.request['params'].id;
    const {name}=value;
    if(+id=== 2){
      throw new BadRequestException("ten la 1 khong hop le ");// co the xu ly cac dieu kien o phan nay 
    }
    return value;
  }
}

@Controller('products')
// @UsePipes(new ValidationPipe({transform: true}))// thacy cho ValidationPipe() o tai ham
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get(':id')
  findOne(@Param('id') id : number){
    return this.productsService.find(id);
  }

  @Get()
  findAll(@Req() req :Request & {user: string}){
    console.log(req.user);
    return this.productsService.findAll();
  }

  @Post()
  createProd(@Body() prodData: CreateProductDto){
    return this.productsService.create(prodData);
  }
  @Patch(':id')
  updateProd(@Body(ValidationPipe)prodData:UpdateProductDto, @Param('id') id : number){
    return this.productsService.update(id,prodData);
  }

  @Delete(':id')
  deleteProd(@Param('id') id :number){
    return this.productsService.delete(id);
  }

}
