import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Question, Answer } from 'src/models/question.model';
import { Quiz } from 'src/models/quiz.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-pass-question',
  templateUrl: './pass-question.component.html',
  styleUrls: ['./pass-question.component.scss']
})
export class PassQuestionComponent implements OnInit {

  private foundAnswer = false;


  @Input()
  question: Question

  @Input()
  lastQuestion: Boolean;

  @Output()
  nextQuestion: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor() {
  }

  ngOnInit() {
  }

  answerSelected(answer: Answer){
    var elem =  document.getElementById(answer.value);
    if (!answer.isCorrect){
     elem.classList.add("isKill");
    } else {
      this.foundAnswer=true;
      this.question.answers.forEach((a) => {
        document.getElementById(a.value).classList.add("isKill");
      })
      elem.classList.remove("isKill");
    }
  }

  next(){
    this.nextQuestion.emit(true);
    this.foundAnswer = false;
  }

}
