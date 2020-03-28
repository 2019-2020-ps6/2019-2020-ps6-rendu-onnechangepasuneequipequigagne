import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../../models/quiz.model';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user.model";

@Component({
  selector: 'app-user-quizzes',
  templateUrl: './user-quizzes.component.html',
  styleUrls: ['./user-quizzes.component.scss']
})
export class UserQuizzesComponent implements OnInit {

  public quizList: Quiz[];

  constructor(public userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.userService.getUserQuizzes(id.toString()).subscribe((quizzes) => this.quizList = quizzes);
    }
  }

  quizSelected(selected: boolean) {
    console.log('event received from child:', selected);
  }

}
