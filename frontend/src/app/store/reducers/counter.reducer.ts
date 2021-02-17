import {CustomAction} from  '../store';
import {createFeatureSelector,createSelector,State} from '@ngrx/store';
import {INCREMENT} from '../actions/counter.action'
export interface Counter
{
  n:number
  changes:number
}
 let initialState :Counter=
{
  n:55,
  changes:0

}

export function counterReducer(state:Counter=initialState,action:CustomAction)
{

switch (action.type) {
    case INCREMENT:

      return  {n:state.n +1}  





  default:
  return state
}
}

let counterFs=createFeatureSelector<Counter>('counter')
export let nSelector=createSelector(counterFs,s=>s.n)
