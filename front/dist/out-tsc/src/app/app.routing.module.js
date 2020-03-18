import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { UserFormComponent } from './users/user-form/user-form.component';
const routes = [
    { path: '', component: UserFormComponent },
    { path: ':userid/quiz-list/edit-menu-quiz/:id', component: EditQuizComponent },
    { path: ':userid/quiz-list', component: QuizListComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app.routing.module.js.map
