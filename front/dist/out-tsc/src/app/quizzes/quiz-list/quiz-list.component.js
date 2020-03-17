import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let QuizListComponent = class QuizListComponent {
    constructor(quizService) {
        this.quizService = quizService;
        this.quizList = [];
        this.quizService.quizzes$.subscribe((quiz) => this.quizList = quiz);
    }
    ngOnInit() {
    }
    quizSelected(selected) {
        console.log('event received from child:', selected);
    }
    quizDeleted(quiz) {
        console.log("where were you when " + quiz + " is kil\ni was at home eating dorito when phone ring\nobject object is kil\nno\n");
        this.quizService.deleteQuiz(quiz);
    }
};
QuizListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-quiz-list',
        templateUrl: './quiz-list.component.html',
        styleUrls: ['./quiz-list.component.scss']
    })
], QuizListComponent);
export { QuizListComponent };
//# sourceMappingURL=quiz-list.component.js.map