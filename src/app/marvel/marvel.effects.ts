import { Injectable } from '@angular/core';
import { mergeMap, map } from 'rxjs/operators';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { LoadHeroesAction, ActionTypes, LoadHeroesSuccessAction } from './marvel.actions';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Hero } from '../core/model/hero.model';

@Injectable()
export class MarvelEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  @Effect()
  public loadHeroe$: Observable<Action> = this.actions$.pipe(
      ofType<LoadHeroesAction>(ActionTypes.LOAD_HEROES),
      mergeMap( (action) => {
         return this.http.get(environment.apiBaseUrl + '/herostats').pipe(
              map((result: any) => {
                const heroes = result.map( res => {
                    return {
                        name: res.localized_name,
                        primary_attr: res.primary_attr,
                        attack_type: res.attack_type,
                        roles: res.roles,
                        imageUrl: environment.baseUrl + res.icon
                    } as Hero;
                });
                  return new LoadHeroesSuccessAction(heroes);
              })
          );
      })
  );
}
