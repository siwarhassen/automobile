import {CustomAction} from  '../store';
import { Favoris } from '../../classes/favoris.classe';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import {SUCCESSFAVORIS,SuccessfavorisAction}  from '../actions/favoris.action';
import { createFeatureSelector, createSelector } from "@ngrx/store";
import{LOADAJOUTFAVORIS,SUCCESSAOUTFAVORIS}  from '../actions/favoris.action';
import{LOADDELETEFAVORIS,SUCCESSDELETEFAVORIS}  from '../actions/favoris.action';
import{LOADVERIFIERFAVORIS,SUCCESSVERIFIERFAVORIS}  from '../actions/favoris.action';
export interface FavorisState extends EntityState<Favoris> {

}

const favorisAdapter: EntityAdapter<Favoris> = createEntityAdapter<Favoris>({selectId: item => item._id}

);
//export const voitureAdapter: EntityAdapter<Voiture> = createEntityAdapter<Voiture>();

export const initialState:FavorisState = favorisAdapter.getInitialState(
);


export function favorisReducer(state :FavorisState= initialState,
  action: CustomAction
) {
  switch (action.type) {
    case SUCCESSFAVORIS: {
         return favorisAdapter.addAll(
      action.payload, {
     ...state
      }
    );
    }
    case SUCCESSAOUTFAVORIS: {
        return favorisAdapter.addOne(
          action.payload, {
            ...state
          }
        );
      }


      case SUCCESSDELETEFAVORIS: {
          return favorisAdapter.removeOne(action.payload, state);
        }

    default: {
      return state;
    }
  }
}



const getFavorisFeatureState = createFeatureSelector<any>(  'favoris');

export const getfavoris= createSelector(
  getFavorisFeatureState,
  favorisAdapter.getSelectors().selectAll
);
