import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService{

  private quizzes: Quiz[] = [];
  private url = "http://localhost:9428/api/quizzes"

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
    this.quizzes.push(quiz);
    this.quizzes$.next(this.quizzes);
  }

  deleteQuiz(quiz: Quiz){
    const index = this.quizzes.indexOf(quiz);
    this.quizzes.splice(index, 1);
    this.quizzes$.next(this.quizzes);
  }

  getQuiz(id : string): Observable<Quiz> {
    const url = `${this.url}/${id}`;
    return this.http.get<Quiz>(url);
  }

  getQuestions(id : string): Observable<Question[]>{
    return this.http.get<Question[]>(this.url+id+"/questions/");
  }

  addQuestion(id : string, question: Question){

  }
}
