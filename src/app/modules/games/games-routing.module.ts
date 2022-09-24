import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games.component';

const routes: Routes = [
  { path: '', component: GamesComponent },
  {
    path: 'add',
    loadChildren: () => import('./game-add/game-add.module')
      .then((m) => m.GameAddModule)
  },
  {
    path: 'show/:id',
    loadChildren: () => import('./game-show/game-show.module')
      .then(m => m.GameShowModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./game-edit/game-edit.module')
      .then(m => m.GameEditModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
