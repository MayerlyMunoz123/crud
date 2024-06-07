import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './user.entity';
;

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private UserssRepository: Repository<Users>,
      ) {}
      async remove(id: number): Promise<void> {
        await this.UserssRepository.delete(id);
      }
      async get(): Promise<any> {
        return await this.UserssRepository.find();
      }
      async update(id,data):Promise<any> {
        return await this.UserssRepository.update(id,data);
    }    
    async encontrar1(id): Promise<Users> {
        return await this.UserssRepository.findOne({
          where:{
            id:id
          }
        }); 
      }
      async post(body): Promise<any> {
        const newUser=await this.UserssRepository.create(body)
        return await  this.UserssRepository.save(newUser); 
      }

}
