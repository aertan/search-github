import { IsNotEmpty, IsNumberString } from 'class-validator';

export class InputDto {

    date: String;

    @IsNotEmpty()
    @IsNumberString()
    limit: Number;

    language: String;
}