import { Assessment } from './../resolvers/assesment.resolver';
import { Productjourny } from './../resolvers/journy.resolver';
import { ewjSolutions } from './../resolvers/solutions.resolver';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EwjSolutionsSectionComponent } from 'src/app/landing-page/ewj-solutions-section/ewj-solutions-section.component';
import { LandingPageModule } from 'src/app/landing-page/landing-page.module';
import { ProductJourneySectionComponent } from 'src/app/landing-page/product-journey-section/product-journey-section.component';
import { EWJSolutionSecComponent } from '../home/Components/ewjsolution-sec/ewjsolution-sec.component';
import { ProdJournySecComponent } from '../home/Components/prod-journy-sec/prod-journy-sec.component';
import { GoTotouneyComponent } from './components/go-totouney/go-totouney.component';

import { SolutionsComponent } from './solutions.component';

const routes: Routes = [
  {
    path: '',
    component: SolutionsComponent,

    children: [
      {
        path: 'solutions',
        component: EWJSolutionSecComponent,
        pathMatch: 'full',
        resolve: {
          solutions: ewjSolutions,
          productJouerny: Productjourny,
          assessment: Assessment,
        },
      },

      {
        path: 'gotoJourney',
        component: ProdJournySecComponent,
        resolve: {
          solutions: ewjSolutions,
          productJouerny: Productjourny,
          assessment: Assessment,
        },
      },
      { path: '', redirectTo: 'solutions', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), LandingPageModule],
  exports: [RouterModule],
})
export class SolutionsRoutingModule {}
