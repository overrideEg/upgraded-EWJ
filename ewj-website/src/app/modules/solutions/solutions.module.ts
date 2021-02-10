import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolutionsRoutingModule } from './solutions-routing.module';
import { SolutionsComponent } from './solutions.component';
import { HomeModule } from '../home/home.module';
import { GoTotouneyComponent } from './components/go-totouney/go-totouney.component';
import { LandingPageModule } from 'src/app/landing-page/landing-page.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SolutionsComponent, GoTotouneyComponent],
  imports: [
    CommonModule,
    SolutionsRoutingModule,
    HomeModule,
    LandingPageModule,
    SharedModule,
  ],
})
export class SolutionsModule {}
