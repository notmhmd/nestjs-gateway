import {Body, Controller, Get, Param, ParseIntPipe, Post, ValidationPipe} from '@nestjs/common';
import {CreateOrderDto} from "./data/order.dto";
import {OrderService} from "./order.service";

@Controller('order')
export class OrderController {

    constructor(private readonly orderService: OrderService) {
    }

    @Post('place')
    placeOrder(@Body(ValidationPipe) createOrderDto: CreateOrderDto) {
        return this.orderService.createOrder(createOrderDto);
    }

    @Get(':id')
    getOrder(@Param("id", ParseIntPipe) orderId: number) {
        return this.orderService.getOrder(orderId);
    }
}
