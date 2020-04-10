import {Component, OnInit} from '@angular/core';
import {Quiz} from '../../../models/quiz.model';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service';
import {Historical} from '../../../models/historical.model';
import {QuizService} from '../../../services/quiz.service';
import {AnswerOrder} from '../../../models/answerorder.model';

@Component({
  selector: 'app-quiz-historical-details',
  templateUrl: './quiz-historical-details.component.html',
  styleUrls: ['./quiz-historical-details.component.scss']
})
export class QuizHistoricalDetailsComponent implements OnInit {

  private quiz: Quiz;
  private historical: Historical;
  private answerOrder: AnswerOrder = new class implements AnswerOrder {
    falseAnswersIds: string[];
  }
  private questionIndex: number = 0;

  constructor(private userService: UserService, private quizService: QuizService, private router: Router, private route: ActivatedRoute) {
  }


  ngOnInit() {
    const historicalId = +this.route.snapshot.paramMap.get('historicalId');
    const userId = +this.route.snapshot.paramMap.get('id');
    if (historicalId != null && userId != null) {
      this.userService.getUserQuizHistorical(historicalId.toString(),userId.toString()).subscribe((historical) => {
        this.historical = historical;
        this.quizService.getQuiz(this.historical.quizId.toString()).subscribe((quiz) => this.quiz = quiz);
      });
    }
  }

  isTrueOrFalse(answerId: string): boolean {
    const id = this.answerOrder.falseAnswersIds.find((item) => item == answerId);
    return !!id;
  }


  nextQuestion(): boolean {
    this.answerOrder = this.historical.answersOrder[this.questionIndex++];
    return true;
  }

  goBack() {
    const link = [`home/edit-menu/edit-users/${this.historical.userId}/quizzes-historical`];
    this.router.navigate(link);
  }

}
