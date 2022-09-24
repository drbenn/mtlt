import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  LoggedInUser,

  UserLogin,
} from '../models/loggedInUser.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private users$ = this.http.get<UserLogin[]>(
    '/assets/testLoginDataLocal.json'
  );
  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserLogin[]> {
    return this.users$;
  }

  // getUserHistory():Observable<LoggedInUser>{
  //   return this.users$.pipe(map((_users)=>{
  //       let mappedUsers = _users.map((user)=> {
  //         if (user.username.includes('test-l')
  //       })
  //   })
  // }
}
