import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
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

  @Input()
  user: User;

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
   this.user.quizzesId.forEach(function (id) {
     if(id === quizId){
       return true;
     }
   })
    return false;
  }

  updateUser() {
    console.log('Add user: ');
  }
}
