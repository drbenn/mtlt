import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable} from '@angular/core';
import { Store } from '@ngxs/store';
import { ExerciseHistory, UserLogin, UserRegister } from '../models/loggedInUser.model';
import { UpdateUserHistoryOnLogin } from '../state/appState.actions';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  registrationStatusEmitter = new EventEmitter<string>();
  loginStatusEmitter = new EventEmitter<string>();
  exerciseSubmitStatusEmitter = new EventEmitter<string>();


  constructor(private httpClient: HttpClient, private store:Store) {}


  registerUser(registrationInfo: UserRegister){
    const url = 'http://localhost:3000/register'
    return this.httpClient.post<UserRegister>(url, registrationInfo)
    .subscribe((res)=>{
      // console.log('userService: user register response');
      // console.log(res);
      this.registrationStatusEmitter.emit('Registration Successful')
    },(err) => {
      // console.log('userService: user register error');
      // console.log(err);
      this.registrationStatusEmitter.emit('Registration Failed - username taken')
    });
  }


  // If Login successful, res will return array of [username,exerciseHistory] which can then be pushed to state!
  loginUser(loginInfo: UserLogin){
    const url = 'http://localhost:3000/login'
    return this.httpClient.post<UserLogin>(url, loginInfo)
    .subscribe((res) => {
      let userResponse:any = res;
      this.loggedInUserDataToState(userResponse)
      this.loginStatusEmitter.emit('Login Successful')
    },(err) => {
      // console.log('userService: user login error');
      // console.log(err);
      this.loginStatusEmitter.emit('Login Failed')
    });
  }


  loggedInUserDataToState(loginServerResponse:any[]) {
    let loggedInUserName: string = loginServerResponse[0];
    let loggedInExerciseHistory:[] = loginServerResponse[1];
    if (loggedInExerciseHistory === null) {
      loggedInExerciseHistory = [];
    }
    console.log(`loggedInUserName:${loggedInUserName}`);
    console.log(loggedInExerciseHistory);
    let loginResponse: [string, any[]] = [loggedInUserName, loggedInExerciseHistory];
    this.store.dispatch(new UpdateUserHistoryOnLogin(loginResponse));
  }


  saveExercise(submittedExerciseData: ExerciseHistory){
    const url = 'http://localhost:3000/savex'

    return this.httpClient.post<ExerciseHistory>(url, submittedExerciseData)
    .subscribe((res)=>{
      // console.log('userService: exercise submit response');
      // console.log(res);
      this.exerciseSubmitStatusEmitter.emit('Exercise Submit Successfully')
    },(err) => {
      // console.log('userService: exercise submit error');
      // console.log(err);
      this.exerciseSubmitStatusEmitter.emit('Exercise Submitt Failed')
    });
  }
}




