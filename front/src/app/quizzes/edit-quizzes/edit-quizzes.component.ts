import { Component, OnInit} from '@angular/core';
import { QuizService} from '../../../services/quiz.service'
import { Quiz } from 'src/models/quiz.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quizzes.component.html',
  styleUrls: ['./edit-quizzes.component.scss']
})
export class EditQuizzesComponent implements OnInit {

  private quizList: Quiz[];

  constructor(private quizService: QuizService, private router: Router) {
    this.quizService.quizzes$.subscribe((quizzes) => this.quizList = quizzes);
  }

  ngOnInit() {
  }

  editQuiz(quiz: Quiz) {
    const link = ['home/edit-menu/edit-quizzes/'+quiz.id+'/questions'];
    this.router.navigate(link);
  }

  deleteQuiz(quiz: Quiz) {
    this.quizService.deleteQuiz(quiz);
  }


}
