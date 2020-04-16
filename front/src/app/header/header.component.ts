import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthGuard} from '../../services/auth-guard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private isLoggedIn: boolean;

  private logoUrl: string = 'https://lh3.googleusercontent.com/g4f3JWzT9_qwHKsz63ntrz8T17vYCLkXzSlFy4EZx0WuGAyXIkDLgihJzH0HunJdYw';

  constructor(private router: Router, private authGuard: AuthGuard) {
    this.authGuard.isLoggedIn$.subscribe((state) => this.isLoggedIn = state);
  }

  ngOnInit() {
  }

  goToHomePage() {
    const link = ['/home'];
    this.router.navigate(link);
  }

  logout() {
    this.authGuard.setAuthGuardState(false);
    const link = ['/login'];
    this.router.navigate(link);
  }
}
