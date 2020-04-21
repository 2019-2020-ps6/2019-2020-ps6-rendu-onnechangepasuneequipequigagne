import { Component, OnInit} from '@angular/core';
import { QuizService} from '../../../services/quiz.service'
import { Quiz } from 'src/models/quiz.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quizzes.component.html',
  styleUrls: ['./edit-quizzes.component.scss']
})
export class EditQuizzesComponent implements OnInit {

  private quizList: Quiz[];
  private trim: string = "";


  constructor(private quizService: QuizService, private router: Router) {
  }

  ngOnInit() {
    this.quizService.quizzes$.subscribe((quizzes) => this.quizList = quizzes);
  }

  editQuiz(quiz: Quiz) {
    const link = ['home/edit-menu/edit-quizzes/'+quiz.id+'/questions'];
    this.router.navigate(link);
  }

  deleteQuiz(quiz: Quiz) {
    if (confirm("Etes-vous sur de supprimer ce quiz ?")) {
      this.quizService.deleteQuiz(quiz);
    }
  }

  search() {
    if(this.trim) {
      this.quizList = this.quizList.filter((quiz) =>
        quiz.name.toLocaleLowerCase().indexOf(this.trim.toLocaleLowerCase()) !== -1
      );
    } else {
      this.ngOnInit();
    }
  }

  goBack() {
    let link = ['home/edit-menu'];
    this.router.navigate(link);
  }


}
