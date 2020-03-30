import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quiz } from '../../../models/quiz.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  @Input()
  quiz: Quiz;

  @Input()
  edit: boolean;

  @Input()
  isAdded: boolean;

  @Output()
  quizAdded: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  @Output()
  quizSuspended: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  @Output()
  quizDeleted: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  constructor() {
    this.edit = false;
  }


  ngOnInit() {
  }

  addQuiz() {
    this.quizAdded.emit(this.quiz);
  }

  suspendQuiz() {
    this.quizSuspended.emit(this.quiz);
  }


  deleteQuiz(){
    this.quizDeleted.emit(this.quiz);
  }
}
