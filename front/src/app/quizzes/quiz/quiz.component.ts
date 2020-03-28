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
  quizSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  quizDeleted: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  constructor() {
    this.edit = false;
  }


  ngOnInit() {
  }

  selectQuiz() {
    this.quizSelected.emit(true);
  }

  deleteQuiz(){
    this.quizDeleted.emit(this.quiz);
  }
}
