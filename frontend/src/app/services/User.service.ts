import { User } from '../classes/user.classe';

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: User[];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
