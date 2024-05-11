import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student/student.component';
import { StudentProfileComponent } from './student/student-profile/student-profile.component';
import { StudentReferenceComponent } from './student/student-reference/student-reference.component';
import { StudentAttendanceComponent } from './student/student-attendance/student-attendance.component';
import { TeacherComponent } from './teacher/teacher/teacher.component';
import { TeacherProfileComponent } from './teacher/teacher-profile/teacher-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentNotificationComponent } from './student/student-notification/student-notification.component';
import { StudentListComponent } from './teacher/student-list/student-list.component';
import { CheckStudAbsenceComponent } from './teacher/check-stud-absence/check-stud-absence.component';
import { TeacherNotificaitonComponent } from './teacher/teacher-notificaiton/teacher-notificaiton.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    StudentProfileComponent,
    StudentReferenceComponent,
    StudentAttendanceComponent,
    TeacherComponent,
    TeacherProfileComponent,
    StudentNotificationComponent,
    StudentListComponent,
    CheckStudAbsenceComponent,
    TeacherNotificaitonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    RouterOutlet,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
