import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreeAssesmentRoutingModule } from './free-assesment-routing.module';
import { FreeAssesmentComponent } from './free-assesment.component';
import { HomeModule } from '../home/home.module';
import { LandingPageModule } from 'src/app/landing-page/landing-page.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SingleAssesmentComponent } from './single-assesment/single-assesment.component';
@NgModule({
  declarations: [FreeAssesmentComponent, SingleAssesmentComponent],
  imports: [
    CommonModule,
    FreeAssesmentRoutingModule,
    HomeModule,
    LandingPageModule,
    SharedModule,
  ],
})
export class FreeAssesmentModule {}
