import { ApiProperty } from '@nestjs/swagger';
import { NotContains, MinLength, Matches, IsEmail } from 'class-validator';

export class CreateUserDto {
    @NotContains(' ')
    @ApiProperty()
    name:string;

    @NotContains(' ')
    @IsEmail()
    @ApiProperty()
    email:string;

    @NotContains(' ')
    @MinLength(8)
    @ApiProperty({minLength:8})
    password:string;

    @NotContains(' ')
    @Matches(/f|m/)
    @ApiProperty({enum:['f','m']})
    gender:string;
}
