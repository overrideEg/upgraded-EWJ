import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUSRoutingModule } from './contact-us-routing.module';
import { ContactUSComponent } from './contact-us.component';
import { HomeModule } from '../home/home.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ContactUSComponent],
  imports: [
    CommonModule,
    ContactUSRoutingModule,
    HomeModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ContactUSModule {}
