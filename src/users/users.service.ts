import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './user.entity';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private UserssRepository: Repository<Users>,
      ) {}
      async remove(id: number): Promise<void> {
        const user = await this.encontrar1(id)
        if(user) {
          await this.UserssRepository.delete
        }
      }
      async get(): Promise<any> {
        const users= await this.UserssRepository.find();
        if(!users || users.length == 0) {
          throw new NotFoundException('no existen los registros')
        }
        return users
      }
      async update(id,data):Promise<any> {
        try {
          await this.UserssRepository.update(id,data);
        } catch (error) {
          throw new BadRequestException("No se a podido actualizar el registro" + id )
        }

    }  
    async encontrar1(id): Promise<Users> {
        const user = await this.UserssRepository.findOne({
          where:{
            id:id
          }
        }); 

        if(!user) {
          throw new NotFoundException('No existe el usuario' + id)
        }

        return user
      }
      async post(body): Promise<any> {
        
        try{  
        const newUser=await this.UserssRepository.create(body)
        await  this.UserssRepository.save(newUser); 
      
      }catch(error){
        throw new BadRequestException('No se a podido crear el registro del usuario', error)
      }
    }
  }