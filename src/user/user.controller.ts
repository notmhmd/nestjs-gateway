import {Body, Controller, Post, ValidationPipe} from '@nestjs/common';
import {OrderService} from "../order/order.service";
import {CreateOrderDto} from "../order/data/order.dto";
import {UserService} from "./user.service";
import {CreateUserDto} from "./data/user.dto";

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {
    }

    @Post('')
    createUser(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }
}
