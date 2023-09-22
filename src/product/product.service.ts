import {Inject, Injectable, OnModuleDestroy, OnModuleInit} from '@nestjs/common';
import {ClientKafka, RpcException} from "@nestjs/microservices";
import {CreateProductDto, ProductDto} from "./data/product.dto";
import {catchError, throwError} from "rxjs";

@Injectable()
export class ProductService implements OnModuleInit, OnModuleDestroy {
    constructor(
        @Inject('PRODUCT_MICROSERVICE') private readonly productClient: ClientKafka
    ) {}

     onModuleInit(){
        ['get', 'retrieve', 'update'].forEach((action) =>{
            this.productClient.subscribeToResponseOf(`product.${action}`);
        })
    }




    async onModuleDestroy() {
        await this.productClient.close();
    }
    createProduct(createProductDto: CreateProductDto) {
        this.productClient.emit('product.create', JSON.stringify(createProductDto));
    }

     getProducts() {
         return this.productClient.send('product.get', {});
    }

    getProduct(productId:number){
        return this.productClient.send('product.retrieve', JSON.stringify({productId}))
            .pipe(catchError(error => throwError(() => new RpcException(error.response))))

    }

    updateProduct(product:ProductDto){
        return this.productClient.send('product.update', JSON.stringify(product));
    }
}
