import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { QuizService} from '../../../services/quiz.service'
import { Quiz } from 'src/models/quiz.model';
import { Question} from 'src/models/question.model';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user.model';
import {Historical} from '../../../models/historical.model';
import {AnswerOrder} from "../../../models/answerorder.model";

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
    id: string;
    quizName: string;
    score: string;
    answersOrder: AnswerOrder[];
    quizId: string;
    date: string;
  }

  constructor(private route: ActivatedRoute,
    private quizService: QuizService, private userService: UserService,
    private location: Location) {
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
    this.historical.quizId = this.quiz.id;
    this.historical.quizName = this.quiz.name;
    if (this.date.getMonth()<9){
      this.historical.date = this.date.getDate()+"/0"+(this.date.getMonth()+1)+"/"+this.date.getFullYear();
    } else {
      this.historical.date = this.date.getDate()+"/"+(this.date.getMonth()+1)+"/"+this.date.getFullYear();
    }
    this.historical.score = `${score}/${this.quiz.questions.length}`;
  }

  answersOrder(answersOrder: AnswerOrder[]) {
    this.historical.answersOrder = answersOrder;
    this.user.quizzesHistorical.push(this.historical);
    this.userService.setUserQuizzesHistorical(this.historical,this.user.id).subscribe((historical) => this.historical = historical);
    this.userService.updateUser(this.user).subscribe((user) => this.user = user);
  }

}
