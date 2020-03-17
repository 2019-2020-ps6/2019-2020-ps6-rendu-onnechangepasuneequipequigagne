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
    this.quizService.quizzes$.subscribe((quiz) => this.quizList = quiz);
  }

  ngOnInit() {
  }

  quizSelected(selected: boolean) {
    console.log('event received from child:', selected);
  }
  
  quizDeleted(quiz: Quiz){
    console.log("where were you when " + quiz + " is kil\ni was at home eating dorito when phone ring\nobject object is kil\nno\n");
    this.quizService.deleteQuiz(quiz);
  }
}
