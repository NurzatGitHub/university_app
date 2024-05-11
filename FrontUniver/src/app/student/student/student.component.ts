import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/Course';
import { StudentCourseService } from '../../student-course.service';
import { LoginService } from '../../login.service';
import { Group } from '../../model/Group';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit{
  courses: Course[] = [];
  groups: Group[] = [];
  selectedCourse: Course; // Add this line

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

  // onCourseSelect(course: Course): void {
  //   this.selectedCourse = course; // Set the selected course when a course is selected
  //   this.getGroups(); // Update the groups when a new course is selected
  // }
}