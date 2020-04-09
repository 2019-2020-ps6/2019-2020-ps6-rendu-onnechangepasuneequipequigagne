import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit {

  private quizForm: FormGroup;
  private imageUrl = "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png";

  constructor(public formBuilder: FormBuilder, public quizService: QuizService) {
    this.quizForm = this.formBuilder.group({
      name: '',
      theme: '',
      imageURL: '',
    });
  }

  ngOnInit() {
  }

  addQuiz() {
    const quizToCreate: Quiz = this.quizForm.getRawValue();
    if(!quizToCreate.imageURL){
      quizToCreate.imageURL = this.imageUrl;
    }
    this.quizService.addQuiz(quizToCreate);
    console.log('quiz created: ', quizToCreate);
  }
}
