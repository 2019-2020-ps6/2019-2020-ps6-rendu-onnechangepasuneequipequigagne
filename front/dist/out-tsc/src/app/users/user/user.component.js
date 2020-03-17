import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let UserComponent = class UserComponent {
    constructor() {
        this.userDeleted = new EventEmitter();
    }
    deleteUser() {
        this.userDeleted.emit(this.user);
    }
    ngOnInit() {
    }
};
tslib_1.__decorate([
    Input()
], UserComponent.prototype, "user", void 0);
tslib_1.__decorate([
    Output()
], UserComponent.prototype, "userDeleted", void 0);
UserComponent = tslib_1.__decorate([
    Component({
        selector: 'app-user',
        templateUrl: './user.component.html',
        styleUrls: ['./user.component.scss']
    })
], UserComponent);
export { UserComponent };
//# sourceMappingURL=user.component.js.map