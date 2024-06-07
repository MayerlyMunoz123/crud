import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}
    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.userService.remove(id);
    }
    @Get('/')
    get() {
        return this.userService.get();
    }
    @Put(':id')
    update(@Param('id') id: number,@Body() data ) {
        return this.userService.update(id,data);
    }
   @Get(':id')
   encontrar1(@Param('id') id: number){
    return this.userService.encontrar1(id);
   }
   @Post()
   post(@Body()body:any){
    return this.userService.post(body)
   }


}
