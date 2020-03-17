import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { QuizFormComponent } from './quizzes/quiz-form/quiz-form.component';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { UserFormComponent } from './users/user-form/user-form.component';



const routes: Routes = [
    {path: '', component: UserFormComponent},
    {path: ':userid/quiz-list/edit-quiz/:id', component: EditQuizComponent},
    {path: ':userid/quiz-list', component: QuizListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}