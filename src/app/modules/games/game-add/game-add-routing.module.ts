import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameAddComponent } from './game-add.component';

const routes: Routes = [{ path: '', component: GameAddComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameAddRoutingModule { }
