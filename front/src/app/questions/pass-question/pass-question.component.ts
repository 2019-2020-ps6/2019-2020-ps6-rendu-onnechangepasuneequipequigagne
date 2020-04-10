import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Question, Answer } from 'src/models/question.model';
import {User} from '../../../models/user.model';
import {Quiz} from '../../../models/quiz.model';
import {AnswerOrder} from '../../../models/answerorder.model';

@Component({
  selector: 'app-pass-question',
  templateUrl: './pass-question.component.html',
  styleUrls: ['./pass-question.component.scss']
})
export class PassQuestionComponent implements OnInit {

  private foundAnswer: boolean = false;
  private foundAnswerFirstTime: boolean = true;
  private score: number = 0;
  private answersIds: string[] = [];
  private answersOrder: AnswerOrder[] = [];
  private answerOrder: AnswerOrder;


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
  quizAnswersOrder: EventEmitter<AnswerOrder[]> = new EventEmitter<AnswerOrder[]>();

  @Output()
  nextQuestion: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor() {
  }

  ngOnInit() {
  }

  answerSelected(answer: Answer){
    const elem =  document.getElementById(answer.value);
    if (!answer.isCorrect){
     elem.classList.add("isKill");
     this.foundAnswerFirstTime=false;
     this.answersIds.push(answer.id);
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
    this.answerOrder = new class implements AnswerOrder {
      falseAnswersIds: string[] ;
    }
    this.answerOrder.falseAnswersIds = this.answersIds;
    this.answersOrder.push(this.answerOrder);
    this.nextQuestion.emit(true);
    this.question.answers.forEach((a) => {
      document.getElementById(a.value).classList.remove("isKill");
    })
    this.foundAnswer = false;
    this.foundAnswerFirstTime = true;
    this.answersIds = [];
    if(this.lastQuestion) {
      this.finalScore.emit(this.score);
      this.quizAnswersOrder.emit(this.answersOrder);
    }
  }

}
