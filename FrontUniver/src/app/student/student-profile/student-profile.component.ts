import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
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
