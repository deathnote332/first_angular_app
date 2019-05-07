import { Action } from '@ngrx/store';
import { Hero } from '../core/model/hero.model';

export const MODULE_NAME = 'MARVEL STATE';

export const ActionTypes = {
    LOAD_HEROES: `${MODULE_NAME} Loading Hero`,
    LOAD_HEROES_SUCCESS: `${MODULE_NAME} Hero Loading Success`,
    LOAD_HEROES_ERROR: `${MODULE_NAME} Hero Loading Error`,
    SELECTED_HERO: `${MODULE_NAME} Hero Selected`,
};

export class LoadHeroesAction implements Action {
    readonly type = ActionTypes.LOAD_HEROES;

    constructor(public payload?: any) { }
}

export class LoadHeroesSuccessAction implements Action {
    readonly type = ActionTypes.LOAD_HEROES_SUCCESS;

    constructor(public payload: Hero[]) { }
}

export class LoadHeroesErrorAction implements Action {
    readonly type = ActionTypes.LOAD_HEROES_ERROR;

    constructor(public payload: any) { }
}

export class SelectedHeroAction implements Action {
    readonly type = ActionTypes.SELECTED_HERO;

    constructor(public payload: Hero) { }
}

export type Actions = LoadHeroesAction | LoadHeroesSuccessAction | LoadHeroesAction |
SelectedHeroAction;
