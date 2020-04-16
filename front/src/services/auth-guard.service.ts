import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {

  private isLoggedIn: boolean = false;
  public  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(this.isLoggedIn);

  constructor(private router: Router) { }

  canActivate(): boolean {
    return true;
    //return this.checkLogin(); a laisser comme ça le temps du dev pour gagner du temps en testant le site
  }

  setAuthGuardState(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
    this.isLoggedIn$.next(this.isLoggedIn);
  }

  checkLogin(): boolean {
    if (true){//idem
    //if(this.isLoggedIn){
      return true;
    } else {
      let link =  ['login'];
      this.router.navigate(link);
    }
  }

}
