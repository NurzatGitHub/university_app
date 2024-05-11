import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonRefernceService {
  BASE_URL = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

  sendReferenceToLesson(lessonId: number, formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}courses/send_reference_to_lesson/${lessonId}/`, formData);
  }
}
