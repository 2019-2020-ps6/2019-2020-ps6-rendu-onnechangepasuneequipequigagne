import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { QuizFormComponent } from './quizzes/quiz-form/quiz-form.component';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { PassQuizComponent } from './quizzes/pass-quiz/pass-quiz.component';



const routes: Routes = [
    {path: '', component: UserFormComponent},
    {path: ':userid/quiz-list/edit-quiz/:id', component: EditQuizComponent},
    {path: ':userid/quiz-list', component: QuizListComponent},
    {path: ':userid/quiz-list/pass-quiz/:id', component: PassQuizComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}