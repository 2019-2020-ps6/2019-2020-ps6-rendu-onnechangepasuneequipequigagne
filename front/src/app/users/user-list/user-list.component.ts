import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { User } from 'src/models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  private userList: User[];
  private trim: string = "";

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.userService.users$.subscribe((users) => this.userList = users);
  }

  search() {
      if(this.trim) {
        this.userList = this.userList.filter((user) =>
          user.firstName.toLocaleLowerCase().indexOf(this.trim.toLocaleLowerCase()) !== -1
        );
      } else {
        this.ngOnInit();
      }
  }

  goBack() {
    let link = ['home'];
    this.router.navigate(link);
  }

}
