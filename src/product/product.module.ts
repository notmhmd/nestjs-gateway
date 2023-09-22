import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import {ClientsModule, Transport} from "@nestjs/microservices";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PRODUCT_MICROSERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'product-consumer',
            brokers: ['kafka:9092'],
          },
          consumer: {
            groupId: 'product-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
