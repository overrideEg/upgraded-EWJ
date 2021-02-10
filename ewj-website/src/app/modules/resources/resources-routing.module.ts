import { SingleResoure } from './../resolvers/oneResource.resolver';
import { Resource } from './../resolvers/resources.resolver';
import { SingleArticlesComponent } from './components/single-articles/single-articles.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResourcesComponent } from './resources.component';
import { AllArticlesComponent } from './components/all-articles/all-articles.component';

const routes: Routes = [
  {
    path: '',
    component: ResourcesComponent,

    children: [
      {
        path: 'resources',
        component: AllArticlesComponent,
        resolve: { assessment: Resource },
      },
      {
        path: 'single-article/:id',
        component: SingleArticlesComponent,
        resolve: { assessment: SingleResoure },
      },
      { path: '', redirectTo: 'resources', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResourcesRoutingModule {}
