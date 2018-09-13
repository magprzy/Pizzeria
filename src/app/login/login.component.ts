import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginService} from './login.service';
import {User} from '../model/user';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users: User[] = [];
  loginForm = new FormGroup({
    name: new FormControl(),
    password: new FormControl()
  });

  constructor(readonly loginService: LoginService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    const userName = this.loginForm.get('name').value;
    const password = this.loginForm.get('password').value;

    this.loginService.getAllUsers().subscribe(res => this.users = res);

    this.users.forEach(user => {
      if (user.name === userName && user.password === password) {
        this.loginService.login();
      } else {console.log('zle dane'); }
    });

  }


}


