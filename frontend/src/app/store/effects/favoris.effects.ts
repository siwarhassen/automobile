import {FavorisService} from '../../services/favoris.service'
import {createEffect,Actions,ofType,Effect} from '@ngrx/effects';
import {concatMap,mergeMap,map,tap,catchError,switchMap} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Action } from "@ngrx/store";
import { Favoris } from '../../classes/favoris.classe';
import {of,Observable} from 'rxjs';
import{LOADFAVORIS,loadfavorisAction,SuccessfavorisAction}  from '../actions/favoris.action';
import{LOADAJOUTFAVORIS,loadajoutfavorisAction,SuccessajoutfavorisAction}  from '../actions/favoris.action';
import{LOADDELETEFAVORIS,loaddeletefavorisAction,SuccessdeletefavorisAction}  from '../actions/favoris.action';
import{LOADVERIFIERFAVORIS,loadverifierfavorisAction,SuccessverifierfavorisAction}  from '../actions/favoris.action';
@Injectable({
  providedIn: 'root'
})
export class favorisEffects
{
  listefavoris = createEffect(() =>
  this.actions.pipe(
    ofType(LOADFAVORIS),
    concatMap((action:loadfavorisAction) =>  this.favorisS.afficherlesfavoris(action.payload)),
    map((data)=>new SuccessfavorisAction(data))
  )
);

verifierfavoris = createEffect(() =>
this.actions.pipe(
  ofType(LOADVERIFIERFAVORIS),
  concatMap((action:loadverifierfavorisAction) =>  this.favorisS.verifierfavoris(action.payload,action.idvoiture)),
  map((data)=>new SuccessverifierfavorisAction(data))
)
);



createfavoris = createEffect(() =>
this.actions.pipe(
  ofType(LOADAJOUTFAVORIS),
  concatMap((action: loadajoutfavorisAction) =>this.favorisS.ajouterfavoris(action.payload)),
  map((data)=>new SuccessajoutfavorisAction(data))
)
);




@Effect()
deletefavoris: Observable<Action> = this.actions.pipe(
  ofType(LOADDELETEFAVORIS
  ),
  map((action:loaddeletefavorisAction) => action.payload),
  mergeMap((id: string) =>
    this.favorisS.supprimerfavoris(id).pipe(
      map(() => new SuccessdeletefavorisAction(id))
    )
  )
);



constructor(private actions:Actions,private favorisS:FavorisService){}
}
