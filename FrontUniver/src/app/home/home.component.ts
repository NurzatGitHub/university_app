import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/AuthService';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string;
  password: string;
  // userData: any;
  loginFailed: boolean = false; // Track login failure
  logged: boolean = false;

  constructor(private router: Router, private authService: AuthService, private loginService: LoginService) {}

  // login() {
  //   this.authService.login(this.username, this.password)
  //     .subscribe(
  //       (response: any) => {
  //         const role = response.role;
  //         this.authService.setLoggedInUser(response);
  //         this.router.navigate([`/${role}`.toLowerCase()]);
  //       },
  //       error => {
  //         console.error('Login failed:', error);
  //         this.loginFailed = true; // Set loginFailed to true on unsuccessful login
  //       }
  //     );
  // }
  // ngOnInit(): void {
  //   this.loginService.getUserData().subscribe(data => {
  //     this.userData = data;
  //   },
  //   (error) => {
  //     console.error('Error fetching user data:', error);
  //   }
  // );
  // }

  // submit(): void {
  //   this.loginService.getUserData().subscribe(data => {
  //       this.userData = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching user data:', error);
  //     }
  //   );
  // }

  onFocus(event: any) {
    event.target.parentNode.parentNode.classList.add('focus');
  }

  onBlur(event: any) {
    const parent = event.target.parentNode.parentNode;
    if (event.target.value === '') {
      parent.classList.remove('focus');
    }
  }
  ngOnInit(): void {
  }

  login(): void {
    this.loginService.login(this.username, this.password).subscribe(
      (response: any) => {
        const isTeacher = response.is_teacher; 
        localStorage.setItem('token', response.access); 
        if (isTeacher) {
          this.router.navigate(['/teacher']);
        } else {
          this.router.navigate(['/student']);
        }
      },
      (error: any) => {
        console.error('Login failed:', error);
        this.loginFailed = true;
        // Handle login error
      }
    );
  }
}
