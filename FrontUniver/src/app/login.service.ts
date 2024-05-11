import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { User } from './model/User';
const token = localStorage.getItem('token');
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BASE_URL = 'http://127.0.0.1:8000/';
  private _loggedInUser: any;
  private authToken: string | null = null;
  constructor(private http: HttpClient,) { }
  

  

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}users/token/`, { username, password });
  }

  getUserData(): Observable<any> {
    // return this.http.get<any>(`${this.BASE_URL}users/user_data/`);

    const token = localStorage.getItem('token');

    if (token) {
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + token
      });

      return this.http.get<any>(`${this.BASE_URL}users/user_data/`, { headers: headers });
    } else {
      throw new Error('JWT-токен отсутствует');
    }
  }

  getUsers(): Observable<User[]> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('JWT-токен отсутствует');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<User[]>(`${this.BASE_URL}users/get/users/`, { headers: headers });
  }
}
