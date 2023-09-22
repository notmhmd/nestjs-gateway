import {Body, Controller, Get, Param, ParseIntPipe, Post, Put, ValidationPipe} from '@nestjs/common';
import {ProductService} from "./product.service";
import {CreateProductDto, ProductDto} from "./data/product.dto";

@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService) {}

    @Post()
    createProduct(@Body(ValidationPipe) createProductDto: CreateProductDto) {
        return this.productService.createProduct(createProductDto);
    }

    @Get(':id')
    getProduct(@Param('id', ParseIntPipe) productId: number) {
        return this.productService.getProduct(productId)
    }

    @Get()
    getProducts() {
        return this.productService.getProducts();
    }

    @Put()
    updateProducts(@Body(ValidationPipe) productDto: ProductDto) {
        return this.productService.updateProduct(productDto);
    }
}
