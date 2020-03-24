import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user.model';
import {Quiz} from "../models/quiz.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [];
  private url = 'http://localhost:9428/api/users';

  public users$: BehaviorSubject<User[]> = new BehaviorSubject(this.users);

  constructor(private http: HttpClient) {
    this.setUsersFromUrl();
  }

  setUsersFromUrl() {
    this.http.get<User[]>(this.url).subscribe((users) => {
      console.log(users);
      this.users = users;
      this.users$.next(this.users);
    });
  }

  getUser(id: string): Observable<User>{
    const userUrl = `${this.url}/${id}`;
    return this.http.get<User>(userUrl);
  }

  getUserQuizzes(id: string): Observable<Quiz[]>{
    const userQuizzesUrl = `${this.url}/${id}/quizzes`;
    return this.http.get<Quiz[]>(userQuizzesUrl);
  }

  addUser(user: User) {
    this.users.push(user);
    this.users$.next(this.users);
  }

  deleteUser(user: User) {
    const id = this.users.indexOf(user);
    this.users.splice(id, 1);
    this.users$.next(this.users);
  }
}

