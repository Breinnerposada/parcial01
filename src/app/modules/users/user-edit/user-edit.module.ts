import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserEditRoutingModule } from './user-edit-routing.module';
import { UserEditComponent } from './user-edit.component';
import { UserTemplateModule } from '../user-template/user-template.module';


@NgModule({
  declarations: [
    UserEditComponent
  ],
  imports: [
    CommonModule,
    UserEditRoutingModule,
    UserTemplateModule,
  ]
})
export class UserEditModule { }
