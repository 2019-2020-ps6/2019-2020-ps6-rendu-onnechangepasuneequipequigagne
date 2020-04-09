import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Question, Answer } from 'src/models/question.model';
import {User} from '../../../models/user.model';
import {Quiz} from '../../../models/quiz.model';

@Component({
  selector: 'app-pass-question',
  templateUrl: './pass-question.component.html',
  styleUrls: ['./pass-question.component.scss']
})
export class PassQuestionComponent implements OnInit {

  private foundAnswer: boolean = false;
  private foundAnswerFirstTime: boolean = true;
  private score: number = 0;

  @Input()
  user: User

  @Input()
  quiz: Quiz

  @Input()
  question: Question

  @Input()
  lastQuestion: Boolean;

  @Output()
  finalScore: EventEmitter<number> = new EventEmitter<number>();

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
     this.foundAnswerFirstTime=false;
    } else {
      this.foundAnswer=true;
      if(this.foundAnswerFirstTime){
        this.score++;
      }
      this.question.answers.forEach((a) => {
        document.getElementById(a.value).classList.add("isKill");
      })
      elem.classList.remove("isKill");
    }
  }

  next(){
    this.nextQuestion.emit(true);
    this.question.answers.forEach((a) => {
      document.getElementById(a.value).classList.remove("isKill");
    })
    this.foundAnswer = false;
    this.foundAnswerFirstTime = true;
    if(this.lastQuestion) {
      this.finalScore.emit(this.score);
    }
  }

}
