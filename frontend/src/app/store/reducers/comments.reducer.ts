import {CustomAction} from  '../store';
import { Comment } from '../../classes/comment.classe';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import {SUCCESSCOMMENTS,SuccesscommentsAction}  from '../actions/comments.action';
import { createFeatureSelector, createSelector } from "@ngrx/store";
import{LOADAJOUTCOMMENTS,SUCCESSAOUTCOMMENT}  from '../actions/comments.action';
import{LOADDELETECOMMENT,SUCCESSDELETECOMMENT}  from '../actions/comments.action';
export interface CommentState extends EntityState<Comment> {

}

const commentAdapter: EntityAdapter<Comment> = createEntityAdapter<Comment>({selectId: item => item._id}

);
//export const voitureAdapter: EntityAdapter<Voiture> = createEntityAdapter<Voiture>();

export const initialState:CommentState = commentAdapter.getInitialState(
);


export function commentReducer(state :CommentState= initialState,
  action: CustomAction
) {
  switch (action.type) {
    case SUCCESSCOMMENTS: {
         return commentAdapter.addAll(
      action.payload, {
     ...state
      }
    );
    }
    case SUCCESSAOUTCOMMENT: {
        return commentAdapter.addOne(action.payload, state);
      }
      case SUCCESSDELETECOMMENT: {
          return commentAdapter.removeOne(action.payload, state);
        }


    default: {
      return state;
    }
  }
}



const getCommentFeatureState = createFeatureSelector<any>(  'comments');

export const getcomments= createSelector(
  getCommentFeatureState,
  commentAdapter.getSelectors().selectAll
);
