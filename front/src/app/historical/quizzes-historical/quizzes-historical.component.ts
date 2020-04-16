import { Component, OnInit} from '@angular/core';
import {Historical} from '../../../models/historical.model';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../models/user.model';

@Component({
  selector: 'app-quizzes-historical',
  templateUrl: './quizzes-historical.component.html',
  styleUrls: ['./quizzes-historical.component.scss']
})
export class QuizzesHistoricalComponent implements OnInit {

  private user: User;
  private historicalList: Historical[];
  private trim: string = "";

  constructor(private userService: UserService, private route: ActivatedRoute) {
  }


  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.userService.getUserQuizzesHistorical(id.toString()).subscribe((historicalList) => {
        this.historicalList = historicalList;
        this.userService.getUser(id.toString()).subscribe((user) => this.user = user);
      });
    }
  }

  search() {
    if(this.trim) {
      this.historicalList = this.historicalList.filter((historical) =>
        historical.quizName.toLocaleLowerCase().indexOf(this.trim.toLocaleLowerCase()) !== -1
      );
    } else {
      this.ngOnInit();
    }
  }

}
