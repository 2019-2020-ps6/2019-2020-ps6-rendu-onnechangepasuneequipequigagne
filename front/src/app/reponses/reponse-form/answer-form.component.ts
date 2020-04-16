import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {QuizService} from '../../../services/quiz.service';
import {Answer} from '../../../models/question.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.scss']
})
export class AnswerFormComponent implements OnInit {

  public answerForm: FormGroup;
  private imageUrl = "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png";


  constructor(private formBuilder: FormBuilder, private quizService: QuizService, private route: ActivatedRoute) {
    this.setAnswerForm();
  }

  ngOnInit() {
  }

  setAnswerForm() {
    this.answerForm = this.formBuilder.group({
      value: '',
      isCorrect: false,
      imageURL: '',
    });
  }

  addAnswer() {
    const answerToCreate: Answer = this.answerForm.getRawValue();
    if(!answerToCreate.imageURL){
      answerToCreate.imageURL = this.imageUrl;
    }
    const quizId = +this.route.snapshot.paramMap.get('quizId');
    const questionId = +this.route.snapshot.paramMap.get('questionId');
    if (quizId != null && questionId != null) {
      this.quizService.addAnswer(answerToCreate, quizId.toString(), questionId.toString());
    }
    this.setAnswerForm();
  }

}
