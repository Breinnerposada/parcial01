import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserShowComponent } from './user-show.component';

const routes: Routes = [{ path: '', component: UserShowComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserShowRoutingModule { }
