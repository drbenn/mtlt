/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Exercise, User, UserDocument, UserRegister } from './user.models';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  isCurrentUser = false;
  loggedInUserObject:any;
  loggedInUserName:string;
  loggedInUserExerciseHistory:any[] = [];

  constructor(@InjectModel('user') private readonly userModel: Model<UserDocument>) {}

  // Test Function
  getHello(): string {
    return 'Hello MTLT Root!';
  }

  // Test Function
  getSubMtltHello(): string {
    return 'Mtlt Subdirectory db Hello World!';
  }

  // Register User Function
  async createUser(submittedNewUserInfo:UserRegister): Promise<UserRegister> {
    const currentUsers:any = await this.readUser();
    this.checkCurrentUsers(currentUsers, submittedNewUserInfo)
    if (this.isCurrentUser === true) {
      this.isCurrentUser = false;
      throw new HttpException('Username is taken',HttpStatus.UNPROCESSABLE_ENTITY)
    } else {
      const newUser = new this.userModel(submittedNewUserInfo)  
      return newUser.save()
    }
  }

  // Login Function
  async loginUser(submittedLogin:User):Promise<any> {
    const currentUsers:any = await this.readUser();
    await this.checkLoginCredentials(currentUsers, submittedLogin)
    const stringUserData = JSON.stringify(this.loggedInUserObject);
    const ObjUserData = JSON.parse(stringUserData);
    const usernameForReturn = ObjUserData.username;
    const exerciseHistoryForReturn = ObjUserData.exerciseHistory;
    this.loggedInUserName = usernameForReturn;
    this.loggedInUserExerciseHistory = exerciseHistoryForReturn;
    const arrayForReturn = [usernameForReturn,exerciseHistoryForReturn]
    return arrayForReturn;
  }

  // Read the user collection
  // Used in both Register and Login functions
  async readUser(){
    return this.userModel.find({})
    .then((user)=>{
      return user
    })
    .catch((err)=>console.log(err))
  }


  // Validates current users
  // For registration function only
  async checkCurrentUsers(currentUsers, submittedNewUserInfo) {
    await currentUsers.find((currentUsersObj)=> {
      if (currentUsersObj.username.toLowerCase() === submittedNewUserInfo.username.toLowerCase()) {
        this.isCurrentUser = true
      }
    })
  }

  // Validates login and password
  // For login function only
  async checkLoginCredentials(currentUsers, submittedLogin) {    
    currentUsers.find((currentUsersObj)=> {
      if (currentUsersObj.username.toLowerCase() === submittedLogin.username.toLowerCase() && currentUsersObj.password === submittedLogin.password)   
          {
            this.loggedInUserObject = currentUsersObj;      
            return
          } 
    })
  }


  // Add completed exercise to exercisehistory
  async addExercise(exerciseData):Promise<Exercise> {
    await this.userModel.updateOne({username: this.loggedInUserName},{$push:{exerciseHistory:exerciseData}})  
    return
  }

  }
