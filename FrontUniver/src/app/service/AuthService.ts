import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loggedInUser: any;
  private apiServerUrl = environment.apiBaseUrl;
  private authToken: string | null = null; // Store authentication token here

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/login`, { username, password });
  }

  isAuthenticated(): boolean {
    return !!this._loggedInUser; // Returns true if user is logged in
  }

  getUserRole(): string {
    return this._loggedInUser ? this._loggedInUser.role : null; // Returns user's role or null if not logged in
  }

  setLoggedInUser(user: any): void {
    this._loggedInUser = user;
    this.fetchUserData(); // Fetch user data after successful login
  }

  fetchUserData(): void {
    // Fetch additional user data using the authentication token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.authToken}`);
    this.http.get<any>(`${this.apiServerUrl}/user`, { headers }).subscribe(
      (userData) => {
        // Update the logged-in user with additional data
        this._loggedInUser = userData;
      },
      (error) => {
        console.error('Failed to fetch user data:', error);
      }
    );
  }

  setAuthToken(token: string): void {
    this.authToken = token;
  }

  // Method to retrieve the authentication token
  getAuthToken(): string | null {
    return this.authToken;
  }

  // Method to retrieve the logged-in user data
  getLoggedInUser(): any {
    return this._loggedInUser;
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/user`);
  }
}
