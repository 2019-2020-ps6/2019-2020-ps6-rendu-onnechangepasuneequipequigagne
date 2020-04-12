import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Question } from 'src/models/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input()
  question : Question;

  @Output()
  questionEdited: EventEmitter<Question> = new EventEmitter<Question>();

  @Output()
  questionDeleted: EventEmitter<Question> = new EventEmitter<Question>();

  constructor() { }

  ngOnInit() {
  }

  editQuestion() {
    this.questionEdited.emit(this.question);
  }

  deleteQuestion() {
    this.questionDeleted.emit(this.question);
  }

}
