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

  ngOnInit() {

  }

}
