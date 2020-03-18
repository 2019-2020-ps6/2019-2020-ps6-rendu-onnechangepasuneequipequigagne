import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private logoUrl: string = 'https://lh3.googleusercontent.com/g4f3JWzT9_qwHKsz63ntrz8T17vYCLkXzSlFy4EZx0WuGAyXIkDLgihJzH0HunJdYw';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHomePage() {
    const link = ['/home'];
    this.router.navigate(link);
  }
}
