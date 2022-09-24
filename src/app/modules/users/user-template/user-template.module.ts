import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserTemplateRoutingModule } from './user-template-routing.module';
import { UserTemplateComponent } from './user-template.component';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    UserTemplateComponent
  ],
  exports: [
    UserTemplateComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ReactiveFormsModule,
    ToastModule,
    UserTemplateRoutingModule
  ]
})
export class UserTemplateModule { }
