import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/Course';
import { StudentCourseService } from '../../student-course.service';
import { LoginService } from '../../login.service';
import { Group } from '../../model/Group';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent implements OnInit{
  courses: Course[] = [];
  groups: Group[] = [];
  selectedCourse: Course; 

  constructor(private courseService: StudentCourseService,private loginService: LoginService) { }

  ngOnInit(): void {
    this.getCourses();
    this.getGroups();
  }
  getCourses(): void {
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses);
  }

  getGroups(): void {
      this.courseService.getGroups()
        .subscribe(groups => this.groups = groups);
  }

}
