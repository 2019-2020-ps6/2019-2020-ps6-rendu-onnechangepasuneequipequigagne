import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { element } from 'protractor';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

    private users: User[] = [];
    public users$: BehaviorSubject<User[]> = new BehaviorSubject(this.users);
  
    constructor(){
        
    }

    addUser(userToAdd: User){
      this.users.push(userToAdd);
      this.users$.next(this.users);
    }

    deleteUser(userToDel: User){
      var index = this.users.indexOf(userToDel);
      this.users.splice(index, 1);
      this.users$.next(this.users);
    }

    getUser(user: User){
      const findUser = (user) => user.userName === user.userName;
      const index = this.users.findIndex(findUser);
      if (index !=-1){
        return this.users[index];
      }
      return null;
    }



    getUsers(){
      return this.users;
    }

}