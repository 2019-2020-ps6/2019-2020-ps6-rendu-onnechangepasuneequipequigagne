import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question, Answer } from 'src/models/question.model';
import { Quiz } from 'src/models/quiz.model';

@Component({
  selector: 'app-pass-question',
  templateUrl: './pass-question.component.html',
  styleUrls: ['./pass-question.component.scss']
})
export class PassQuestionComponent implements OnInit {

  @Input()
  question: Question;

  @Output()
  nextQuestion: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  answerSelected(answer: Answer){
    if (!answer.isCorrect){
      var index = this.question.answer.indexOf(answer);
      if (index > -1){
        this.question.answer.splice(index,1);
      }
    } else {
      this.nextQuestion.emit(true);
    }
  }

}
