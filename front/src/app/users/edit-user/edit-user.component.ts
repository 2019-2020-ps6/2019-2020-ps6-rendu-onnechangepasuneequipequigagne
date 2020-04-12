import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user.model';
import {ActivatedRoute} from '@angular/router';
import {Quiz} from '../../../models/quiz.model';
import {QuizService} from "../../../services/quiz.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  private user: User;
  private quizList: Quiz[];
  private userForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public userService: UserService, public quizService: QuizService, public route: ActivatedRoute) {
    this.quizService.quizzes$.subscribe((quizzes) => this.quizList = quizzes);
    this.userForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      profilePicture: ''
    });
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.userService.getUser(id.toString()).subscribe((user) => this.user = user);
    }
  }

  isElement(quizId: string): boolean{
    const id = this.user.quizzesId.find(element => element == quizId);
    return !!id;
    // le !! signifie est définit
  }

  addQuizToUser(quiz: Quiz) {
      this.user.quizzesId.push(quiz.id.toString());
      this.userService.updateUser(this.user).subscribe((user) => this.user = user);
      alert("Le quiz "+quiz.name+" a été ajouté à liste des quizz de "+this.user.firstName);
  }

  suspendQuizToUser(quiz: Quiz) {
      const id =  this.user.quizzesId.indexOf(quiz.id.toString());
      this.user.quizzesId.splice(id,1);
      this.userService.updateUser(this.user).subscribe((user) => this.user = user);
      alert("Le quiz "+quiz.name+" a été suspendu de la liste des quizz de "+this.user.firstName);
  }

  updateUser() {
    const infoUpdate = this.userForm.getRawValue();
    if (infoUpdate.firstName) this.user.firstName = infoUpdate.firstName;
    if (infoUpdate.lastName) this.user.lastName = infoUpdate.lastName;
    if (infoUpdate.profilePicture) this.user.profilePicture = infoUpdate.profilePicture;
    this.userService.updateUser(this.user).subscribe((user) => this.user = user);
    alert("Changement du profil enregistré");
    window.location.reload();
  }
}
