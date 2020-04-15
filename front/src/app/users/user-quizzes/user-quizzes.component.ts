import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../../models/quiz.model';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-user-quizzes',
  templateUrl: './user-quizzes.component.html',
  styleUrls: ['./user-quizzes.component.scss']
})
export class UserQuizzesComponent implements OnInit {

  public quizList: Quiz[];
  private trim: string = "";


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

  search() {
    if(this.trim) {
      this.quizList = this.quizList.filter((quiz) =>
        quiz.name.toLocaleLowerCase().indexOf(this.trim.toLocaleLowerCase()) !== -1
      );
    } else {
      this.ngOnInit();
    }
  }


}
