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

  constructor() { 
  }

  ngOnInit() {
  }

  answerSelected(answer: Answer){
    var elem =  document.getElementById(answer.value);
    if (!answer.isCorrect){
     elem.classList.add("isKill");
    } else {
      this.question.answers.forEach((a) => {
        document.getElementById(a.value).classList.add("isKill");
      })
      elem.classList.remove("isKill");
      document.getElementById("nextButton").classList.remove("isKill");
    }
  }

  next(){
    this.nextQuestion.emit(true);
    document.getElementById("nextButton").classList.add("isKill");
  }

}
