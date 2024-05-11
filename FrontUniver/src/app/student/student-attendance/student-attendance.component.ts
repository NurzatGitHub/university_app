import { Component, OnInit } from '@angular/core';
import { StudentCourseService } from '../../student-course.service';
import { LessonAttendance } from '../../model/LessonAttendance';
import { Course } from '../../model/Course';
import { ActivatedRoute } from '@angular/router';
import { attendanceType } from '../../model/AttendancyType';

@Component({
  selector: 'app-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.css'] // исправление: исправлен стиль на styleUrls
})
export class StudentAttendanceComponent implements OnInit {
  lessonAttendanceList: LessonAttendance[] = [];
  course!: Course;
  courses: Course[] = [];
  attendanceTypeList: attendanceType[] = [];

  constructor(private route: ActivatedRoute,private lessonAttendanceService: StudentCourseService) { }

  ngOnInit(): void {
  // this.getLessonAttendance();
  this.getAttendancyType();
  this.getCourses();
  
  this.route.paramMap.subscribe((params) => {
    if (params.get('id')) {
      const id = Number(params.get('id'));
      this.lessonAttendanceService.getLessonAttendance(id).subscribe((attendance) => {
        this.lessonAttendanceList = attendance;
      });
    }
  });
  
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
}
