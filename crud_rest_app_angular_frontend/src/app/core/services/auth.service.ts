import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRegister } from '../models/loggedInUser.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  getDisplay() {
    let response = this.httpClient.get('http://localhost:3000/');
    // let response = this.httpClient.get('https://danbennett.dev/mtlt/');
    return response;
  }
}
