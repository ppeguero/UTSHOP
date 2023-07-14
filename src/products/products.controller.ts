import { Controller, Post, Body, Get, Param, ParseIntPipe, Put, Delete } from '@nestjs/common';
import { CrearProductoDto } from './Dto/create-product.dto';
import { ProductsService } from './products.service';
import { get } from 'https'
import { Product } from './products.entity';
import { UpdateProductoDto } from './Dto/update-user.dto';

@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService){

    }

    //Método para crear un nuevo producto
    @Post()
    createProduct(@Body() newProduct : CrearProductoDto){
        console.log(newProduct)
        return this.productsService.CreateProduct(newProduct)
    }

    //Método para obtener la lista completa de los productos
    @Get()
    getProducts() :Promise<Product[]>{
        return this.productsService.getProducts();
    }

    //Método para obtener solo a un producto por ID
    @Get(':id')
    getProduct(@Param ('id', ParseIntPipe) id:number) : Promise<Product>{
        return this.productsService.getProduct(id);
    }

    //Método para actualizar los datos de producto mediante ID y el cuerpo de los nuevos registros

    @Put(':id')
    updateProduct(@Param ('id', ParseIntPipe) id:number, @Body() UpdProduct: UpdateProductoDto){
        return this.productsService.updateProduct(id, UpdProduct)
    }

    // Método para eliminar un registro producto mediante su ID(PkProducto)

    @Delete(':id')
    deleteProduct(@Param ('id', ParseIntPipe) id:number){

        return this.productsService.DeleteProduct(id)
        
    }
}
