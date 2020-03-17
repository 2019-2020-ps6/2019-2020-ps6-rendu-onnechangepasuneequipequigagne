import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let QuestionFormComponent = class QuestionFormComponent {
    constructor(formBuilder, quizService, route) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.initializeQuestionForm();
        this.quizService = quizService;
    }
    initializeQuestionForm() {
        this.questionForm = this.formBuilder.group({
            label: [''],
            answers: this.formBuilder.array([])
        });
    }
    get answers() {
        return this.questionForm.get('answers');
    }
    createAnswer() {
        return this.formBuilder.group({
            value: '',
            isCorrect: false,
        });
    }
    addAnswer() {
        this.answers.push(this.createAnswer());
    }
    addQuestion() {
        const id = this.route.snapshot.paramMap.get('id');
        const question = this.questionForm.getRawValue();
        const labelQuestion = {
            label: question.label,
        };
        this.quizService.addQuestion(id, labelQuestion);
    }
    ngOnInit() {
    }
};
QuestionFormComponent = tslib_1.__decorate([
    Component({
        selector: 'app-question-form',
        templateUrl: './question-form.component.html',
        styleUrls: ['./question-form.component.scss']
    })
], QuestionFormComponent);
export { QuestionFormComponent };
//# sourceMappingURL=question-form.component.js.map