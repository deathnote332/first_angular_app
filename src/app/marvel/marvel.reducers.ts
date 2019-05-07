import { MarvelState } from '../core/model/state/marvel.model';
import { Actions, ActionTypes } from './marvel.actions';

const initialState: MarvelState = {
    loading: false,
    error: null,
    heroes: null,
    selected: null,
};

export function marvelStateReducer(state: MarvelState = initialState, action: Actions): MarvelState {
    switch (action.type) {
        case ActionTypes.LOAD_HEROES: {
            return {
                ...state,
                loading: true
            };
        }

        case ActionTypes.LOAD_HEROES_SUCCESS: {
            return {
                ...state,
                loading: false,
                heroes: action.payload
            };
        }

        case ActionTypes.LOAD_HEROES_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        }

        case ActionTypes.SELECTED_HERO: {
            return {
                ...state,
                selected: action.payload
            };
        }

        default: {
            return state;
        }
    }
}
