import { createAction, props } from '@ngrx/store';
import {Update} from '@ngrx/entity';
import { Voiture } from '../../classes/voiture.classe';

export const SUCCESS='voituressuccess'
export const FAILED='voituresFailed'
export const LOAD='voituresLOAD'

export const LOADAJOUTVOITURE='loadajoutvoiture'
export const SUCCESSAJOUTVOITURE='ajoutvoiture'
export const FAILEDAJOUTVOITURE='failedajoutvoiture'

export const LOADDELETEVOITURE='loaddeletevoiture'
export const SUCCESSDELETEVOITURE='deletevoiture'
export const FAILEDDELETEVOITURE='faileddeletevoiture'

export const SUCCESSMESVOITURES='mesvoituressuccess'
export const FAILEDMESVOITURES='mesvoituresFailed'
export const LOADMESVOITURES='mesvoituresLOAD'

export const SUCCESNOUVELLESVOITURES='nouvellesvoituressuccess'

export const LOADNOUVELLESVOITURES='nouvellesvoituresLOAD'

export class loadAction
{
  type:string=LOAD
}

export class SuccessAction
{
  type:string=SUCCESS;
  //payload:any

  constructor(public payload:any) {
      this.payload=payload;
  }
}

export class FailedAction
{
  type:string=FAILED
  payload:any
  constructor(payload:any)
  {
    this.payload=payload
  }
}



export class loadDeleteAction
{
  type:string=LOADDELETEVOITURE
  constructor(public payload:any) {
      this.payload=payload;
  }
}

export class SuccessDeleteAction
{
  type:string=SUCCESSDELETEVOITURE;
  //payload:any

  constructor(public payload:any) {
      this.payload=payload;
  }
}

export class FailedDeleteAction
{
  type:string=FAILEDDELETEVOITURE
  payload:any
  constructor(payload:any)
  {
    this.payload=payload
  }
}









export class CreateVoitureLoad  {
   type:string=LOADAJOUTVOITURE;

  constructor(public payload: Voiture,public photo:File) {}
}

export class CreateVoitureSuccess  {
   type = SUCCESSAJOUTVOITURE;

  constructor(public payload: any) {}
}

export class CreateVoitureFail  {
   type =FAILEDAJOUTVOITURE;

  constructor(public payload: string) {}
}







export class loadmesvoituresAction
{
  type:string=LOADMESVOITURES
  constructor(public payload:any) {
      this.payload=payload;
  }
}

export class SuccessmesvoituresAction
{
  type:string=SUCCESSMESVOITURES;
  //payload:any

  constructor(public payload:any) {
      this.payload=payload;
  }
}

export class FailedmesvoituresAction
{
  type:string=FAILEDMESVOITURES
  payload:any
  constructor(payload:any)
  {
    this.payload=payload
  }
}


export class loadnouvellesvoituresAction
{
  type:string=LOADNOUVELLESVOITURES;
    payload:string;
  constructor( payload:string) {
      this.payload=payload;
  }
}

export class SuccessnouvellesvoituresAction
{
  type:string=SUCCESNOUVELLESVOITURES;
  //payload:any

  constructor(public payload:any) {
      this.payload=payload;
  }
}
