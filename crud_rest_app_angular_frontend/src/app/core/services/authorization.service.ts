import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  LoggedInUser,
  LoginAuthentication,
} from '../models/loggedInUser.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private users$ = this.http.get<LoginAuthentication[]>(
    '/assets/testLoginDataLocal.json'
  );
  constructor(private http: HttpClient) {}

  getUsers(): Observable<LoginAuthentication[]> {
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
