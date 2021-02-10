import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesComponent } from './resources.component';
import { HomeModule } from '../home/home.module';
import { PostComponent } from 'src/app/landing-page/layout/post/post.component';
import { PaginationComponent } from 'src/app/landing-page/layout/pagination/pagination.component';
import { LandingPageModule } from 'src/app/landing-page/landing-page.module';
import { AllArticlesComponent } from './components/all-articles/all-articles.component';
import { SingleArticlesComponent } from './components/single-articles/single-articles.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ResourcesComponent,
    AllArticlesComponent,
    SingleArticlesComponent,
  ],
  imports: [
    CommonModule,
    ResourcesRoutingModule,
    HomeModule,
    LandingPageModule,
    SharedModule,
  ],
})
export class ResourcesModule {}
