import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolutionPartnerRoutingModule } from './solution-partner-routing.module';
import { SolutionPartnerComponent } from './solution-partner.component';
import { HomeModule } from '../home/home.module';
import { LandingPageModule } from 'src/app/landing-page/landing-page.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SolutionPartnerComponent],
  imports: [
    CommonModule,
    SolutionPartnerRoutingModule,
    HomeModule,
    LandingPageModule,
    SharedModule,
  ],
})
export class SolutionPartnerModule {}
