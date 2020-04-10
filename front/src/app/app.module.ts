import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { QuizComponent } from './quizzes/quiz/quiz.component';
import { HeaderComponent } from './header/header.component';
import { QuizFormComponent } from './quizzes/quiz-form/quiz-form.component';
import { EditQuizzesComponent } from './quizzes/edit-quizzes/edit-quizzes.component';
import { QuestionComponent } from './questions/question/question.component';
import { QuestionFormComponent } from './questions/question-form/question-form.component';
import { QuestionListComponent } from './questions/question-list/question-list.component';
import { UserComponent } from './users/user/user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { PassQuizComponent } from './quizzes/pass-quiz/pass-quiz.component';
import { PassQuestionComponent } from './questions/pass-question/pass-question.component';
import { PassReponseComponent } from './reponses/pass-reponse/pass-reponse.component';
import {HomeComponent} from './home/home.component';
import {EditMenuComponent} from './edit-menu/edit-menu.component';
import {UserQuizzesComponent} from './users/user-quizzes/user-quizzes.component';
import {EditUsersComponent} from './users/edit-users/edit-users.component';
import {EditUserComponent} from './users/edit-user/edit-user.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {QuizzesHistoricalComponent} from './historical/quizzes-historical/quizzes-historical.component';
import {QuizHistoricalComponent} from './historical/quiz-historical/quiz-historical.component';
import {QuizHistoricalDetailsComponent} from './historical/quiz-historical-details/quiz-historical-details.component';


@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    QuizComponent,
    HeaderComponent,
    QuizFormComponent,
    EditQuizzesComponent,
    QuestionComponent,
    QuestionFormComponent,
    QuestionListComponent,
    UserComponent,
    UserListComponent,
    UserFormComponent,
    PassQuizComponent,
    PassQuestionComponent,
    PassReponseComponent,
    HomeComponent,
    EditMenuComponent,
    UserQuizzesComponent,
    EditUsersComponent,
    EditUserComponent,
    QuizHistoricalComponent,
    QuizHistoricalDetailsComponent,
    QuizzesHistoricalComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
