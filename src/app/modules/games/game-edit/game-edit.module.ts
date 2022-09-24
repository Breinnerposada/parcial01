import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameEditRoutingModule } from './game-edit-routing.module';
import { GameEditComponent } from './game-edit.component';
import { GameTemplateModule } from '../game-template/game-template.module';


@NgModule({
  declarations: [
    GameEditComponent
  ],
  imports: [
    CommonModule,
    GameEditRoutingModule,
    GameTemplateModule
  ]
})
export class GameEditModule { }
