import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TakeSurveyRoutingModule } from './take-survey-routing.module';
import { TakeSurveyComponent } from './take-survey.component';
import { LandingPageModule } from '../landing-page.module';


@NgModule({
  declarations: [TakeSurveyComponent],
  imports: [
    CommonModule,
    TakeSurveyRoutingModule,
    LandingPageModule,
  ]
})
export class TakeSurveyModule { }
