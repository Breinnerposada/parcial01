import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentAddRoutingModule } from './rent-add-routing.module';
import { RentAddComponent } from './rent-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { RippleModule } from 'primeng/ripple';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    RentAddComponent
  ],
  imports: [
    CommonModule,
    MessagesModule,
    MessageModule,
    ReactiveFormsModule,
    RentAddRoutingModule,
    DropdownModule,
    RippleModule,
    ToastModule
  ]
})
export class RentAddModule { }
