import { IsNotEmpty, IsNumberString, IsIn } from 'class-validator';

export class InputDto {

    date: String;

    @IsIn(['10', '50', '100'])
    @IsNotEmpty()
    @IsNumberString()
    limit: Number;

    language: String;
}