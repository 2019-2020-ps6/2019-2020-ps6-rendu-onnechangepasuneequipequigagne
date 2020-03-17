import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { QUIZ_LIST } from '../mocks/quiz-list.mock';
import { element } from 'protractor';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService{
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

   /**
    * The list of quiz.
    * The list is retrieved from the mock.
    */
  private quizzes;
  //private url = "https://api.myjson.com/bins/13ajhy";
  private url = "http://localhost:9428/api/quizzes/"
  private quiz;

  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizzes);

  constructor(private http: HttpClient){
    this.setQuizzesFromUrl();
  }

  setQuizzesFromUrl(){
    this.http.get<Quiz[]>(this.url).subscribe( quizzes => {
      this.quizzes = quizzes;
      this.quizzes$.next(this.quizzes);
    });
  }

  addQuiz(quiz: Quiz) {
    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
    this.quizzes.push(quiz);
    this.quizzes$.next(this.quizzes);
  }

  deleteQuiz(quiz: Quiz){
    var index = this.quizzes.indexOf(quiz);
    this.quizzes.splice(index, 1);
    this.quizzes$.next(this.quizzes);
  }

  getQuiz(id : string): Observable<Quiz> {
    return this.http.get<Quiz>(this.url+id);
  }

  getQuestions(id : string): Observable<Question[]>{
    return this.http.get<Question[]>(this.url+id+"/questions/");
  }

  addQuestion(id : string, question: Question){
    this.http.post<Object>(this.url+id+"/questions/", question).subscribe( quizzes => {
      this.quizzes.push({...question, answers:[]});
    });
  }
}
