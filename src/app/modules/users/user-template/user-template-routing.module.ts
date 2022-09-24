import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTemplateComponent } from './user-template.component';

const routes: Routes = [{ path: '', component: UserTemplateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserTemplateRoutingModule { }
