import { Controller, Post, Body, Get, Param, ParseIntPipe, Put, Delete } from '@nestjs/common';
import { CrearUserDto } from './Dto/create-user.dto';
import { UsersService } from './users.service';
import { get } from 'https'
import { User } from './user.entity';
import { UpdateUserDto } from './Dto/update-user.dto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){

    }

    //Método para crear un nuevo usuario
    @Post()
    createUser(@Body() newUser : CrearUserDto){
        console.log(newUser)
        return this.usersService.CreateUser(newUser)
    }

    //Método para obtener la lista completa de los usuarios
    @Get()
    getUsers() :Promise<User[]>{
        return this.usersService.getUsers();
    }

    //Método para obtener solo a un usuario por ID
    @Get(':id')
    getUser(@Param ('id', ParseIntPipe) id:number) : Promise<User>{
        return this.usersService.getUser(id);
    }

    //Método para actualizar los datos usuario mediante ID y el cuerpo de los nuevos registros

    @Put(':id')
    updateUser(@Param ('id', ParseIntPipe) id:number, @Body() UpdUser: UpdateUserDto){
        return this.usersService.updateUser(id, UpdUser)
    }

    // Método para eliminar un registro usuario mediante su ID(pkUser)

    @Delete(':id')
    deleteUser(@Param ('id', ParseIntPipe) id:number){

        return this.usersService.DeleteUser(id)
        
    }

    @Post('login')
    async login(@Body() loginData: { userName: string; password: string }) {
      console.log(loginData);
      const { userName, password } = loginData;
      const { user } = await this.usersService.validateUser(userName, password);
      console.log(user);
      if (!user) {
        return null
      } else {
        return { user };
      }
    }   
}
