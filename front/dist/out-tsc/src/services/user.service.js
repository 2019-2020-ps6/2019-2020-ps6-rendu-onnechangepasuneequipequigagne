import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let UserService = class UserService {
    constructor() {
        this.users = [];
        this.users$ = new BehaviorSubject(this.users);
    }
    addUser(userToAdd) {
        this.users.push(userToAdd);
        this.users$.next(this.users);
    }
    deleteUser(userToDel) {
        var index = this.users.indexOf(userToDel);
        this.users.splice(index, 1);
        this.users$.next(this.users);
    }
    getUser(user) {
        const findUser = (user) => user.userName === user.userName;
        const index = this.users.findIndex(findUser);
        if (index != -1) {
            return this.users[index];
        }
        return null;
    }
    getUsers() {
        return this.users;
    }
};
UserService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map