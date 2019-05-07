import { Action } from '@ngrx/store';

export const MODULE_NAME = 'DC STATE';

export const ActionTypes = {
    LOAD_DC: `${MODULE_NAME} Loaded dc`
};

export class LoadDcAction implements Action {
    readonly type = ActionTypes.LOAD_DC;

    constructor(public payload?: any) { }
}

export type Actions = LoadDcAction;
