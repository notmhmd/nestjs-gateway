import {Inject, Injectable} from '@nestjs/common';
import {ClientKafka} from "@nestjs/microservices";
import {CreateUserDto} from "./data/user.dto";

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_MICROSERVICE') private readonly userClient: ClientKafka
    ) {}

    createUser(createUserDto: CreateUserDto) {
        this.userClient.emit('create-user', JSON.stringify(createUserDto));
    }
}
