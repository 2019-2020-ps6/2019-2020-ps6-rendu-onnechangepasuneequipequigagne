import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthGuard} from "../../services/auth-guard.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private userLoggedIn: string = "";
  private logoUrl: string = 'https://lh3.googleusercontent.com/g4f3JWzT9_qwHKsz63ntrz8T17vYCLkXzSlFy4EZx0WuGAyXIkDLgihJzH0HunJdYw';

  constructor(private router: Router, private route: ActivatedRoute, private authGuard: AuthGuard) {
   this.userLoggedIn = this.authGuard.getActivatedUser();
  }

  ngOnInit() {
  }

  goToPassQuizz() {
    const link = ['/home/pass-quiz/users'];
    this.router.navigate(link);
  }

  goToMenuEdition() {
    const link = ['/home/edit-menu'];
    this.router.navigate(link);
  }
}
