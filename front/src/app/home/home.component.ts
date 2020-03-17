import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private logoUrl: string = 'assets/quizzy.png';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPassQuizz() {
    const link = ['/Home/pass-quiz'];
    this.router.navigate(link);
  }

  goToMenuEdition() {

  }
}
