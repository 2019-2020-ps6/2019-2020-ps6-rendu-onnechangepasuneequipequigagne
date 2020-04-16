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
import {LoginComponent} from './login/login.component';
import {AuthGuard} from '../services/auth-guard.service';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'home/pass-quiz/users', component: UserListComponent, canActivate: [AuthGuard]},
  {path: 'home/pass-quiz/users/:id/quizzes', component: UserQuizzesComponent, canActivate: [AuthGuard]},
  {path: 'home/pass-quiz/users/:id/quizzes/:quizId', component: PassQuizComponent, canActivate: [AuthGuard]},
  {path: 'home/edit-menu', component: EditMenuComponent, canActivate: [AuthGuard]},
  {path: 'home/edit-menu/edit-quizzes', component: EditQuizzesComponent, canActivate: [AuthGuard]},
  {path: 'home/edit-menu/edit-quizzes/:quizId/questions', component: EditQuestionsComponent, canActivate: [AuthGuard]},
  {path: 'home/edit-menu/edit-quizzes/:quizId/questions/:questionId/answers', component: EditAnswersComponent, canActivate: [AuthGuard]},
  {path: 'home/edit-menu/edit-users', component: EditUsersComponent, canActivate: [AuthGuard]},
  {path: 'home/edit-menu/edit-users/:id/quizzes', component: EditUserComponent, canActivate: [AuthGuard]},
  {path: 'home/edit-menu/edit-users/:id/quizzes-historical', component: QuizzesHistoricalComponent, canActivate: [AuthGuard]},
  {path: 'home/edit-menu/edit-users/:id/quizzes-historical/:historicalId/details', component: QuizHistoricalDetailsComponent, canActivate: [AuthGuard]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
