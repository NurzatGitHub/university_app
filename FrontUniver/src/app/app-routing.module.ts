import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student/student.component';
import { StudentProfileComponent } from './student/student-profile/student-profile.component';
import { StudentReferenceComponent } from './student/student-reference/student-reference.component';
import { StudentAttendanceComponent } from './student/student-attendance/student-attendance.component';
import { TeacherComponent } from './teacher/teacher/teacher.component';
import { TeacherProfileComponent } from './teacher/teacher-profile/teacher-profile.component';
import { AuthGuard } from './service/AuthGuard';
import { StudentNotificationComponent } from './student/student-notification/student-notification.component';
import { StudentListComponent } from './teacher/student-list/student-list.component';
import { CheckStudAbsenceComponent } from './teacher/check-stud-absence/check-stud-absence.component';
import { TeacherNotificaitonComponent } from './teacher/teacher-notificaiton/teacher-notificaiton.component';


export const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'student-notification', component:StudentNotificationComponent},

  {path:'student', component:StudentComponent},
  {path:'student-profile', component:StudentProfileComponent},
  {path:'student-reference', component:StudentReferenceComponent},
  // {path:'student-attendance', component:StudentAttendanceComponent},
  {path:'student-attendance/:id', component:StudentAttendanceComponent},
  {path:'teacher', component:TeacherComponent},
  {path:'teacher-profile', component:TeacherProfileComponent},
  {path:'student-list/:id', component:StudentListComponent},
  {path:'check-stud-absence/:id', component:CheckStudAbsenceComponent},
  {path:'teacher-notification', component:TeacherNotificaitonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
