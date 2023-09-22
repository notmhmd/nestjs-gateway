import {Inject, Injectable, OnModuleInit} from '@nestjs/common';
import {CreateOrderDto} from "./data/order.dto";
import {ClientKafka, RpcException} from "@nestjs/microservices";
import {catchError, throwError} from "rxjs";

@Injectable()
export class OrderService implements OnModuleInit{

    constructor(@Inject('ORDER_MICROSERVICE') private readonly orderClient: ClientKafka
    ) {
    }

    createOrder(createOrderDto: CreateOrderDto) {
        this.orderClient.emit('order.place', JSON.stringify(createOrderDto));
    }

    getOrder(orderId: number) {
       return this.orderClient.send('order.get', {orderId})
           .pipe(catchError(error => throwError(() => new RpcException(error.response))));
    }

  async onModuleInit() {
        this.orderClient.subscribeToResponseOf('order.get')
        await this.orderClient.connect()
    }
}
