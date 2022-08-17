/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Exercise, User, UserRegister } from './user.models';
import { UserUpdateDto } from './userUpdate.dto';

// Changing the controller parameter would change the requests to localhost:3000/somesubdirectory
// @Controller('somesubdirectory')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Post('/register')
  async createUser(@Body() userDto: UserRegister) {
    // console.log('@post activated');
    // console.log(`userDTO: ${userDto}`);
    console.log('register controller this.appService.createUser(userDto)');
    console.log(this.appService.createUser(userDto));
    
    
    return this.appService.createUser(userDto);
  }

  @Post('/login')
  async loginUser(@Body() userDto: User) {
    // console.log('@post activated');
    // console.log(`userDTO: ${userDto}`);
    console.log('post hit');
    
    return this.appService.loginUser(userDto);
  }



  // Readuser used on login
  @Get()
  readUser() {
    // return ['user1', 'user2'];
    return this.appService.readUser();
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateData: UserUpdateDto,
  ): Promise<User> {
    return this.appService.updateUser(id, updateData);
  }

  @Post('/savex')
  async addExercise(@Body() exerciseDto: Exercise) {
    // console.log('saveexercise controller ');
    // console.log(exerciseDto);
    
    // console.log(this.appService.addExercise(exerciseData));

    return this.appService.addExercise(exerciseDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.appService.deleteUser(id);
  }
}


