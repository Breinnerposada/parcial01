import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameShowRoutingModule } from './game-show-routing.module';
import { GameShowComponent } from './game-show.component';
import { GameTemplateModule } from '../game-template/game-template.module';


@NgModule({
  declarations: [
    GameShowComponent
  ],
  imports: [
    CommonModule,
    GameShowRoutingModule,
    GameTemplateModule
  ]
})
export class GameShowModule { }
