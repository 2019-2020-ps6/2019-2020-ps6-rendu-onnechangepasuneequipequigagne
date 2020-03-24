import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { User } from 'src/models/user.model'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  @Input()
  user : User;

  @Output()
  userSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  userDeleted: EventEmitter<User> = new EventEmitter<User>();

  selectUser() {
    this.userSelected.emit(true);
  }

  deleteUser(){
    this.userDeleted.emit(this.user);
  }

  ngOnInit() {
  }

}
