import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './AuthService';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.authService.isAuthenticated()) {
      // If not authenticated, redirect to login
      this.router.navigate(['/login']);
      return false;
    }

    // Get roles specified for the route
    const requiredRoles = route.data['roles'] as string[];
    
    // Get the current user's role
    const userRole = this.authService.getUserRole();

    // Check if the user has the required role to access the route
    if (requiredRoles.includes(userRole)) {
      return true; // Access granted
    } else {
      // Redirect to unauthorized or handle unauthorized access
      this.router.navigate(['/unauthorized']);
      return false; // Access denied
    }
  }
}
