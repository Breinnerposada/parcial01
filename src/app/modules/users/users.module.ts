import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
