import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentRoutingModule } from './rent-routing.module';
import { RentComponent } from './rent.component';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    RentComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    RentRoutingModule
  ]
})
export class RentModule { }
