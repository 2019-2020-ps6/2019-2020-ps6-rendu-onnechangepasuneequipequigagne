import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthGuard} from '../../services/auth-guard.service';
import {SuperuserService} from '../../services/superuser.service';
import {SuperUser} from '../../models/superuser.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginData;
  private registerData;
  private loginForm: FormGroup;
  private registerForm: FormGroup;
  private superUser: SuperUser = new class implements SuperUser {
    email: string;
    id: string;
    login: string;
    password: string;
  };
  public superusers: SuperUser[] = [];
  private logoUrl: string = 'https://lh3.googleusercontent.com/g4f3JWzT9_qwHKsz63ntrz8T17vYCLkXzSlFy4EZx0WuGAyXIkDLgihJzH0HunJdYw';
  


  constructor(private formBuilder: FormBuilder, private superUserService: SuperuserService, private router: Router, private authGuard: AuthGuard) {
    this.superUserService.superusers$.subscribe((superusers) => this.superusers = superusers);
    this.setLoginForm();
    this.setRegisterForm();
  }

  ngOnInit() {
  }

  setLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: '',
    });
  }

  setRegisterForm() {
    this.registerForm = this.formBuilder.group({
      login: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    });
  }

  login() {
    /*
    this.loginData = this.loginForm.getRawValue();
    this.superUser = this.superusers.find((superUser) =>
      superUser.login === this.loginData.username && superUser.password === this.loginData.password
    );
    if(!!this.superUser) {
      let link =  ['home'];
      this.authGuard.setAuthGuardState(true);
      this.authGuard.setActivatedUser(this.superUser.login);
      this.router.navigate(link);
    } else {
      alert("Nom d'utilisateur ou mot de passe incorrect, veuillez réessayer !");
      this.setLoginForm();
    }
    */
   let link =  ['home'];
   this.router.navigate(link);
  }

  register() {
    this.registerData = this.registerForm.getRawValue();
    if(!this.registerData.login || !this.registerData.password || !this.registerData.passwordConfirmation || !this.registerData.email) {
      alert("Veuillez remplir tous les champs !");
      this.setRegisterForm();
    } else if(this.registerData.password !== this.registerData.passwordConfirmation) {
      alert("Mot de passe non valide !");
      this.setRegisterForm();
    } else {
      this.superUser = this.superusers.find((superUser) =>
        superUser.email === this.registerData.email
      );
      if(!!this.superUser) {
        alert("Un compte avec cet e-mail existe déjà!");
      } else {
        let link =  ['home'];
        this.superUser.login = this.registerData.login;
        this.superUser.email = this.registerData.email;
        this.superUser.password = this.registerData.password;
        this.superUserService.addSuperUser(this.superUser);
        this.authGuard.setAuthGuardState(true);
        this.authGuard.setActivatedUser(this.superUser.login);
        this.router.navigate(link);
      }
    }
  }

}
