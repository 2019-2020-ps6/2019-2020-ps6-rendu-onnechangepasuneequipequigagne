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
  private imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1024px-OOjs_UI_icon_userAvatar.svg.png";

  constructor(public formBuilder: FormBuilder, public userService: UserService, public quizService: QuizService, public route: ActivatedRoute) {
    this.quizService.quizzes$.subscribe((quizzes) => this.quizList = quizzes);
    this.userForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
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
  }

  suspendQuizToUser(quiz: Quiz) {
    const id =  this.user.quizzesId.indexOf(quiz.id.toString());
    console.log(id);
    this.user.quizzesId.splice(id,1);
    this.userService.updateUser(this.user).subscribe((user) => this.user = user);
  }

  updateUser() {
    console.log('Add user: ');
  }
}
