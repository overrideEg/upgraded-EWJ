import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssessmentPageComponent } from './assessment-page/assessment-page.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { EwjSolutionsSectionComponent } from './ewj-solutions-section/ewj-solutions-section.component';

import { LandingPageComponent } from './landing-page.component';
import { PartenersPageComponent } from './parteners-page/parteners-page.component';
import { ProductJourneySectionComponent } from './product-journey-section/product-journey-section.component';

const routes: Routes = [
  // { path: '', component: LandingPageComponent },
  // { path: 'contact-us-page', component: ContactUsPageComponent },
  // { path: 'assessment-page', component: AssessmentPageComponent },
  // { path: 'parteners-page', component: PartenersPageComponent },
  // { path: 'solutions', component: EwjSolutionsSectionComponent },
  // { path: 'product-journey', component: ProductJourneySectionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
