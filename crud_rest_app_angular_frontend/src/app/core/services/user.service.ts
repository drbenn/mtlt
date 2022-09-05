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
      console.log('response');

      console.log(res);

      this.registrationStatusEmitter.emit('Registration Successful')
    },(err) => {
      console.log('error');
      console.log(err);


      this.registrationStatusEmitter.emit('Registration Failed - username taken')
    });
  }

  loginUser(loginInfo: UserLogin){
    const url = 'http://localhost:3000/login'
    return this.httpClient.post<UserLogin>(url, loginInfo)
    .subscribe((res)=>{
      console.log('response');

      console.log(res);
      // If Login successful, res will return array of [username,exerciseHistory] which can then be pushed to state!
      let userResponse:any = res;

      let loggedInUserName: string = userResponse[0];
      console.log(loggedInUserName);
      let loggedInExerciseHistory:[] = userResponse[1];
      if(loggedInExerciseHistory === null) {
        loggedInExerciseHistory = [];
      }
      console.log(loggedInExerciseHistory);
      let loginResponse: [string, any[]] = [loggedInUserName, loggedInExerciseHistory];



      this.store.dispatch(new UpdateUserHistoryOnLogin(loginResponse));

      this.loginStatusEmitter.emit('Login Successful')
    },(err) => {
      console.log('error');
      console.log(err);


      this.loginStatusEmitter.emit('Login Failed')
    });
  }

  saveExercise(submittedExerciseData: ExerciseHistory){
    const url = 'http://localhost:3000/savex'
    console.log(submittedExerciseData);

    return this.httpClient.post<ExerciseHistory>(url, submittedExerciseData)
    .subscribe((res)=>{
      console.log('response');

      console.log(res);

      this.exerciseSubmitStatusEmitter.emit('Exercise Submit Successfully')
    },(err) => {
      console.log('error');
      console.log(err);


      this.exerciseSubmitStatusEmitter.emit('Exercise Submitt Failed')
    });
  }
}




