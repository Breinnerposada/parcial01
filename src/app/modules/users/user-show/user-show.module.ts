import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserShowRoutingModule } from './user-show-routing.module';
import { UserShowComponent } from './user-show.component';
import { UserTemplateModule } from '../user-template/user-template.module';


@NgModule({
  declarations: [
    UserShowComponent
  ],
  imports: [
    CommonModule,
    UserShowRoutingModule,
    UserTemplateModule,
  ]
})
export class UserShowModule { }
