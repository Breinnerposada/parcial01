import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameTemplateRoutingModule } from './game-template-routing.module';
import { GameTemplateComponent } from './game-template.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    GameTemplateComponent
  ],
  exports: [
    GameTemplateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToastModule,
    GameTemplateRoutingModule
  ]
})
export class GameTemplateModule { }
