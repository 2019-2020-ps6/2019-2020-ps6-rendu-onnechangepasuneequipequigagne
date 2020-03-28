import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../../models/user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;

  @Input()
  edit: boolean;

  @Output()
  userEdited: EventEmitter<User> = new EventEmitter<User>();

  @Output()
  userHistory: EventEmitter<User> = new EventEmitter<User>();

  @Output()
  userDeleted: EventEmitter<User> = new EventEmitter<User>();

  constructor() {
    this.edit = false;
  }

  ngOnInit() {
  }

  editUser() {
    this.userEdited.emit(this.user);
  }

  historyUser() {
    this.userHistory.emit(this.user);
  }

  deleteUser() {
    this.userDeleted.emit(this.user);
  }

}
