import {
  Component,
  ComponentFactoryResolver,
  HostListener,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

import { LoaderService } from 'src/services/loader.service';
import { OverrideService } from './shared/utils/override.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'project';

  constructor(
    // public translate: TranslateService,
    public override: OverrideService,
    private loaderService: LoaderService,
    private renderer: Renderer2
  ) {
    // translate.addLangs(['en', 'ar', 'tr']);
    // translate.setDefaultLang('en');
    // this.override.setStyle()
  }

  ngOnInit() {}

  @HostListener('window:scroll', ['$event']) onMousewheel(event) {
    let nav = document.getElementsByTagName('nav') as HTMLCollection;
    let icon = document.getElementById('ewjIcon');
    let logo = document.getElementById('ewjLogo');
    let height = window.pageYOffset;
    for (let i = 0; i < nav.length; i++) {
      const element = nav[i];
      if (height >= 720) {
        element.classList.add('active_nav');
        element.classList.add('fixed-top');
        icon.classList.add('activeIcon');
        logo.classList.remove('activeLogo');
      } else {
        element.classList.remove('active_nav');
        element.classList.remove('fixed-top');
        logo.classList.add('activeLogo');
        icon.classList.remove('activeIcon');
      }
    }
  }

  ngAfterViewInit() {
    // this.loaderService.httpProgress().subscribe((status: boolean) => {
    //   if (status) {
    //     this.renderer.addClass(document.body, 'cursor-loader');
    //   } else {
    //     this.renderer.removeClass(document.body, 'cursor-loader');
    //   }
    // });
  }
}
