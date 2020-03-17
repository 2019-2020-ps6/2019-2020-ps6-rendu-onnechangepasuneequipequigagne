import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { QuizService } from 'src/services/quiz.service';
import { Question } from 'src/models/question.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  private questionForm;
  private quizService;

  constructor(public formBuilder: FormBuilder, quizService : QuizService, private route: ActivatedRoute) { 
    this.initializeQuestionForm();
    this.quizService = quizService;
  }

  private initializeQuestionForm() {
    this.questionForm = this.formBuilder.group({
      label: [''],
      answers: this.formBuilder.array([])
    });
  }

  get answers(){
    return this.questionForm.get('answers') as FormArray;
  }

  private createAnswer(){
    return this.formBuilder.group({
      value: '',
      isCorrect: false,
    });
  }

  addAnswer(){
    this.answers.push(this.createAnswer());
  }

  addQuestion(){
    const id = this.route.snapshot.paramMap.get('id');
    const question: Question = this.questionForm.getRawValue() as Question;
    const labelQuestion = {
      label: question.label,
    }
    this.quizService.addQuestion(id, labelQuestion);
  }

  ngOnInit() {
  }

}
