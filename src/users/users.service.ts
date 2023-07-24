import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CrearUserDto } from './Dto/create-user.dto';
import { privateDecrypt } from 'crypto';
import { UpdateUserDto } from './Dto/update-user.dto';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>){}

    CreateUser(user:CrearUserDto){

        const NewUser = this.userRepository.create(user)
        return this.userRepository.save(NewUser)

    }

    getUsers(){
        return this.userRepository.find()
    }

    getUser(id: number) {
        return this.userRepository.findOne({
            where: {
                pkUser: id
            }
        })
    }

    // Metodo para actualizar un usuario 
    updateUser(id: number, user: UpdateUserDto ){

        return this.userRepository.update({pkUser: id}, user)

    }
    
    //Método para eliminar usuario

    DeleteUser(id : number){
        return this.userRepository.delete({
            pkUser: id
        })

    }
    async validateUser(userName: string, password: string): Promise<{ user: User }> {
        const users = await this.getUsersLog(userName);
      
        const user = users.find((user) => user.password === password && user.userName === userName);
      
        if (!user) {
          throw new UnauthorizedException('Credenciales inválidas');
        }
      
        return { user };
      }
      
      async getUsersLog(userName: string) {
        return this.userRepository.find({
          where: { userName },
        });
      }

}

