import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let QuizService = class QuizService {
    constructor(http) {
        this.http = http;
        //private url = "https://api.myjson.com/bins/13ajhy";
        this.url = "http://localhost:9428/api/quizzes/";
        /**
         * Observable which contains the list of the quiz.
         * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
         */
        this.quizzes$ = new BehaviorSubject(this.quizzes);
        this.setQuizzesFromUrl();
    }
    setQuizzesFromUrl() {
        this.http.get(this.url).subscribe(quizzes => {
            this.quizzes = quizzes;
            this.quizzes$.next(this.quizzes);
        });
    }
    addQuiz(quiz) {
        // You need here to update the list of quiz and then update our observable (Subject) with the new list
        // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
        this.quizzes.push(quiz);
        this.quizzes$.next(this.quizzes);
    }
    deleteQuiz(quiz) {
        var index = this.quizzes.indexOf(quiz);
        this.quizzes.splice(index, 1);
        this.quizzes$.next(this.quizzes);
    }
    getQuiz(id) {
        return this.http.get(this.url + id);
    }
    getQuestions(id) {
        return this.http.get(this.url + id + "/questions/");
    }
    addQuestion(id, question) {
        console.log(this.url + id + "/questions/");
        this.http.post(this.url + id + "/questions/", question).subscribe(quizzes => {
            this.quizzes = quizzes;
            this.quizzes$.next(this.quizzes);
        });
    }
};
QuizService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], QuizService);
export { QuizService };
//# sourceMappingURL=quiz.service.js.map