import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user.classe';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

    isAuth$ = new BehaviorSubject<boolean>(false);
    token: string;
    userId: string;
  constructor(private router: Router,
              private http: HttpClient) {}

  createNewUser(user:User) {
  return new Promise((resolve, reject) => {




    this.http.post('http://localhost:3000/signup',user)
      .subscribe(
        () => {
          this.login(user.email,user.password).then(
            () => {
              resolve();
            }
          ).catch(
            (error) => {
              reject(error);
            }
          );
        },
        (error) => {
          reject(error);
        }
      );
  });
}



login(email: string, password: string) {
  return new Promise((resolve, reject) => {
    this.http.post(
      'http://localhost:3000/login',
      { email: email, password: password })
      .subscribe(
        (authData: { token: string, userId: string }) => {
          this.token = authData.token;
          this.userId = authData.userId;
          this.isAuth$.next(true);
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
  });
}
getuser(email: string)
{

return    this.http.get<User>('http://localhost:3000/getuser/ahlemsaidane@yahoo.com');

}
logout() {
    this.isAuth$.next(false);
    this.userId = null;
    this.token = null;
  }

  getUserId = () =>{
    return this.userId;
  }

  detailuser()
  {
    return  this.http.get<User>('http://localhost:3000/detailuser/'+this.userId);
  }

}
