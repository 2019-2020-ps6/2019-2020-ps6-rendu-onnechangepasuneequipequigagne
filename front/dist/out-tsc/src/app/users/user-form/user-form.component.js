import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let UserFormComponent = class UserFormComponent {
    constructor(userService, formBuilder) {
        this.formBuilder = formBuilder;
        this.initializeUserForm();
        this.userService = userService;
    }
    initializeUserForm() {
        this.userForm = this.formBuilder.group({
            userName: [''],
            profilPicture: ['']
        });
    }
    addUser() {
        const userToCreate = this.userForm.getRawValue();
        this.userService.addUser(userToCreate);
    }
    ngOnInit() {
    }
};
UserFormComponent = tslib_1.__decorate([
    Component({
        selector: 'app-user-form',
        templateUrl: './user-form.component.html',
        styleUrls: ['./user-form.component.scss']
    })
], UserFormComponent);
export { UserFormComponent };
//# sourceMappingURL=user-form.component.js.map