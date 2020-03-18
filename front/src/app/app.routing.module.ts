import {NgModule} from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import {QuizListComponent} from './quizzes/quiz-list/quiz-list.component';
import {PassQuizComponent} from './quizzes/pass-quiz/pass-quiz.component';
import {HomeComponent} from "./home/home.component";
import {EditMenuComponent} from "./edit-menu/edit-menu.component";


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'home/pass-quiz/quizzes', component: QuizListComponent},
  {path: 'home/pass-quiz/quizzes/:id', component: PassQuizComponent},
  {path: 'home/edit-menu', component: EditMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
