import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
  } from '@ngrx/store';
import { MarvelState } from './core/model/state/marvel.model';
import { marvelStateReducer } from './marvel/marvel.reducers';
//   import { environment } from '../../environments/environment';

  export interface AppState {
    MARVEL_STATE: MarvelState;
  }

  export const appReducers: ActionReducerMap<any> = {
  };

  // export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
