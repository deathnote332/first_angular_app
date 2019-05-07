import { Actions, ActionTypes } from './dc.actions';

export const initialState = {
    heroes: null,
};

export function dcReducers(state: any = initialState, action: Actions): any {
    switch (action.type) {
        case ActionTypes.LOAD_DC : {
            return {
                ...state,
                heroes: action.payload
            };
        }

        default: {
            return state;
        }
    }
}
