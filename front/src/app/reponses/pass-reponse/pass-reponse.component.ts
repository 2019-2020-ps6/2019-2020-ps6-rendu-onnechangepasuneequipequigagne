import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Answer } from 'src/models/question.model';

@Component({
  selector: 'app-pass-reponse',
  templateUrl: './pass-reponse.component.html',
  styleUrls: ['./pass-reponse.component.scss']
})
export class PassReponseComponent implements OnInit {

  @Input()
  answer: Answer;

  @Output()
  answerSelected: EventEmitter<Answer> = new EventEmitter<Answer>();

  constructor() { }

  ngOnInit() {
  }

  selectAnswer() {
    this.answerSelected.emit(this.answer);
  }

}
