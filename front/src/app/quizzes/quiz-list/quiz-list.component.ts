import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {

  public quizList: Quiz[] = [];

  constructor(public quizService: QuizService) {
    this.quizService.quizzes$.subscribe((quizzes) => this.quizList = quizzes);
  }

  ngOnInit() {
  }

  quizSelected(selected: boolean) {
    console.log('event received from child:', selected);
  }

  quizDeleted(quiz: Quiz){
    this.quizService.deleteQuiz(quiz);
  }
}
