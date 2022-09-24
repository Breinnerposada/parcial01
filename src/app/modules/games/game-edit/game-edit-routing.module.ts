import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameEditComponent } from './game-edit.component';

const routes: Routes = [{ path: '', component: GameEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameEditRoutingModule { }
