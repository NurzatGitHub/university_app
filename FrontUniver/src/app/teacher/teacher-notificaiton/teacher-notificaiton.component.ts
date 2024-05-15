import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/Course';
import { LessonAttendance } from '../../model/LessonAttendance';
import { AttendanceRecord } from '../../model/AttendanceRecords';
import { attendanceType } from '../../model/AttendancyType';
import { StudentCourseService } from '../../student-course.service';
import { LoginService } from '../../login.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-teacher-notificaiton',
  templateUrl: './teacher-notificaiton.component.html',
  styleUrl: './teacher-notificaiton.component.css'
})
export class TeacherNotificaitonComponent implements OnInit {

  lessonAttendanceList: LessonAttendance[] = [];
  course!: Course;
  courses: Course[] = [];
  attendancyRecords: AttendanceRecord[] = [];
  attendanceTypeList: attendanceType[] = [];
  accepted: boolean;
  accept: string = '';

  constructor( private lessonAttendanceService: StudentCourseService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.getAttendancyType();
    this.getCourses();
    this.getAttendancyRecords();
  }

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
  getAttendancyRecords(): void {
    this.lessonAttendanceService.getAttendanceRecords()
      .subscribe(attendancyRecords => {
        this.attendancyRecords = attendancyRecords;
       
      });
  }

  updateReason(recordId: number, reason: string): void {
    this.lessonAttendanceService.updateReason(recordId, reason).subscribe(
      response => {
        console.log('Reason updated:', response);
        // Optionally, update the local record to reflect the change
        const record = this.attendancyRecords.find(r => r.id === recordId);
        if (record) {
          record.reason = reason;
        }
      },
      error => {
        console.error('Error updating reason:', error);
      }
    );
  }

  notAccepted(): void {
    this.accepted = false;
  }
  Accepted(): void {
    this.accepted = true;
  }

  addAttendance_accept(email:string, course_name: string) {
    const accept = "Your reference accepted"
    
    this.lessonAttendanceService.addStudNote(email, course_name, accept).subscribe(
      response => {
        console.log('Attendance added:', response);
      },
      error => {
        console.error('Error adding attendance:', error);
      }
    );
  }
  addAttendance_not_accept(email:string, course_name: string) {
    const accept = "Your reference not accepted"
    this.lessonAttendanceService.addStudNote(email, course_name, accept).subscribe(
      response => {
        console.log('Attendance added:', response);
      },
      error => {
        console.error('Error adding attendance:', error);
      }
    );
  }
}
