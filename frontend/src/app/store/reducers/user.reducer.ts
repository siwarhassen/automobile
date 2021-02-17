import { createFeatureSelector, createSelector } from "@ngrx/store";

import { GetUser,GetUserSuccess,GetUserAction,GetUserSuccessAction }  from '../actions/user.action';
import {CustomAction} from  '../store';
import { User } from '../../classes/user.classe';

export function userReducers (  state :User,
  action: CustomAction)
{switch (action.type) {

  case GetUserSuccess: {
    return action.payload
  }

  default:
    return state;
}}



let userFS=createFeatureSelector<User>('user')
export let nSelectorId=createSelector( userFS,s=>s.fullname)
