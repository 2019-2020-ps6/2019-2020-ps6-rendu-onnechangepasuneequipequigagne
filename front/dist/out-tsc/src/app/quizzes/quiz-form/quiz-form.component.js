import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let QuizFormComponent = class QuizFormComponent {
    constructor(formBuilder, quizService) {
        this.formBuilder = formBuilder;
        this.quizService = quizService;
        this.THEME_LIST = ['Sport', 'Acteur'];
        // Form creation
        this.quizForm = this.formBuilder.group({
            name: [''],
            theme: [''],
            creationDate: Date.now()
        });
        // You can also add validators to your inputs such as required, maxlength or even create your own validator!
        // More information: https://angular.io/guide/reactive-forms#simple-form-validation
        // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
    }
    ngOnInit() {
    }
    addQuiz() {
        // We retrieve here the quiz object from the quizForm and we cast the type "as Quiz".
        const quizToCreate = this.quizForm.getRawValue();
        quizToCreate.id = Math.floor(Math.random() * Math.floor(1000)).toString();
        quizToCreate.questions = [];
        // Do you need to log your object here in your class? Uncomment the code below
        // and open your console in your browser by pressing F12 and choose the tab "Console".
        // You will see your quiz object when you click on the create button.
        //console.log('Add quiz: ', quizToCreate);
        // Now, add your quiz in the list!
        this.quizService.addQuiz(quizToCreate);
    }
};
QuizFormComponent = tslib_1.__decorate([
    Component({
        selector: 'app-quiz-form',
        templateUrl: './quiz-form.component.html',
        styleUrls: ['./quiz-form.component.scss']
    })
], QuizFormComponent);
export { QuizFormComponent };
//# sourceMappingURL=quiz-form.component.js.map