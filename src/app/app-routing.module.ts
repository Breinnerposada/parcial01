import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'modules', loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule) },
  { path: 'user-add', loadChildren: () => import('./modules/users/user-add/user-add.module').then(m => m.UserAddModule) },
  { path: 'user-template', loadChildren: () => import('./modules/users/user-template/user-template.module').then(m => m.UserTemplateModule) },
  { path: 'games', loadChildren: () => import('./modules/games/games.module').then(m => m.GamesModule) },
  { path: 'game-show', loadChildren: () => import('./modules/games/game-show/game-show.module').then(m => m.GameShowModule) },
  { path: 'game-edit', loadChildren: () => import('./modules/games/game-edit/game-edit.module').then(m => m.GameEditModule) },
  { path: 'game-add', loadChildren: () => import('./modules/games/game-add/game-add.module').then(m => m.GameAddModule) },
  { path: 'game-template', loadChildren: () => import('./modules/games/game-template/game-template.module').then(m => m.GameTemplateModule) },
  { path: 'rent', loadChildren: () => import('./modules/rent/rent.module').then(m => m.RentModule) },
  { path: 'rent-add', loadChildren: () => import('./modules/rent/rent-add/rent-add.module').then(m => m.RentAddModule) },
  { path: '**', redirectTo: 'modules'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
