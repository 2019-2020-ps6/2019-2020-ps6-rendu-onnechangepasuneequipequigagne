import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let QuestionListComponent = class QuestionListComponent {
    constructor(route, quizService) {
        this.route = route;
        this.quizService = quizService;
    }
    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        if (id != null) {
            this.quizService.getQuestions(id.toString()).subscribe((questions) => {
                this.questionList = questions;
            });
        }
    }
};
QuestionListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-question-list',
        templateUrl: './question-list.component.html',
        styleUrls: ['./question-list.component.scss']
    })
], QuestionListComponent);
export { QuestionListComponent };
//# sourceMappingURL=question-list.component.js.map