import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameShowComponent } from './game-show.component';

const routes: Routes = [{ path: '', component: GameShowComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameShowRoutingModule { }
