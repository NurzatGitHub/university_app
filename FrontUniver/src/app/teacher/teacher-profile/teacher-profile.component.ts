import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/AuthService';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrl: './teacher-profile.component.css'
})
export class TeacherProfileComponent implements OnInit {
  userData: any;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.getUserData().subscribe(
      (data: any) => {
        this.userData = data;
      },
      (error: any) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

}
