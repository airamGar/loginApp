import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';
import {AuthService} from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (
    private router: Router,
    private afAuth: AngularFireAuth,
    private authService: AuthService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.afAuth.authState.take(1).map(authState => !! authState).do(authenticate => {
      if (!authenticate) {
        this.router.navigate(['/login']);
      }
    });
  }
}
