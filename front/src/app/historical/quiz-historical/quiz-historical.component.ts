import {Component, Input, OnInit} from '@angular/core';
import {Historical} from '../../../models/historical.model';

@Component({
  selector: 'app-quiz-historical',
  templateUrl: './quiz-historical.component.html',
  styleUrls: ['./quiz-historical.component.scss']
})
export class QuizHistoricalComponent implements OnInit {

  @Input()
  historical: Historical;

  constructor( ) {
  }


  ngOnInit() {
  }

}
