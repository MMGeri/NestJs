import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UserDTO{
    @ApiProperty()
    @ApiPropertyOptional()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    email: string;
    
    @ApiProperty()
    gender: string;
}