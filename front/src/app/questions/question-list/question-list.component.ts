import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Question } from 'src/models/question.model';
import { QuizService } from 'src/services/quiz.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})



export class QuestionListComponent implements OnInit {

  public questionList: Question[];

  constructor(private route: ActivatedRoute, private quizService: QuizService) {
  }


  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id != null){
       this.quizService.getQuestions(id.toString()).subscribe((questions) => {
         this.questionList = questions;
       });
    }
  }

}
