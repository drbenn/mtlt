import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserRegister, User, Exercise } from './user.models';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/mtlt')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/mtlt/subtest')
  getSubMtltTest(): string {
    return this.appService.getSubMtltHello();
  }

  @Post('/mtlt/register')
  async createUser(@Body() userDto: UserRegister) {
    return this.appService.createUser(userDto);
  }

  @Post('/mtlt/login')
  async loginUser(@Body() userDto: User) {
    return this.appService.loginUser(userDto);
  }

  @Post('/mtlt/savex')
  async addExercise(@Body() exerciseDto: Exercise) {
    return this.appService.addExercise(exerciseDto);
  }
}
