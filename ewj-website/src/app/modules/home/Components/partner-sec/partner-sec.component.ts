import { API_URLS } from './../../../../../assets/constants/API_URLS';
import { sectionHeader } from './../../../../landing-page/layout/section-header/section-header';
import { Cardtwo } from './../../../../landing-page/layout/card-two/cardtwo';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute, Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ApiDataService } from 'src/app/shared/utils/api-data.service';
import { OverrideService } from 'src/app/shared/utils/override.service';

@Component({
  selector: 'app-partner-sec',
  templateUrl: './partner-sec.component.html',
  styleUrls: ['./partner-sec.component.scss'],
})
export class PartnerSecComponent implements OnInit, OnDestroy {
  sectionHeader: sectionHeader[] = [
    {
      title: {
        ar: 'الشركاء',
        en: 'EWJ Partners',
      },
      details: {
        ar: ' ',
        en: ' ',
      },
    },
  ];

  // cardDataTwo: Cardtwo[] = [
  //   {
  //     title: {
  //       ar: '1 عنوان الكارت',
  //       en: 'Symbosis Group',
  //     },
  //     details: {
  //       ar:
  //         'بعض الأمثلة السريعة على النص للبناء على عنوان البطاقة   وتشكل الجزء الأكبر من محتوى البطاقة.',
  //       en: "It's the most effective way to prevent the spread of germs.",
  //     },
  //     image: {
  //       src: 'assets/img/symbios2.gif',
  //       alt: '',
  //       link: '/',
  //     },
  //     button: {
  //       link: '/',
  //       ar: 'للمزيد',
  //       en: 'Learn More',
  //     },
  //   },
  //   {
  //     title: {
  //       ar: '1 عنوان الكارت',
  //       en: 'OPASS',
  //     },
  //     details: {
  //       ar:
  //         'بعض الأمثلة السريعة على النص للبناء على عنوان البطاقة   وتشكل الجزء الأكبر من محتوى البطاقة.',
  //       en: "It's the most effective way to prevent the spread of germs.",
  //     },
  //     image: {
  //       src: 'assets/img/opass.png',
  //       alt: '',
  //       link: '/',
  //     },
  //     button: {
  //       link: '/',
  //       ar: 'للمزيد',
  //       en: 'Learn More',
  //     },
  //   },
  //   {
  //     title: {
  //       ar: '1 عنوان الكارت',
  //       en: 'DivisionX Group',
  //     },
  //     details: {
  //       ar:
  //         'بعض الأمثلة السريعة على النص للبناء على عنوان البطاقة   وتشكل الجزء الأكبر من محتوى البطاقة.',
  //       en: "It's the most effective way to prevent the spread of germs.",
  //     },
  //     image: {
  //       src: 'assets/img/devx.jpg',
  //       alt: '',
  //       link: '/',
  //     },
  //     button: {
  //       link: '/',
  //       ar: 'للمزيد',
  //       en: 'Learn More',
  //     },
  //   },
  //   {
  //     title: {
  //       ar: '1 عنوان الكارت',
  //       en: 'Symbosis Group',
  //     },
  //     details: {
  //       ar:
  //         'بعض الأمثلة السريعة على النص للبناء على عنوان البطاقة   وتشكل الجزء الأكبر من محتوى البطاقة.',
  //       en: "It's the most effective way to prevent the spread of germs.",
  //     },
  //     image: {
  //       src: 'assets/img/symbios.png',
  //       alt: '',
  //       link: '/',
  //     },
  //     button: {
  //       link: '/',
  //       ar: 'للمزيد',
  //       en: 'Learn More',
  //     },
  //   },
  // ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    rtl: this.override.isRTL(),
    navSpeed: 2000,
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
    autoplay: true,
    autoplayTimeout: 5500,
    autoplayHoverPause: false,
    margin: 10,
    animateOut: 'fadeOut',
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
  button: {
    ar: 'للمزيد';
    en: 'Learn More';
  };
  solution_Subscrription: Subscription;
  ALLsolution: any;
  constructor(
    private apiDataService: ApiDataService,
    public override: OverrideService,
    public _activateRoue: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.getData();
    this.solution_Subscrription = this._activateRoue.data.subscribe((res) => {
      this.ALLsolution = res.solutions.body;
    });
  }
  getData() {
    this.solution_Subscrription = this.apiDataService
      .getData(API_URLS.Solution.get, this.override.AuthHeaders)
      .subscribe((res: any) => {
        this.ALLsolution = res.body;
      });
  }
  ngOnDestroy(): void {
    this.solution_Subscrription
      ? this.solution_Subscrription.unsubscribe()
      : null;
  }
}
