import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {LoginService} from './login/login.service';

@Injectable()

export class LoginGuard implements CanActivate{
  constructor(private readonly loginService: LoginService) {
  }

  canActivate() {
    return this.loginService.checkIsLogged();
  }
}
