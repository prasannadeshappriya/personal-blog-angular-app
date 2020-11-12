import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/App/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const currentUser = this.authService.currentUserObj;
        if(currentUser) {
            //We have a valid user
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/authanticate'], { queryParams: { isRegister: true } });
        return false;
    }
}