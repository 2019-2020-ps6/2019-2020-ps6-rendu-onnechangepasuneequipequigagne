import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let EditQuizComponent = class EditQuizComponent {
    constructor(route, quizService, location) {
        this.route = route;
        this.quizService = quizService;
        this.location = location;
        this.quiz = {
            name: "not undefined",
            theme: "none",
            id: "1",
            questions: []
        };
    }
    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        if (id != null) {
            this.quizService.getQuiz(id.toString()).subscribe((q) => {
                this.quiz = q;
            });
        }
    }
};
tslib_1.__decorate([
    Input()
], EditQuizComponent.prototype, "quiz", void 0);
EditQuizComponent = tslib_1.__decorate([
    Component({
        selector: 'app-edit-quiz',
        templateUrl: './edit-quiz.component.html',
        styleUrls: ['./edit-quiz.component.scss']
    })
], EditQuizComponent);
export { EditQuizComponent };
//# sourceMappingURL=edit-quiz.component.js.map