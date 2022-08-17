/* eslint-disable prettier/prettier */
import { ConflictException, HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { Exercise, User,UserDocument, UserRegister } from './user.models';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  isCurrentUser = false;
  loggedInUserObject:any;
  loggedInUserName:string;
  loggedInUserExerciseHistory:any[] = [];
  // getHello(): string {
  //   return 'Hello World!';
  // }

  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>
  ){}

// Add completed exercise to exercisehistory
  async addExercise(exerciseData):Promise<Exercise> {
    // this.loggedInUserExerciseHistory.push(exerciseData);
    // console.log(this.loggedInUserExerciseHistory);
    // await this.userModel.update({username: this.loggedInUserName},{exerciseHistory:this.loggedInUserExerciseHistory})
    await this.userModel.updateOne({username: this.loggedInUserName},{$push:{exerciseHistory:exerciseData}})  
    return
  }

// Create user
async createUser(submittedNewUserInfo:UserRegister): Promise<UserRegister> {

  const currentUsers:any = await this.readUser();
  this.checkCurrentUsers(currentUsers, submittedNewUserInfo)
  console.log(this.isCurrentUser)
  if (this.isCurrentUser === true) {
    this.isCurrentUser = false;

    throw new HttpException('Username is taken',HttpStatus.UNPROCESSABLE_ENTITY);

    return
  } else {
    const newUser = new this.userModel(submittedNewUserInfo)  
    return newUser.save()
  }
}

async loginUser(submittedLogin:User):Promise<any> {
  console.log('login user hit');
  
  const currentUsers:any = await this.readUser();
  // console.log(currentUsers);
  // console.log(submittedLogin);
  
  
  await this.checkLoginCredentials(currentUsers, submittedLogin)
  // console.log(this.userLoginName);
  // console.log(this.userExerciseHistory.exerciseHistory[0]);
  // console.log(this.loggedInUserObject);
  console.log(this.loggedInUserObject.username);
  const stringUserData = JSON.stringify(this.loggedInUserObject);
  const ObjUserData = JSON.parse(stringUserData);
  const usernameForReturn = ObjUserData.username;
  const exerciseHistoryForReturn = ObjUserData.exerciseHistory;
  this.loggedInUserName = usernameForReturn;
  this.loggedInUserExerciseHistory = exerciseHistoryForReturn;
  const arrayForReturn = [usernameForReturn,exerciseHistoryForReturn]
  // console.log(arrayForReturn);
  return arrayForReturn;
}


    

  // Read the user collection
  async readUser(){
    return this.userModel.find({})
    .then((user)=>{
      // console.log(user)
      return user
    })
    .catch((err)=>console.log(err))
  }



  // Update the data
  async updateUser(id,data): Promise<User> {
    return this.userModel.findByIdAndUpdate(id,data,{new:true})
  }

  // Delete the data
  async deleteUser(id) {
    return this.userModel.findByIdAndRemove(id)
  }


  async checkCurrentUsers(currentUsers, submittedNewUserInfo) {
    await currentUsers.find((currentUsersObj)=> {
      if (currentUsersObj.username.toLowerCase() === submittedNewUserInfo.username.toLowerCase()) {
        // console.log(`current: ${currentUsersObj.username} , submitted: ${submittedNewUserInfo.username}`);   
        this.isCurrentUser = true
      }
    })
  }

  async checkLoginCredentials(currentUsers, submittedLogin) {    
    currentUsers.find((currentUsersObj)=> {
      if (currentUsersObj.username.toLowerCase() === submittedLogin.username.toLowerCase() && currentUsersObj.password === submittedLogin.password)   
          {
            // console.log('correct');  
            this.loggedInUserObject = currentUsersObj;      
            return
          } 
          // else {
          //   console.log('login failed - no user/pass match');
          //   return 'no good'
          // }
    })
  }


}