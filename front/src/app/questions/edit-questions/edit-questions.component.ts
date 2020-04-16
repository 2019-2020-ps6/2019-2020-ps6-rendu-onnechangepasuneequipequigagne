import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { QuizService} from '../../../services/quiz.service'
import {Question} from 'src/models/question.model';

@Component({
  selector: 'app-edit-questions',
  templateUrl: './edit-questions.component.html',
  styleUrls: ['./edit-questions.component.scss']
})
export class EditQuestionsComponent implements OnInit {

  public questionList: Question[] = [];
  public quizId: number;
  private trim: string = "";


  constructor(private quizService: QuizService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.quizId = +this.route.snapshot.paramMap.get('quizId');
    if (this.quizId != null) {
      this.quizService.setQuestionsFromUrl(this.quizId.toString());
    }
    this.quizService.questions$.subscribe((questions) => this.questionList = questions);
  }

  editQuestion(question: Question) {
    const link = ['home/edit-menu/edit-quizzes/'+this.quizId+'/questions/'+question.id+'/answers'];
    this.router.navigate(link);
  }

  deleteQuestion(question: Question) {
    if(confirm("Etes-vous sur de supprimer cette question ?")){
      this.quizService.deleteQuestion(question, this.quizId.toString());
    }
  }

  search() {
    if(this.trim) {
      this.questionList = this.questionList.filter((question) =>
        question.label.toLocaleLowerCase().indexOf(this.trim.toLocaleLowerCase()) !== -1
      );
    } else {
      this.ngOnInit();
    }
  }

}
