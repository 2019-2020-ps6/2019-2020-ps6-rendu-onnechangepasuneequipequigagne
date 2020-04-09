import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { QuizService} from '../../../services/quiz.service'
import { Quiz } from 'src/models/quiz.model';
import { Question} from 'src/models/question.model';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user.model';
import {Historical} from '../../../models/historical.model';

@Component({
  selector: 'app-pass-quiz',
  templateUrl: './pass-quiz.component.html',
  styleUrls: ['./pass-quiz.component.scss']
})
export class PassQuizComponent implements OnInit {


  @Input()
  quiz: Quiz;

  @Input()
  question: Question;

  private user: User;

  private lastQuestion: boolean;

  private numQuestion;

  private quizDone;

  private date = new Date();

  private historical: Historical = new class implements Historical {
    date: string;
    id: string;
    quizName: string;
    score: string;
  }

  constructor(private route: ActivatedRoute,
    private quizService: QuizService, private userService: UserService,
    private location: Location) {
      this.historical = {
        quizId: "0",
        score: 0,
        date: this.date.toDateString()
      }
      this.quizDone = false;
      const id = +this.route.snapshot.paramMap.get('quizId');
      this.question = {
        "label":"default",
        answers:[]
      }
      if (id != null){
        this.quizService.getQuiz(id.toString()).subscribe((quiz) => {
          this.quiz = quiz;
          this.numQuestion = 1;
          this.question = this.quiz.questions[this.numQuestion-1];
          this.lastQuestion = this.quiz.questions.length<2;
        });
      }
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.userService.getUser(id.toString()).subscribe((user) => this.user = user);
    }
  }

  nextQuestion(next: boolean){
    if (!this.lastQuestion){
      this.question = this.quiz.questions[this.numQuestion++];
      this.lastQuestion = this.numQuestion==this.quiz.questions.length
    } else {
      this.quizDone=true;
    }
  }

  finalScore(score: number) {
    this.historical.quizName = this.quiz.name;
    this.historical.date = this.date.toDateString();
    this.historical.score = `${score}/${this.quiz.questions.length}`;
    this.user.quizzesHistorical.push(this.historical);
    this.userService.setUserQuizzesHistorical(this.historical,this.user.id);
    this.userService.updateUser(this.user).subscribe((user) => this.user = user);
  }
}
