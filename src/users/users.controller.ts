import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { usuariosdto } from 'src/Dto/usuarios.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}
    @Delete(':id')
    remove(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
        return this.userService.remove(id);
    }
    @Get('/')
    get() {
        return this.userService.get();
    }
    @Put(':id')
    @UsePipes(new ValidationPipe())
    update(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))id: number,@Body() data ) {
        return this.userService.update(id,data);
    }
   @Get(':id')
   encontrar1(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number){
    return this.userService.encontrar1(id);
   }
   @Post()
   @UsePipes(new ValidationPipe())
   post(@Body()body:usuariosdto){
    return this.userService.post(body)
   }
   @Patch(':id')
   @UsePipes(new ValidationPipe())
   updateParcil(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))id: number,@Body() data ) {
       return this.userService.updateParcial(id,data);
   }

}