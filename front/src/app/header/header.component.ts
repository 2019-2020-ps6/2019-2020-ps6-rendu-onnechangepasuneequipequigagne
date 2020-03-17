import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private logoUrl: string = 'assets/quizzy.png';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHomePage() {
    const link = ['/Home'];
    this.router.navigate(link);
  }
}
