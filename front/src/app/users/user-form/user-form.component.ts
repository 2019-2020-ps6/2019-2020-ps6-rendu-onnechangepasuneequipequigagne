import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {User} from "../../../models/user.model";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  private userForm: FormGroup;
  private imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1024px-OOjs_UI_icon_userAvatar.svg.png";

  constructor(public formBuilder: FormBuilder, public userService: UserService) {
    this.setUserForm();
  }

  ngOnInit() {
  }

  setUserForm() {
    this.userForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      profilePicture: '',
    });
  }

  addUser() {
    const userToCreate: User = this.userForm.getRawValue();
    userToCreate.quizzesId = [];
    userToCreate.quizzesHistorical = [];
    if(!userToCreate.profilePicture){
      userToCreate.profilePicture = this.imageUrl;
    }
    this.userService.addUser(userToCreate);
    this.setUserForm();
    console.log('Add user: ', userToCreate);
  }
}
