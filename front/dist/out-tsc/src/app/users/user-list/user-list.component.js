import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let UserListComponent = class UserListComponent {
    constructor(userService) {
        this.userList = userService.getUsers();
        this.userService = userService;
    }
    userDeleted(user) {
        this.userService.deleteUser(user);
    }
    ngOnInit() { }
};
UserListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-user-list',
        templateUrl: './user-list.component.html',
        styleUrls: ['./user-list.component.scss']
    })
], UserListComponent);
export { UserListComponent };
//# sourceMappingURL=user-list.component.js.map