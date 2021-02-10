import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactUSComponent } from './contact-us.component';

const routes: Routes = [{ path: '', component: ContactUSComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactUSRoutingModule { }
