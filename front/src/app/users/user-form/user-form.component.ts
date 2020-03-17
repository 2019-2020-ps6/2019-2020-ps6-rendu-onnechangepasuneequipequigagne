import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { FormBuilder, FormArray } from '@angular/forms';
import { User } from 'src/models/user.model'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})

export class UserFormComponent implements OnInit {

  private userForm;
  private userService;

  constructor( userService: UserService, public formBuilder: FormBuilder) { 
    this.initializeUserForm();
    this.userService = userService;
  }

  private initializeUserForm(){
    this.userForm = this.formBuilder.group({
      userName: [''],
      profilPicture: ['']
    });
  }
  

  private addUser(){
    const userToCreate: User = this.userForm.getRawValue() as User;
    this.userService.addUser(userToCreate);
  }

  ngOnInit() {
  }

}
