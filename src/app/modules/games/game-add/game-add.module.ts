import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameAddRoutingModule } from './game-add-routing.module';
import { GameAddComponent } from './game-add.component';
import { GameTemplateModule } from '../game-template/game-template.module';


@NgModule({
  declarations: [
    GameAddComponent
  ],
  imports: [
    CommonModule,
    GameAddRoutingModule,
    GameTemplateModule
  ]
})
export class GameAddModule { }
