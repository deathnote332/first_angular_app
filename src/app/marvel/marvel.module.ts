import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { MarvelRoutingModule } from './marvel-routing.module';
import { MarvelComponent } from './marvel.component';
import { SharedModule } from '../shared/shared.module';
import { marvelStateReducer } from './marvel.reducers';
import { MODULE_NAME } from './marvel.actions';
import { EffectsModule } from '@ngrx/effects';
import { MarvelEffects } from './marvel.effects';
import { MarvelService } from './marvel.service';

@NgModule({
  declarations: [MarvelComponent],
  imports: [
    CommonModule,
    MarvelRoutingModule,
    SharedModule,
    StoreModule.forFeature(MODULE_NAME, marvelStateReducer),
    EffectsModule.forFeature([MarvelEffects])
  ],
  providers: [
    MarvelService
  ]
})
export class MarvelModule { }
