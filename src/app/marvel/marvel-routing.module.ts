import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailItemComponent } from '../shared/detail-item/detail-item.component';
import { MarvelComponent } from './marvel.component';

const routes: Routes = [
  { path: '', component: MarvelComponent,
    children: [
      { path: ':id', component: DetailItemComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarvelRoutingModule { }
