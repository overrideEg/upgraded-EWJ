import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingSectionComponent } from './landing-section/landing-section.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlModule } from 'ngx-owl-carousel';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CardOneComponent } from './layout/card-one/card-one.component';
import { CardTwoComponent } from './layout/card-two/card-two.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRippleModule } from '@angular/material/core';
import { FooterComponent } from './footer/footer.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';

// import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EwjSolutionsSectionComponent } from './ewj-solutions-section/ewj-solutions-section.component';
// import { AboutSectionComponent } from './about-section/about-section.component';
import { SectionHeaderComponent } from './layout/section-header/section-header.component';
import { ProductJourneySectionComponent } from './product-journey-section/product-journey-section.component';
import { ProductSolutionsComponent } from './product-solutions/product-solutions.component';
import { ExpansionPanelComponent } from './layout/expansion-panel/expansion-panel.component';
import { ResoursesSectionComponent } from './resourses-section/resourses-section.component';
import { SurveySectionComponent } from './survey-section/survey-section.component';
import { PartenersSectionComponent } from './parteners-section/parteners-section.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PostComponent } from './layout/post/post.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { PaginationComponent } from './layout/pagination/pagination.component';
import { AssessmentPageComponent } from './assessment-page/assessment-page.component';
import { PartenersPageComponent } from './parteners-page/parteners-page.component';
import { WebsiteLoaderComponent } from './layout/website-loader/website-loader.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LandingPageComponent,
    NavbarComponent,
    LandingSectionComponent,
    CardOneComponent,
    CardTwoComponent,
    SidebarComponent,
    FooterComponent,
    EwjSolutionsSectionComponent,
    // AboutSectionComponent,
    SectionHeaderComponent,
    ProductJourneySectionComponent,
    ProductSolutionsComponent,
    ExpansionPanelComponent,
    ResoursesSectionComponent,
    SurveySectionComponent,
    PartenersSectionComponent,
    ContactUsComponent,
    PostComponent,
    ContactUsPageComponent,
    PaginationComponent,
    AssessmentPageComponent,
    PartenersPageComponent,
    WebsiteLoaderComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    CarouselModule,
    OwlModule,
    SharedModule,
    //Imports Material Form
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatDialogModule,
    MatListModule,
    MatExpansionModule,
    MatRippleModule,
    MatTabsModule,
    HttpClientModule,
    MatSnackBarModule,
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: httpTranslateLoader,
    //     deps: [HttpClient]
    //   }
    // })
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MatDialogModule,
    ExpansionPanelComponent,
    // layout
    CardOneComponent,
    CardTwoComponent,
    PostComponent,
    SectionHeaderComponent,
    PaginationComponent,
    // TranslateModule,

    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatDialogModule,
    MatListModule,
    MatExpansionModule,
    MatRippleModule,
    MatTabsModule,
    OwlModule,
    CarouselModule,
    MatSnackBarModule,
  ],
})
export class LandingPageModule {
  //   constructor(
  //     private translate: TranslateService) {
  //     translate.addLangs(["ar", "en"]);
  //     translate.setDefaultLang(localStorage.getItem('language') || (this.translate.getBrowserLang() == 'ar' || this.translate.getBrowserLang() == 'en' ? this.translate.getBrowserLang() : 'en'));
  //     translate.use(localStorage.getItem('language') || (this.translate.getBrowserLang() == 'ar' || this.translate.getBrowserLang() == 'en' ? this.translate.getBrowserLang() : 'en'));
  // }
}

// export function httpTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http);
// }
