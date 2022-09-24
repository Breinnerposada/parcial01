import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './modules.component';

const routes: Routes = [
  { path: '', component: ModulesComponent,
  children: [
    { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
    { path: 'games', loadChildren: () => import('./games/games.module').then(m => m.GamesModule) },
    { path: 'rent', loadChildren: () => import('./rent/rent.module').then(m => m.RentModule) },
  ]
},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
