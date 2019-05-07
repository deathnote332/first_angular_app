import { Hero } from '../hero.model';

export interface MarvelState {
    loading: boolean;
    error: Error;
    heroes: Hero[];
    selected: Hero;
}
