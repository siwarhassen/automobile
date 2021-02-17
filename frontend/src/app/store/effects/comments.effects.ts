import {CommentService} from '../../services/comment.service'
import {createEffect,Actions,ofType,Effect} from '@ngrx/effects';
import {concatMap,mergeMap,map,tap,catchError,switchMap} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Action } from "@ngrx/store";
import { Comment } from '../../classes/comment.classe';
import {of,Observable} from 'rxjs';
import{LOADDELETECOMMENT,loaddeletecommentAction,SuccessdeletecommentAction}  from '../actions/comments.action';

import{LOADCOMMENTS,loadcommentsAction,SuccesscommentsAction}  from '../actions/comments.action';
import{LOADAJOUTCOMMENTS,loadajoutcommentAction,SuccessajoutcommentAction}  from '../actions/comments.action';

@Injectable({
  providedIn: 'root'
})
export class commentsEffects
{
  listecomments = createEffect(() =>
  this.actions.pipe(
    ofType(LOADCOMMENTS),
    concatMap((action:loadajoutcommentAction) =>  this.commentsS.affichercommentsstore(action.payload)),
    map((data)=>new SuccesscommentsAction(data))
  )
);



createcomment = createEffect(() =>
this.actions.pipe(
  ofType(LOADAJOUTCOMMENTS),
  concatMap((action: loadajoutcommentAction) =>this.commentsS.ajoutercommentstore(action.payload)),
  map((data)=>new SuccessajoutcommentAction(data))
)
);




@Effect()
deletecomment: Observable<Action> = this.actions.pipe(
  ofType(LOADDELETECOMMENT
  ),
  map((action:loaddeletecommentAction) => action.payload),
  mergeMap((id: string) =>
    this.commentsS.supprimercommentaire(id).pipe(
      map(() => new SuccessdeletecommentAction(id))
    )
  )
);


constructor(private actions:Actions,private commentsS:CommentService){}
}
