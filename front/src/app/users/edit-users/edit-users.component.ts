import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/user.model";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
  export class EditUsersComponent implements OnInit {

  private userList: User[];

  constructor(private userService: UserService, private router: Router) {
    this.userService.users$.subscribe((users) => this.userList = users);
  }

  ngOnInit() {
  }

  userEdited(user: User) {
    const link = ['home/edit-menu/edit-users/'+user.id+'/quizzes'];
    this.router.navigate(link);
  }

  userHistory(user: User) {
    const link = ['home/edit-menu/edit-users/'+user.id+'/quizzes-history'];
    this.router.navigate(link);
  }

  userDeleted(user: User){
    this.userService.deleteUser(user);
  }

}
