import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  {
    path: 'add',
    loadChildren: () => import('./user-add/user-add.module')
      .then((m) => m.UserAddModule)
  },
  {
    path: 'show/:id',
    loadChildren: () => import('./user-show/user-show.module')
      .then(m => m.UserShowModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./user-edit/user-edit.module')
      .then(m => m.UserEditModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
