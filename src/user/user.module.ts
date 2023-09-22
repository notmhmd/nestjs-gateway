import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import {ClientsModule, Transport} from "@nestjs/microservices";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_MICROSERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'user',
            brokers: ['kafka:9092'],
          },
          producerOnlyMode: true,
          consumer: {
            groupId: 'user-consumer',
          },
        },
      },
    ]),
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
