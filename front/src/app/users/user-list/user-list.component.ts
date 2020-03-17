import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: User[];
  userService: UserService;

  constructor(userService: UserService) {
    this.userList = userService.getUsers();
    this.userService = userService;
  }

  userDeleted(user: User){
    this.userService.deleteUser(user);
  }

  ngOnInit() {}

}
