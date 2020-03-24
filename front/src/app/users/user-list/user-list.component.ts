import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  private userList: User[];

  constructor(private userService: UserService) {
    this.userService.users$.subscribe((users) => this.userList = users);
  }

  userSelected(selected: boolean) {
    console.log('event received from child:', selected);
  }

  userDeleted(user: User){
    this.userService.deleteUser(user);
  }

  ngOnInit() {

  }

}
