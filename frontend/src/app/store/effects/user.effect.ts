import { Injectable } from '@angular/core';
import { createEffect,Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { User } from '../../classes/user.classe';
import {concatMap,mergeMap,map,tap,catchError,switchMap} from 'rxjs/operators';



import {

GetUserSuccessAction,
GetUser,GetUserSuccess

} from '../actions/user.action';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class UserEffects {

  getUser=createEffect(()=>this.actions.pipe(
    ofType(GetUser),
    mergeMap(()=>  this.authService.detailuser().pipe(
      map((data:User)=>new GetUserSuccessAction(data)))

  )));


  constructor(
    private authService: AuthService,
    private actions: Actions

  ) {}
}
