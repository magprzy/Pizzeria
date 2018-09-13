import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users = [];
  isLoggedIn = false;

  constructor(private readonly http: HttpClient, private readonly router: Router) {
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users');
  }

  login() {

    // forEach(dish => this.dishesIDs.push(dish.id));
    this.isLoggedIn = true;
    console.log('zalogowany');
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['']);
    console.log('wylogowny');
  }

  checkIsLogged() {
    return this.isLoggedIn;

  }
}
