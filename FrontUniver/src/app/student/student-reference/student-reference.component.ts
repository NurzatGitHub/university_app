import { Component, Input, OnInit, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LessonRefernceService } from '../../lesson-refernce.service';
import { StudentCourseService } from '../../student-course.service';
import { Course } from '../../model/Course';
import { NotificationService } from '../../notification.service';
// import { ToastrService } from 'ngx-toastr';
import { Notification } from '../../model/Notification';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-student-reference',
  templateUrl: './student-reference.component.html',
  styleUrl: './student-reference.component.css',
  
})
export class StudentReferenceComponent implements OnInit {

  notificationData: Notification = {
    student: '', // Пустое значение по умолчанию
    text: '' // Пустое значение по умолчанию
  };
  userData: any;

  constructor(private notificationService: NotificationService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.getUserData().subscribe(
      (data: any) => {
        this.userData = data;
        // Присваиваем значение this.notificationData.student здесь, когда данные доступны
        this.notificationData.student = this.userData.id;
      },
      (error: any) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

  createNotification(): void {
    this.notificationService.createNotification(this.notificationData)
      .subscribe(
        (response) => {
          console.log('Success:', response);
          // Обработка успешного ответа
        },
        (error) => {
          console.error('Error:', error);
          // Обработка ошибки
        }
      );
  }
  // getCourses(): void {
  //   this.lessonAttendanceService.getCourses()
  //     .subscribe(courses => {
  //       this.courses = courses;
       
  //     });
  // }


}
