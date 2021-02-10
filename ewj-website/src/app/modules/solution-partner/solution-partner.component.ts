import { OverrideService } from 'src/app/shared/utils/override.service';
import { sectionHeader } from './../../landing-page/layout/section-header/section-header';
import { Cardtwo } from './../../landing-page/layout/card-two/cardtwo';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-solution-partner',
  templateUrl: './solution-partner.component.html',
  styleUrls: ['./solution-partner.component.scss'],
})
export class SolutionPartnerComponent implements OnInit {
  constructor(private override: OverrideService) {}

  ngOnInit(): void {}
  sectionHeader: sectionHeader[] = [
    {
      title: {
        en: 'EWJ Partners',
        ar: 'الشركاء',
      },
      details: {
        ar: ' ',
        en: ' ',
      },
    },
  ];

  cardDataTwo: Cardtwo[] = [
    {
      title: {
        ar: '1 عنوان الكارت',
        en: 'Symbosis Group',
      },
      details: {
        ar:
          'بعض الأمثلة السريعة على النص للبناء على عنوان البطاقة   وتشكل الجزء الأكبر من محتوى البطاقة.',
        en: "It's the most effective way to prevent the spread of germs.",
      },
      image: {
        src: 'assets/img/symbios2.gif',
        alt: '',
        link: '/',
      },
      button: {
        link: '/',
        ar: 'للمزيد',
        en: 'Learn More',
      },
    },
    {
      title: {
        ar: '1 عنوان الكارت',
        en: 'OPASS',
      },
      details: {
        ar:
          'بعض الأمثلة السريعة على النص للبناء على عنوان البطاقة   وتشكل الجزء الأكبر من محتوى البطاقة.',
        en: "It's the most effective way to prevent the spread of germs.",
      },
      image: {
        src: 'assets/img/opass.png',
        alt: '',
        link: '/',
      },
      button: {
        link: '/',
        ar: 'للمزيد',
        en: 'Learn More',
      },
    },
    {
      title: {
        ar: '1 عنوان الكارت',
        en: 'DivisionX Group',
      },
      details: {
        ar:
          'بعض الأمثلة السريعة على النص للبناء على عنوان البطاقة   وتشكل الجزء الأكبر من محتوى البطاقة.',
        en: "It's the most effective way to prevent the spread of germs.",
      },
      image: {
        src: 'assets/img/devx.jpg',
        alt: '',
        link: '/',
      },
      button: {
        link: '/',
        ar: 'للمزيد',
        en: 'Learn More',
      },
    },
    {
      title: {
        ar: '1 عنوان الكارت',
        en: 'Symbosis Group',
      },
      details: {
        ar:
          'بعض الأمثلة السريعة على النص للبناء على عنوان البطاقة   وتشكل الجزء الأكبر من محتوى البطاقة.',
        en: "It's the most effective way to prevent the spread of germs.",
      },
      image: {
        src: 'assets/img/symbios.png',
        alt: '',
        link: '/',
      },
      button: {
        link: '/',
        ar: 'للمزيد',
        en: 'Learn More',
      },
    },
  ];

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
}
