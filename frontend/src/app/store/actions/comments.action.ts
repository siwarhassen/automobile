import { createAction, props } from '@ngrx/store';
import {Update} from '@ngrx/entity';
//import { Comment } from '../../classes/comment.classe';

export const SUCCESSCOMMENTS='commentssuccess'
export const LOADCOMMENTS='commentsLOAD'

export const SUCCESSAOUTCOMMENT='ajoutcommentsuccess'
export const LOADAJOUTCOMMENTS='ajoutcommentLOAD'

export const SUCCESSDELETECOMMENT='deletecommentsuccess'
export const LOADDELETECOMMENT='deletecommentLOAD'

export class loadcommentsAction
{
  type:string=LOADCOMMENTS
  constructor(public payload:any) {
      this.payload=payload;
  }
}

export class SuccesscommentsAction
{
  type:string=SUCCESSCOMMENTS;
  //payload:any

  constructor(public payload:any) {
      this.payload=payload;
  }
}


export class loadajoutcommentAction
{
  type:string=LOADAJOUTCOMMENTS
  constructor(public payload:any) {
      this.payload=payload;
  }
}

export class SuccessajoutcommentAction
{
  type:string=SUCCESSAOUTCOMMENT;
  //payload:any

  constructor(public payload:any) {
      this.payload=payload;
  }
}



export class loaddeletecommentAction
{
  type:string=LOADDELETECOMMENT
  constructor(public payload:any) {
      this.payload=payload;
  }
}

export class SuccessdeletecommentAction
{
  type:string=SUCCESSDELETECOMMENT;
  //payload:any

  constructor(public payload:any) {
      this.payload=payload;
  }
}
