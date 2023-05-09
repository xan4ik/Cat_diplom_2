import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {

    constructor(private router: Router) {}

    canActivate() {
        const logined = localStorage.getItem('logined');

        if (logined){
            return true;
        }

        this.router.navigate(['/']);
        return false;
    }
}