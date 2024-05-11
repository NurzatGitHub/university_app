import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from './model/Course';
import { Observable } from 'rxjs';
import { LessonAttendance } from './model/LessonAttendance';
import { Group } from './model/Group';
import { attendanceType } from './model/AttendancyType';

@Injectable({
  providedIn: 'root'
})
export class StudentCourseService {
  BASE_URL = 'http://127.0.0.1:8000/';
  constructor(private http: HttpClient) { }

  // getCourses(): Observable<Course[]> {
  //   return this.http.get<Course[]>(`${this.BASE_URL}courses/get/courses/`);
  // }

  
  getCourses(): Observable<Course[]> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('JWT-токен отсутствует');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<Course[]>(`${this.BASE_URL}courses/get/courses/`, { headers: headers });
  }

  getCourseById(courseId: Number): Observable<Course> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('JWT-токен отсутствует');
    }
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    return this.http.get<Course>(`${this.BASE_URL}courses/get/courses/${courseId}`, { headers: headers });
  }
  getCourse(): Observable<Course> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('JWT-токен отсутствует');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<Course>(`${this.BASE_URL}courses/get/courses/`, { headers: headers });
  }
  
  getGroups(): Observable<Group[]> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('JWT-токен отсутствует');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<Group[]>(`${this.BASE_URL}courses/get/groups/`, { headers: headers });
  }

  getLessonAttendance(lessonId: number): Observable<LessonAttendance[]> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('JWT-токен отсутствует');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const url = `${this.BASE_URL}courses/get/lesson/attendance/${lessonId}/`;
    return this.http.get<LessonAttendance[]>(url, { headers: headers });
  }


  getAttendancyType(): Observable<attendanceType[]> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('JWT-токен отсутствует');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<attendanceType[]>(`${this.BASE_URL}courses/get/attendancytype/`, { headers: headers });
  }
}
