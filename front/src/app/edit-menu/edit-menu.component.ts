import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.scss']
})
export class EditMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToEditQuizzes() {
    const link = ['home/edit-menu/edit-quizzes'];
    this.router.navigate(link);
  }

  goToEditUsers() {
    const link = ['home/edit-menu/edit-users'];
    this.router.navigate(link);
  }

  goBack() {
    let link = ['home'];
    this.router.navigate(link);
  }

}
