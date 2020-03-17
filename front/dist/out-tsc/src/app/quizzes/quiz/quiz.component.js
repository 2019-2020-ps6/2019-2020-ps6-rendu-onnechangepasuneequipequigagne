import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let QuizComponent = class QuizComponent {
    constructor() {
        this.quizSelected = new EventEmitter();
        this.quizDeleted = new EventEmitter();
    }
    ngOnInit() {
    }
    selectQuiz() {
        this.quizSelected.emit(true);
    }
    deleteQuiz() {
        this.quizDeleted.emit(this.quiz);
    }
};
tslib_1.__decorate([
    Input()
], QuizComponent.prototype, "quiz", void 0);
tslib_1.__decorate([
    Output()
], QuizComponent.prototype, "quizSelected", void 0);
tslib_1.__decorate([
    Output()
], QuizComponent.prototype, "quizDeleted", void 0);
QuizComponent = tslib_1.__decorate([
    Component({
        selector: 'app-quiz',
        templateUrl: './quiz.component.html',
        styleUrls: ['./quiz.component.scss']
    })
], QuizComponent);
export { QuizComponent };
//# sourceMappingURL=quiz.component.js.map