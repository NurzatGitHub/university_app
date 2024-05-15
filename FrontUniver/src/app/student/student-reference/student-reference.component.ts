import { Component, Input, OnInit, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LessonRefernceService } from '../../lesson-refernce.service';
import { StudentCourseService } from '../../student-course.service';
import { Course } from '../../model/Course';
import { NotificationService } from '../../notification.service';
// import { ToastrService } from 'ngx-toastr';
import { Notification } from '../../model/Notification';
import { LoginService } from '../../login.service';
import { LessonAttendance } from '../../model/LessonAttendance';
import { attendanceType } from '../../model/AttendancyType';
import { AttendanceRecord } from '../../model/AttendanceRecords';

@Component({
  selector: 'app-student-reference',
  templateUrl: './student-reference.component.html',
  styleUrl: './student-reference.component.css',
  
})
export class StudentReferenceComponent implements OnInit {

  lessonAttendanceList: LessonAttendance[] = [];
  course!: Course;
  courses: Course[] = [];
  attendancyRecords: AttendanceRecord[] = [];
  attendanceTypeList: attendanceType[] = [];

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

}
