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
        selector: 'app-edit-menu-quiz',
        templateUrl: './edit-menu-quiz.component.html',
        styleUrls: ['./edit-menu-quiz.component.scss']
    })
], EditQuizComponent);
export { EditQuizComponent };
//# sourceMappingURL=edit-menu-quiz.component.js.map
