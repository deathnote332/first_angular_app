import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './module/material.module';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ListItemComponent } from './list-item/list-item.component';
import { SingleItemComponent } from './single-item/single-item.component';
import { DetailItemComponent } from './detail-item/detail-item.component';
import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ListItemComponent,
    SingleItemComponent,
    DetailItemComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    CoreModule,
    HttpClientModule
  ],
  exports: [
    MaterialModule,
    HeaderComponent,
    ListItemComponent,
    SingleItemComponent,
    DetailItemComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
