import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User';
import { AuthService } from '../../service/AuthService';
import { LoginService } from '../../login.service';
import { LessonAttendance } from '../../model/LessonAttendance';
import { ActivatedRoute } from '@angular/router';
import { StudentCourseService } from '../../student-course.service';
import { attendanceType } from '../../model/AttendancyType';
import { Course } from '../../model/Course';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit{
  // absent: number = 2;
  totalLessons: number = 30;
  lessonAttendanceList: LessonAttendance[] = [];
  users: User[] = [];
  courses: Course[] = [];
  attendanceTypeList: attendanceType[] = [];

  constructor(private route: ActivatedRoute,private loginService: LoginService,private lessonAttendanceService: StudentCourseService) { }

  ngOnInit(): void {
    this.getCourses();
    this.getUsers();
    this.getAttendancyType();
    this.route.paramMap.subscribe((params) => {
      if (params.get('id')) {
        const id = Number(params.get('id'));
        this.lessonAttendanceService.getLessonAttendance(id).subscribe((attendance) => {
          this.lessonAttendanceList = attendance;
        });
      }
    }); 
   
  }

  getUsers(): void {
    this.loginService.getUsers()
      .subscribe(users => this.users = users);
  }
  getCourses(): void {
    this.lessonAttendanceService.getCourses()
      .subscribe(courses => this.courses = courses);
  }

  get absentPercentage(): number {
    let absent = Math.floor(Math.random() * 20);
    return (absent / this.totalLessons) * 100;
  }

  getAttendancyType(): void {
    this.lessonAttendanceService.getAttendancyType()
      .subscribe(attendanceTypeList => {
        this.attendanceTypeList = attendanceTypeList;
       
      });
  }

  // increaseAbsent(): void {
  //   if (this.absent < this.totalLessons) {
  //     this.absent++;
  //   }
  // }

  // decreaseAbsent(): void {
  //   if (this.absent > 0) {
  //     this.absent--;
  //   }
  // }
}
