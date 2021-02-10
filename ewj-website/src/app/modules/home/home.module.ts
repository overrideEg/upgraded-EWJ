import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { HeadeHomeComponent } from './Components/heade-home/heade-home.component';
import { EWJSolutionSecComponent } from './Components/ewjsolution-sec/ewjsolution-sec.component';
import { InclSolutionSecComponent } from './Components/incl-solution-sec/incl-solution-sec.component';
import { ProdSolutionSecComponent } from './Components/prod-solution-sec/prod-solution-sec.component';
import { ProdJournySecComponent } from './Components/prod-journy-sec/prod-journy-sec.component';
import { ResourcesSecComponent } from './Components/resources-sec/resources-sec.component';
import { PartnerSecComponent } from './Components/partner-sec/partner-sec.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { OwlModule } from 'ngx-owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LandingPageModule } from 'src/app/landing-page/landing-page.module';

@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    HeadeHomeComponent,
    EWJSolutionSecComponent,
    InclSolutionSecComponent,
    ProdSolutionSecComponent,
    ProdJournySecComponent,
    ResourcesSecComponent,
    PartnerSecComponent,
    FooterComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, LandingPageModule, SharedModule],
  exports: [
    NavBarComponent,
    FooterComponent,
    SharedModule,
    HomeComponent,
    NavBarComponent,
    HeadeHomeComponent,
    EWJSolutionSecComponent,
    InclSolutionSecComponent,
    ProdSolutionSecComponent,
    ProdJournySecComponent,
    ResourcesSecComponent,
    PartnerSecComponent,
    FooterComponent,
  ],
})
export class HomeModule {}
