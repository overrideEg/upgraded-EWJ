import { SingleAssessment } from './../resolvers/singleAssessment.resolver';
import { SingleAssesmentComponent } from './single-assesment/single-assesment.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FreeAssesmentComponent } from './free-assesment.component';

const routes: Routes = [
  {
    path: '',
    component: FreeAssesmentComponent,
  },
  {
    path: 'single/:id',
    component: SingleAssesmentComponent,
    resolve: {
      singleAssessment: SingleAssessment,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreeAssesmentRoutingModule {}
