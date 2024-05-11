import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';
import { User } from '../../model/User';
import { ActivatedRoute } from '@angular/router';
import { StudentCourseService } from '../../student-course.service';
import { LessonAttendance } from '../../model/LessonAttendance';
import { Course } from '../../model/Course';
import { attendanceType } from '../../model/AttendancyType';

@Component({
  selector: 'app-check-stud-absence',
  templateUrl: './check-stud-absence.component.html',
  styleUrl: './check-stud-absence.component.css'
})
export class CheckStudAbsenceComponent implements OnInit {
  users: User[] = [];
  lessonAttendanceList: LessonAttendance[] = [];
  courses: Course[] = [];
  attendanceTypeList: attendanceType[] = [];


  constructor(private route: ActivatedRoute,private loginService: LoginService,private lessonAttendanceService: StudentCourseService) { }

  ngOnInit(): void {
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
