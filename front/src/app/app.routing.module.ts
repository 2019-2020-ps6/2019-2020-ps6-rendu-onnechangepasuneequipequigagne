import {NgModule} from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import {QuizListComponent} from './quizzes/quiz-list/quiz-list.component';
import {EditQuizComponent} from './quizzes/edit-quiz/edit-quiz.component';
import {PassQuizComponent} from './quizzes/pass-quiz/pass-quiz.component';
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'Home/pass-quiz/quizzes', component: QuizListComponent},
  {path: 'Home/edit/edit-quiz/quizzes/:id', component: EditQuizComponent},
  {path: 'Home/pass-quiz/quizzes/:id', component: PassQuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
