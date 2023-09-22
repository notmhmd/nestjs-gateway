import {Exclude, Expose} from "class-transformer";
import {IsNumber, IsString} from "class-validator";

@Exclude()
export class ProductDto {
    @Expose()
    @IsNumber()
    readonly id: number;

    @Expose()
    @IsString()
    readonly name: string;

    @Expose()
    @IsString()
    description: string;

    @Expose()
    @IsNumber()
    price: number;
}

@Exclude()
export class CreateProductDto {

    @Expose()
    @IsString()
    readonly name: string;

    @Expose()
    @IsString()
    description: string;

    @Expose()
    @IsNumber()
    price: number;
}