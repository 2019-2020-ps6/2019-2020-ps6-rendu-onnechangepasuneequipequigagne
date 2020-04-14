import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthGuard} from '../../services/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private data;
  private loginForm: FormGroup;
  private logoUrl: string = 'https://lh3.googleusercontent.com/g4f3JWzT9_qwHKsz63ntrz8T17vYCLkXzSlFy4EZx0WuGAyXIkDLgihJzH0HunJdYw';

  constructor(private formBuilder: FormBuilder, private router: Router, private authGuard: AuthGuard) {
    this.setLoginForm();
  }

  ngOnInit() {
  }

  setLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: '',
    });
  }

  login() {
    this.data = this.loginForm.getRawValue();
    if(this.data.username === 'admin' && this.data.password === 'admin' ) {
      let link =  ['home'];
      this.authGuard.setAuthGuardState(true);
      this.router.navigate(link);
    } else {
      alert("Nom d'utilisateur ou mot de passe incorrect, veuillez réessayer !");
      this.setLoginForm();

    }
  }

}
