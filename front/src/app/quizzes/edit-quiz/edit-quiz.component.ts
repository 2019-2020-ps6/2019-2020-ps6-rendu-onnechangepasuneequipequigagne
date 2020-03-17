import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { QuizService} from '../../../services/quiz.service'
import { Quiz } from 'src/models/quiz.model';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.scss']
})
export class EditQuizComponent implements OnInit {

  @Input()
  quiz: Quiz;

  constructor(private route: ActivatedRoute,
    private quizService: QuizService,
    private location: Location) {
      this.quiz = {
        name:"not undefined",
        theme:"none",
        id:"1",
        questions: []
      }
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id != null){
      this.quizService.getQuiz(id.toString()).subscribe((q) => {
        this.quiz = q;
      });
    }
  }
}
