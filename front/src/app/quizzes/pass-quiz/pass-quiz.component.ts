import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { QuizService} from '../../../services/quiz.service'
import { Quiz } from 'src/models/quiz.model';
import { Question, Answer } from 'src/models/question.model';

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

  private numQuestion;

  private quizDone;

  constructor(private route: ActivatedRoute,
    private quizService: QuizService,
    private location: Location) {
      this.quizDone = false;
      const id = +this.route.snapshot.paramMap.get('id');
      this.question = {
        "label":"default",
        answers:[]
      }
      if (id != null){
        this.quizService.getQuiz(id.toString()).subscribe((q) => {
          this.quiz = q;
          this.numQuestion = 1;
          this.question = this.quiz.questions[this.numQuestion-1];
        });
      }
  }

  ngOnInit() {
  }

  nextQuestion(next: boolean){
    if (this.numQuestion<this.quiz.questions.length){
      this.question = this.quiz.questions[++this.numQuestion - 1];
    } else {
      this.quizDone=true;
    }
  }
}
