import { createAction, props } from '@ngrx/store';
import {Update} from '@ngrx/entity';
//import { Comment } from '../../classes/comment.classe';

export const SUCCESSFAVORIS='favorissuccess'
export const LOADFAVORIS='favorisLOAD'

export const SUCCESSAOUTFAVORIS='ajoutfavorissuccess'
export const LOADAJOUTFAVORIS='ajoutfavorisLOAD'

export const SUCCESSDELETEFAVORIS='supprimerfavorisload'
export const LOADDELETEFAVORIS='supprimerfavorisLOAD'

export const SUCCESSVERIFIERFAVORIS='verifierfavorisload'
export const LOADVERIFIERFAVORIS='verifierfavorisLOAD'


export class loadverifierfavorisAction
{
  type:string=LOADVERIFIERFAVORIS
  constructor(public payload:any,public idvoiture:any) {
      this.payload=payload;
        this.idvoiture=idvoiture;
  }
}

export class SuccessverifierfavorisAction
{
  type:string=SUCCESSVERIFIERFAVORIS;
  //payload:any

  constructor(public payload:any) {
      this.payload=payload;
  }
}








export class loadfavorisAction
{
  type:string=LOADFAVORIS
  constructor(public payload:any) {
      this.payload=payload;
  }
}

export class SuccessfavorisAction
{
  type:string=SUCCESSFAVORIS;
  //payload:any

  constructor(public payload:any) {
      this.payload=payload;
  }
}


export class loadajoutfavorisAction
{
  type:string=LOADAJOUTFAVORIS
  constructor(public payload:any) {
      this.payload=payload;
  }
}

export class SuccessajoutfavorisAction
{
  type:string=SUCCESSAOUTFAVORIS;
  //payload:any

  constructor(public payload:any) {
      this.payload=payload;
  }
}



export class loaddeletefavorisAction
{
  type:string=LOADDELETEFAVORIS
  constructor(public payload:any) {
      this.payload=payload;
  }
}

export class SuccessdeletefavorisAction
{
  type:string=SUCCESSDELETEFAVORIS;
  //payload:any

  constructor(public payload:any) {
      this.payload=payload;
  }
}
