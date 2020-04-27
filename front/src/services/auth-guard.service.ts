import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  private activatedUser;
  private isLoggedIn: boolean = false;
  public  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(this.isLoggedIn);

  constructor(private router: Router) { }

  canActivate(): boolean {
    return this.checkLogin();
  }

  setAuthGuardState(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
    this.isLoggedIn$.next(this.isLoggedIn);
  }

  checkLogin(): boolean {
    if(this.isLoggedIn){
      return true;
    } else {
      let link =  ['login'];
      this.router.navigate(link);
    }
  }

  setActivatedUser(login: string) {
    this.activatedUser = login;
  }

  getActivatedUser(): string {
    return this.activatedUser;
  }

}
