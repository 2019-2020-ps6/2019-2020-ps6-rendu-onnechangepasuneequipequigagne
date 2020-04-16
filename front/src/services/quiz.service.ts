import { Injectable} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Quiz } from '../models/quiz.model';
import {Answer, Question} from '../models/question.model';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService{

  private quizzes: Quiz[] = [];
  private questions: Question[] = [];
  private answers: Answer[] = [];
  private url = 'http://localhost:9428/api/quizzes';

  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizzes);
  public questions$: BehaviorSubject<Question[]> = new BehaviorSubject(this.questions);
  public answers$: BehaviorSubject<Answer[]> = new BehaviorSubject(this.answers);


  constructor(private http: HttpClient){
    this.setQuizzesFromUrl();
  }

  setQuizzesFromUrl(){
    this.http.get<Quiz[]>(this.url).subscribe( quizzes => {
      this.quizzes = quizzes;
      this.quizzes$.next(this.quizzes);
    });
  }

  setQuestionsFromUrl(quizId: string){
    const url = `${this.url}/${quizId}/questions`;
    this.http.get<Question[]>(url).subscribe( questions => {
      this.questions = questions;
      this.questions$.next(this.questions);
    });
  }

  setAnswersFromUrl(quizId: string, questionId: string){
    const url = `${this.url}/${quizId}/questions/${questionId}/answers`;
    this.http.get<Answer[]>(url).subscribe( answers => {
      this.answers = answers;
      this.answers$.next(this.answers);
    });
  }

  addQuiz(quiz: Quiz) {
    this.http.post<Quiz>(this.url,quiz).subscribe((quiz) => {
      this.quizzes.push(quiz);
      this.quizzes$.next(this.quizzes);
    });
  }

  deleteQuiz(quiz: Quiz){
    const quizUrl = `${this.url}/${quiz.id}`;
    const index = this.quizzes.indexOf(quiz);
    this.quizzes.splice(index, 1);
    this.quizzes$.next(this.quizzes);
    this.http.delete<Quiz>(quizUrl).subscribe();
  }

  getQuiz(id : string): Observable<Quiz> {
    const url = `${this.url}/${id}`;
    return this.http.get<Quiz>(url);
  }

  getQuestions(quizId : string): Observable<Question[]>{
    const url = `${this.url}/${quizId}/questions`;
    return this.http.get<Question[]>(url);
  }

  addQuestion(question: Question, quizId: string) {
    const questionUrl = `${this.url}/${quizId}/questions`;
    this.http.post<Question>(questionUrl, question).subscribe((question) => {
      this.questions.push(question);
      this.questions$.next(this.questions);
    });
  }

  deleteQuestion(question: Question, quizId: string) {
    const url = `${this.url}/${quizId}/questions/${question.id}`;
    const index = this.questions.indexOf(question);
    this.questions.splice(index, 1);
    this.questions$.next(this.questions);
    this.http.delete<Question>(url).subscribe();
  }

  addAnswer(answer: Answer, quizId: string, questionId: string) {
    const answerUrl = `${this.url}/${quizId}/questions/${questionId}/answers`;
    this.http.post<Answer>(answerUrl, answer).subscribe((answer) => {
      this.answers.push(answer);
      this.answers$.next(this.answers);
    });
  }

  deleteAnswer(answer: Answer, quizId: string, questionId: string) {
    const url = `${this.url}/${quizId}/questions/${questionId}/answers/${answer.id}`;
    const index = this.answers.indexOf(answer);
    this.answers.splice(index, 1);
    this.answers$.next(this.answers);
    this.http.delete<Answer>(url).subscribe();
  }

}
