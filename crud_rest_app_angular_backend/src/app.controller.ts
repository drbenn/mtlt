/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserRegister, User, Exercise } from './user.models';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // BUILD PATH
  // @Get('/mtlt')
  // DEV PATH
  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  // BUILD PATH
  // @Get('/mtlt/subtest')
  // DEV PATH
  @Get('/subtest')
  getSubMtltTest(): string {
    return this.appService.getSubMtltHello();
  }

  // BUILD PATH
  // @Post('/mtlt/register')
  // DEV PATH
  @Post('/register')
  async createUser(@Body() userDto: UserRegister) {
    return this.appService.createUser(userDto);
  }

  // BUILD PATH
  // @Post('/mtlt/login')
  // DEV PATH
  @Post('/login')
  async loginUser(@Body() userDto: User) {
    return this.appService.loginUser(userDto);
  }

  // BUILD PATH
  // @Post('/mtlt/savex')
  // DEV PATH
  @Post('/savex')
  async addExercise(@Body() exerciseDto: Exercise) {
    return this.appService.addExercise(exerciseDto);
  }
}
