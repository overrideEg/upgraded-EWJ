import { Productjourny } from './modules/resolvers/journy.resolver';
import { ewjSolutions } from './modules/resolvers/solutions.resolver';
import { Assessment } from './modules/resolvers/assesment.resolver';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
    resolve: {
      solutions: ewjSolutions,
      productJouerny: Productjourny,
      assessment: Assessment,
    },
  },
  {
    path: 'solutionsPage',
    loadChildren: () =>
      import('./modules/solutions/solutions.module').then(
        (m) => m.SolutionsModule
      ),
    resolve: {
      solutions: ewjSolutions,
      productJouerny: Productjourny,
      assessment: Assessment,
    },
  },
  {
    path: 'FreeAssesment',
    loadChildren: () =>
      import('./modules/free-assesment/free-assesment.module').then(
        (m) => m.FreeAssesmentModule
      ),
    resolve: { assessment: Assessment },
  },
  {
    path: 'resources',
    loadChildren: () =>
      import('./modules/resources/resources.module').then(
        (m) => m.ResourcesModule
      ),
  },
  {
    path: 'solutionPartner',
    loadChildren: () =>
      import('./modules/solution-partner/solution-partner.module').then(
        (m) => m.SolutionPartnerModule
      ),
    resolve: {
      solutions: ewjSolutions,
    },
  },
  {
    path: 'contactUS',
    loadChildren: () =>
      import('./modules/contact-us/contact-us.module').then(
        (m) => m.ContactUSModule
      ),
  },
  // },
  // {
  //   path: 'homepage',
  //   loadChildren: () =>
  //     import('./landing-page/landing-page.module').then(
  //       (m) => m.LandingPageModule
  //     ),
  // },
  // {
  //   path: 'article-page',
  //   loadChildren: () =>
  //     import('./landing-page/article-page/article-page.module').then(
  //       (m) => m.ArticlePageModule
  //     ),
  // },
  // {
  //   path: 'articles-page',
  //   loadChildren: () =>
  //     import('./landing-page/articles-page/articles-page.module').then(
  //       (m) => m.ArticlesPageModule
  //     ),
  // },
  // {
  //   path: 'take-survey',
  //   loadChildren: () =>
  //     import('./landing-page/take-survey/take-survey.module').then(
  //       (m) => m.TakeSurveyModule
  //     ),
  // },

  // { path: 'assessment-page', loadChildren: () => import('./landing-page/assessment-page/assessment-page.module').then(m => m.AssessmentPageModule) },
  // { path: 'parteners-page', loadChildren: () => import('./landing-page/parteners-page/parteners-page.module').then(m => m.PartenersPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
