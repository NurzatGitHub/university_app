import { Component, OnInit } from '@angular/core';
import { StudentCourseService } from '../../student-course.service';
import { LessonAttendance } from '../../model/LessonAttendance';
import { Course } from '../../model/Course';
import { ActivatedRoute, Data } from '@angular/router';
import { attendanceType } from '../../model/AttendancyType';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrl: './student-attendance.component.css'
})
export class StudentAttendanceComponent implements OnInit {
  lessonAttendanceList: LessonAttendance[] = [];
  // course!: Course;
  course_id : number = 0;
  courses: Course[] = [];
  attendanceTypeList: attendanceType[] = [];
  userData: any;
  

  constructor(private route: ActivatedRoute,private lessonAttendanceService: StudentCourseService, private loginService: LoginService) { }

  ngOnInit(): void {
  // this.getLessonAttendance();
  this.getAttendancyType();
  this.getCourses();
  
  this.route.paramMap.subscribe((params) => {
    if (params.get('id')) {
      const id = Number(params.get('id'));
      this.course_id = id;
      this.lessonAttendanceService.getLessonAttendance(id).subscribe((attendance) => {
        this.lessonAttendanceList = attendance;
      });
    }
  });

  this.loginService.getUserData().subscribe(
    (data: any) => {
      this.userData = data;
    },
    (error: any) => {
      console.error('Error fetching user data:', error);
    }
  );
  }
  

  // getLessonAttendance(courseId: number): void {
  //     this.lessonAttendanceService.getLessonAttendance(courseId)
  //     .subscribe(attendance => this.lessonAttendanceList = attendance);
    
  // }
  getAttendancyType(): void {
    this.lessonAttendanceService.getAttendancyType()
      .subscribe(attendanceTypeList => {
        this.attendanceTypeList = attendanceTypeList;
       
      });
  }

  getCourses(): void {
    this.lessonAttendanceService.getCourses()
      .subscribe(courses => {
        this.courses = courses;
       
      });
  }

  addAttendance(attendanceId: number, course_name: string, username: string) {
    
    this.lessonAttendanceService.addAttendance(attendanceId, this.course_id, course_name, username).subscribe(
      response => {
        console.log('Attendance added:', response);
      },
      error => {
        console.error('Error adding attendance:', error);
      }
    );
  }

  // updateReason(attendanceRecordId: number, reason: string) {
  //   this.lessonAttendanceService.updateReason(attendanceRecordId, reason).subscribe(
  //     response => {
  //       console.log('Reason updated:', response);
  //     },
  //     error => {
  //       console.error('Error updating reason:', error);
  //     }
  //   );
  // }
}
