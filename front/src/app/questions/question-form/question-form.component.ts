import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Question} from '../../../models/question.model';
import {QuizService} from '../../../services/quiz.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  public questionForm: FormGroup;
  private imageUrl = "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png";


  constructor(private formBuilder: FormBuilder, private quizService: QuizService, private route: ActivatedRoute) {
    this.questionForm = this.formBuilder.group({
      label: '',
      imageURL: '',
    });
  }

  ngOnInit() {
  }

  addQuestion() {
    const questionToCreate: Question = this.questionForm.getRawValue();
    if(!questionToCreate.imageURL){
      questionToCreate.imageURL = this.imageUrl;
    }
    const id = +this.route.snapshot.paramMap.get('quizId');
    if (id != null) {
      this.quizService.addQuestion(questionToCreate, id.toString());
    }
  }

}
