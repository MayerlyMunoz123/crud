import { Injectable } from '@nestjs/common';
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
        await this.UserssRepository.delete(id);
      }
      async get(): Promise<any> {
        return await this.UserssRepository.find();
      }
      async update(id,data):Promise<any> {
        return await this.UserssRepository.update(data,id);
    }    
    async encontrar1(id): Promise<Users> {
        return await this.UserssRepository.findOne(id); 
      }
}
