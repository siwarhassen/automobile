import {Action} from '@ngrx/store';
import {Counter,counterReducer} from './reducers/counter.reducer';
import {voituresanciennesReducer,VoitureState} from './reducers/voitures.reducer';
import {commentReducer,CommentState} from './reducers/comments.reducer';
import {userReducers} from './reducers/user.reducer';
import { Voiture } from '../classes/voiture.classe';
import {favorisReducer,FavorisState} from './reducers/favoris.reducer';

import { User } from '../classes/user.classe';

export interface storeInterface
{
  counter:Counter
  voitures:VoitureState
  user:User
  comments:CommentState
  favoris:FavorisState
}


export interface CustomAction
{
  type:string,
  payload:any
}

export const reducers={
  counter:counterReducer,
  voitures:voituresanciennesReducer,
  comments:commentReducer,
  user:userReducers,
  favoris:favorisReducer
}
