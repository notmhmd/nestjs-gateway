import {Exclude, Expose} from "class-transformer";
import {IsNumber, IsString} from "class-validator";

@Exclude()
export class UserDto {
    @Expose()
    @IsNumber()
    readonly id: number;

    @Expose()
    @IsString()
    readonly first_name: string;


    @Expose()
    @IsString()
    readonly last_name: string;

    @Expose()
    @IsString()
    readonly email: string;
}

@Exclude()
export class CreateUserDto {
    @Expose()
    @IsString()
    readonly first_name: string;


    @Expose()
    @IsString()
    readonly last_name: string;

    @Expose()
    @IsString()
    readonly email: string;
}