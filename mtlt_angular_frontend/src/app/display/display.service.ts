import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DisplayService {
  constructor(private httpClient: HttpClient) {}

  getDisplay() {
    return this.httpClient.get('http://localhost:3000/');
  }
}
