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
  userDeleted: EventEmitter<User> = new EventEmitter<User>();

  deleteUser(){
    this.userDeleted.emit(this.user);
  }

  ngOnInit() {
  }

}
