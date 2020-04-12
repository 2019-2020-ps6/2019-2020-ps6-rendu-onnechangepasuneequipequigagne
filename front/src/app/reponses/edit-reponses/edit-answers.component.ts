import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { QuizService} from '../../../services/quiz.service'
import {Answer} from 'src/models/question.model';

@Component({
  selector: 'app-edit-answers',
  templateUrl: './edit-answers.component.html',
  styleUrls: ['./edit-answers.component.scss']
})
export class EditAnswersComponent implements OnInit {

  public answerList: Answer[] = [];
  public quizId: number;
  public questionId: number;

  constructor(private quizService: QuizService, private router: Router, private route: ActivatedRoute) {
    this.quizId = +this.route.snapshot.paramMap.get('quizId');
    this.questionId = +this.route.snapshot.paramMap.get('questionId');
    if (this.quizId != null && this.questionId != null) {
      this.quizService.setAnswersFromUrl(this.quizId.toString(), this.questionId.toString());
    }
    this.quizService.answers$.subscribe((answers) => this.answerList = answers);
  }

  ngOnInit() {
  }


  deleteAnswer(answer: Answer) {
    if(confirm("Etes-vous sur de supprimer cette réponse ?")) {
      this.quizService.deleteAnswer(answer, this.quizId.toString(), this.questionId.toString());
    }
  }

}
