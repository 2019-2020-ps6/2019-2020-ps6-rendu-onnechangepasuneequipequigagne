import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.scss']
})
export class EditMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  goBack() {
    let link = ['home'];
    this.router.navigate(link);
  }

}
