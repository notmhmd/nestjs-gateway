import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import {ClientsModule, Transport} from "@nestjs/microservices";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ORDER_MICROSERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'order',
            brokers: ['kafka:9092'],
          },
          consumer: {
            groupId: 'order-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
