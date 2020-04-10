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

  private historicalList: Historical[];

  constructor(private userService: UserService, private route: ActivatedRoute) {
  }


  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.userService.getUserQuizzesHistorical(id.toString()).subscribe((historicalList) => this.historicalList = historicalList);
    }
  }

}
