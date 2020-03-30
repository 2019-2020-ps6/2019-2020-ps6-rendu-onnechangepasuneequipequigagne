import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PassQuizComponent} from './quizzes/pass-quiz/pass-quiz.component';
import {HomeComponent} from './home/home.component';
import {EditMenuComponent} from './edit-menu/edit-menu.component';
import {UserListComponent} from './users/user-list/user-list.component';
import {UserQuizzesComponent} from './users/user-quizzes/user-quizzes.component';
import {EditUsersComponent} from './users/edit-users/edit-users.component';
import {EditUserComponent} from './users/edit-user/edit-user.component';
import {UserHistoryComponent} from './users/user-history/user-history.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'home/pass-quiz/users', component: UserListComponent},
  {path: 'home/pass-quiz/users/:id/quizzes', component: UserQuizzesComponent},
  {path: 'home/pass-quiz/users/:id/quizzes/:quizId', component: PassQuizComponent},
  {path: 'home/edit-menu', component: EditMenuComponent},
  {path: 'home/edit-menu/edit-users', component: EditUsersComponent},
  {path: 'home/edit-menu/edit-users/:id/quizzes', component: EditUserComponent},
  {path: 'home/edit-menu/edit-users/:id/quizzes-history', component: UserHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
