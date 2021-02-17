import {CustomAction} from  '../store';
import { Voiture } from '../../classes/voiture.classe';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import {SUCCESS,FAILED,SUCCESSAJOUTVOITURE,FAILEDAJOUTVOITURE}  from '../actions/voitures.action';
import { createFeatureSelector, createSelector } from "@ngrx/store";
import{LOADDELETEVOITURE,loadDeleteAction,SuccessDeleteAction,FailedDeleteAction,SUCCESSDELETEVOITURE,FAILEDDELETEVOITURE}  from '../actions/voitures.action';
import{LOADMESVOITURES,loadmesvoituresAction,SuccessmesvoituresAction,FailedmesvoituresAction,SUCCESSMESVOITURES,FAILEDMESVOITURES}  from '../actions/voitures.action';
import{SUCCESNOUVELLESVOITURES,loadnouvellesvoituresAction,SuccessnouvellesvoituresAction}  from '../actions/voitures.action';


export interface VoitureState extends EntityState<Voiture> {
  nouvellevoitures:Voiture[];
  anciennesvoitures:Voiture[];

}

const voitureAdapter: EntityAdapter<Voiture> = createEntityAdapter<Voiture>({selectId: item => item._id}

);
//export const voitureAdapter: EntityAdapter<Voiture> = createEntityAdapter<Voiture>();

export const initialState:VoitureState = voitureAdapter.getInitialState({
    nouvellevoitures:null,
    anciennesvoitures:null
}


);


export function voituresanciennesReducer(state :VoitureState= initialState,
  action: CustomAction
) {
  switch (action.type) {
    case SUCCESS: {
         return voitureAdapter.addAll(
      action.payload, {
     ...state,
     anciennesvoitures:action.payload
      }
    );
    }
    case FAILED:
{return   {  ...state,  entities: {}
};
}

case SUCCESNOUVELLESVOITURES: {
     return voitureAdapter.addAll(
  action.payload, {
 ...state,
 nouvellevoitures:action.payload
  }
);
}

case SUCCESSMESVOITURES: {
     return voitureAdapter.addAll(
  action.payload, {
 ...state
  }
);
}
case FAILEDMESVOITURES:
{return   {  ...state,  entities: {}
};
}




case SUCCESSAJOUTVOITURE: {
    return voitureAdapter.addOne(action.payload, state);
  }
  case FAILEDAJOUTVOITURE: {
    return {
      ...state
    };
  }

  case SUCCESSDELETEVOITURE: {
     return voitureAdapter.removeOne(action.payload, state);
   }
   case FAILEDDELETEVOITURE: {
     return {
       ...state,
       error: action.payload
     };
   }
    default: {
      return state;
    }
  }
}



const getVoitureFeatureState = createFeatureSelector<any>(  'voitures');

export const getvoitures = createSelector(
  getVoitureFeatureState,
  voitureAdapter.getSelectors().selectAll
);

export const getnouvellesvoitures = createSelector(
  getVoitureFeatureState,
s=>s.nouvellevoitures
);
