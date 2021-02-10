import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolutionPartnerComponent } from './solution-partner.component';

const routes: Routes = [{ path: '', component: SolutionPartnerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolutionPartnerRoutingModule { }
