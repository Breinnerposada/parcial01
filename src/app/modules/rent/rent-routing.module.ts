import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentComponent } from './rent.component';

const routes: Routes = [
  { path: '', component: RentComponent },
  {
    path: 'add',
    loadChildren: () => import('./rent-add/rent-add.module')
      .then((m) => m.RentAddModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentRoutingModule { }
