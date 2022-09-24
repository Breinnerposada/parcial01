import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAddRoutingModule } from './user-add-routing.module';
import { UserAddComponent } from './user-add.component';
import { UserTemplateModule } from '../user-template/user-template.module';


@NgModule({
  declarations: [
    UserAddComponent
  ],
  imports: [
    CommonModule,
    UserTemplateModule,
    UserAddRoutingModule,
  ]
})
export class UserAddModule { }
