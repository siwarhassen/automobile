import {VoituresService} from '../../services/voitures.service'
import {createEffect,Actions,ofType,Effect} from '@ngrx/effects';
import {concatMap,mergeMap,map,tap,catchError,switchMap} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Action } from "@ngrx/store";
import { Voiture } from '../../classes/voiture.classe';
import {SuccessAction,FailedAction,SUCCESSAJOUTVOITURE,LOAD,LOADAJOUTVOITURE,CreateVoitureSuccess,CreateVoitureFail,CreateVoitureLoad}  from '../actions/voitures.action';
import{LOADDELETEVOITURE,loadDeleteAction,SuccessDeleteAction,FailedDeleteAction}  from '../actions/voitures.action';
import{LOADMESVOITURES,loadmesvoituresAction,SuccessmesvoituresAction,FailedmesvoituresAction}  from '../actions/voitures.action';
import{LOADNOUVELLESVOITURES,loadnouvellesvoituresAction,SuccessnouvellesvoituresAction}  from '../actions/voitures.action';
import {of,Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class voituresEffects
{
  voituresAnciennes = createEffect(() =>
  this.actions.pipe(
    ofType(LOAD),
    concatMap(() =>  this.voituress.njarab()),
    map((data)=>new SuccessAction(data))
  )
);


@Effect()
deleteVoiture: Observable<Action> = this.actions.pipe(
  ofType(LOADDELETEVOITURE
  ),
  map((action:loadDeleteAction) => action.payload),
  mergeMap((id: string) =>
    this.voituress.supprimervoiture(id).pipe(
      map(() => new SuccessDeleteAction(id)),
      catchError(err => of(new FailedDeleteAction(err)))
    )
  )
);



mesvoitures = createEffect(() =>
this.actions.pipe(
  ofType(LOADMESVOITURES),
  concatMap((action: loadmesvoituresAction) =>     this.voituress.mesvoitures(action.payload)),
  map((data)=>new SuccessmesvoituresAction(data))
)
);

createvoiture = createEffect(() =>
this.actions.pipe(
  ofType(LOADAJOUTVOITURE),
  concatMap((action: CreateVoitureLoad) =>     this.voituress.ajoutervoiturestate(action.payload,action.photo)),
  map((data)=>new CreateVoitureSuccess(data))
)
);



voituresnouvelles = createEffect(() =>
this.actions.pipe(
  ofType(LOADNOUVELLESVOITURES),
  concatMap((action:loadnouvellesvoituresAction) => this.voituress.voituresneuvesstore(action.payload)),
  map((data)=>new SuccessnouvellesvoituresAction(data))
)
);


constructor(private actions:Actions,private voituress:VoituresService){}
}
