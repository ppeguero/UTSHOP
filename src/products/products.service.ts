import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Product } from './products.entity';
import { Repository } from 'typeorm';
import { CrearProductoDto } from './Dto/create-product.dto';
import { privateDecrypt } from 'crypto';
import { UpdateProductoDto } from './Dto/update-user.dto';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Product) private productRepository: Repository<Product>){}

    CreateProduct(product:CrearProductoDto){

        const NewProduct = this.productRepository.create(product)
        return this.productRepository.save(NewProduct)

    }

    getProducts(){
        return this.productRepository.find()
    }

    getProduct(id: number) {
        return this.productRepository.findOne({
            where: {
                pkProduct: id
            }
        })
    }

    // Metodo para actualizar un producto 
    updateProduct(id: number, product: UpdateProductoDto ){

        return this.productRepository.update({pkProduct: id}, product)

    }
    
    //Método para eliminar producto

    DeleteProduct(id : number){
        return this.productRepository.delete({
            pkProduct: id
        })

    }


}