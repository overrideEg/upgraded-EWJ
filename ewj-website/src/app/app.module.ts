import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlModule } from 'ngx-owl-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeService } from '../services/theming.service';
import { LoaderInterceptor } from '../services/loader-interceptor.service';

import { LanguageService } from '../services/language.service';
// import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  HttpClient,
  HttpHandler,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { MatDialogModule } from '@angular/material/dialog';

export function httpTranslateLoader(http: HttpClient) {
  // return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    OwlModule,
    MatDialogModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: httpTranslateLoader,
    //     deps: [HttpClient],
    //   }
    // }),

    AngularFireModule.initializeApp(environment, 'ewj-new'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    ThemeService,
    LanguageService,
    HttpClient,
    MatDialogModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
})
export class AppModule {
  // constructor(private translate: TranslateService) {
  //   let lang = this.translate.getBrowserCultureLang();
  //   if (lang !== 'ar' && lang !== 'en')
  //     lang = 'en'
  //   this.translate.use(lang);
  //   localStorage.setItem('activeLanguage', lang)
  // }
}
