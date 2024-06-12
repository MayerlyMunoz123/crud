import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class usuariosdto{
    @IsOptional()
    @IsNumber({}, { message: 'El ID del usuario debe ser un número.' })
    id?: number;


    @IsNotEmpty({message:'El nombre del usuario es obligatorio '})
    @IsString({message:'El nombre del usuario debe ser de tipo texto'})
    name:string;

    @IsNotEmpty({message:'El email es obligatorio'})
    @IsEmail({},{message:'El email del usuario debe ser de tipo email'})
    email:string;
}
