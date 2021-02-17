import { Action } from '@ngrx/store';
import { User } from '../../classes/user.classe';

export const  GetUser = '[User] Get User';
export const  GetUserSuccess = '[User] Get User Success';


export class GetUserAction  {
  public  type = GetUser;
  constructor(public payload: number) {}
}

export class GetUserSuccessAction  {
  public type =GetUserSuccess;
  constructor(public payload: any) {}
}

//export type UserActions = GetUser | GetUserSuccess;
