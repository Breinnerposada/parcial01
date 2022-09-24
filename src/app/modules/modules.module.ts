import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';
import { MegaMenuModule } from 'primeng/megamenu';


@NgModule({
  declarations: [
    ModulesComponent
  ],
  imports: [
    CommonModule,
    MegaMenuModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule { }
