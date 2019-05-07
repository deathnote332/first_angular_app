import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DcComponent } from './dc/dc.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'marvel' },
  { path: 'marvel', loadChildren: './marvel/marvel.module#MarvelModule' },
  { path: 'dc', component: DcComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
