import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Notification } from './model/Notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  BASE_URL = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

  createNotification(notificationData: Notification): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}courses/notifications/create/`, notificationData);
  }
}
