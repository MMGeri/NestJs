import { NotContains, MinLength, Matches, IsEmail } from 'class-validator';

export class CreateUserDto {
    @NotContains(' ')
    name:string;

    @NotContains(' ')
    @IsEmail()
    email:string;

    @NotContains(' ')
    @MinLength(8)
    password:string;

    @NotContains(' ')
    @Matches(/f|m/)
    gender:string;
}
