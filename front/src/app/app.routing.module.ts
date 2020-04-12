import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PassQuizComponent} from './quizzes/pass-quiz/pass-quiz.component';
import {HomeComponent} from './home/home.component';
import {EditMenuComponent} from './edit-menu/edit-menu.component';
import {UserListComponent} from './users/user-list/user-list.component';
import {UserQuizzesComponent} from './users/user-quizzes/user-quizzes.component';
import {EditUserComponent} from './users/edit-user/edit-user.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {EditUsersComponent} from './users/edit-users/edit-users.component';
import {EditQuizzesComponent} from './quizzes/edit-quizzes/edit-quizzes.component';
import {QuizzesHistoricalComponent} from './historical/quizzes-historical/quizzes-historical.component';
import {QuizHistoricalDetailsComponent} from './historical/quiz-historical-details/quiz-historical-details.component';
import {EditQuestionsComponent} from './questions/edit-questions/edit-questions.component';
import {EditAnswersComponent} from './reponses/edit-reponses/edit-answers.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'home/pass-quiz/users', component: UserListComponent},
  {path: 'home/pass-quiz/users/:id/quizzes', component: UserQuizzesComponent},
  {path: 'home/pass-quiz/users/:id/quizzes/:quizId', component: PassQuizComponent},
  {path: 'home/edit-menu', component: EditMenuComponent},
  {path: 'home/edit-menu/edit-quizzes', component: EditQuizzesComponent},
  {path: 'home/edit-menu/edit-quizzes/:quizId/questions', component: EditQuestionsComponent},
  {path: 'home/edit-menu/edit-quizzes/:quizId/questions/:questionId/answers', component: EditAnswersComponent},
  {path: 'home/edit-menu/edit-users', component: EditUsersComponent},
  {path: 'home/edit-menu/edit-users/:id/quizzes', component: EditUserComponent},
  {path: 'home/edit-menu/edit-users/:id/quizzes-historical', component: QuizzesHistoricalComponent},
  {path: 'home/edit-menu/edit-users/:id/quizzes-historical/:historicalId/details', component: QuizHistoricalDetailsComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
