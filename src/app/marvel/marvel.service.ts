import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { LoadHeroesAction, SelectedHeroAction, MODULE_NAME } from './marvel.actions';
import { Hero } from '../core/model/hero.model';
import { Observable, of } from 'rxjs';
import { mergeMap, map, merge } from 'rxjs/operators';
import { MarvelState } from '../core/model/state/marvel.model';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(private store: Store<AppState>) { }

  loadHeroes() {
    this.store.dispatch(new LoadHeroesAction());
  }

  getHeroes(): Observable<Hero[]> {
    return this.store.select(MODULE_NAME).pipe(
        mergeMap((marvelState: MarvelState) => {
          return of(marvelState.heroes);
        })
    );
  }

  selectHero(hero: Hero) {
    this.store.dispatch(new SelectedHeroAction(hero));
  }
}
