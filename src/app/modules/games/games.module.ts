import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    GamesComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
