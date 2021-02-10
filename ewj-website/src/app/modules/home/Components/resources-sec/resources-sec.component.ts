import { sectionHeader } from './../../../../landing-page/layout/section-header/section-header';
import { Card } from './../../../../landing-page/layout/card-one/cardone';
import { API_URLS } from './../../../../../assets/constants/API_URLS';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ApiDataService } from 'src/app/shared/utils/api-data.service';
import { OverrideService } from 'src/app/shared/utils/override.service';
import { UtilsService } from 'src/app/shared/utils/utils.service';

@Component({
  selector: 'app-resources-sec',
  templateUrl: './resources-sec.component.html',
  styleUrls: ['./resources-sec.component.scss'],
})
export class ResourcesSecComponent implements OnInit {
  sectionHeader: sectionHeader[] = [
    {
      title: {
        en: 'Free Assessment',
        ar: 'تقييم مجاني',
      },
      details: {
        ar: ' ',
        en: ' ',
      },
    },
  ];
  cardDataOne: Card[] = [
    {
      title: {
        ar: '1 عنوان الكارت',
        en: 'Hand Washing',
      },
      details: {
        ar:
          'بعض الأمثلة السريعة على النص للبناء على عنوان البطاقة   وتشكل الجزء الأكبر من محتوى البطاقة.',
        en: "It's the most effective way to prevent the spread of germs.",
      },
      image: {
        src: 'assets/img/resourses1.png',
        alt: '',
        link: '/article-page',
      },
      button: {
        link: '/article-page',
        ar: 'للمزيد',
        en: 'Learn More',
      },
    },
    {
      title: {
        ar: '1 عنوان الكارت',
        en: 'Hand Washing',
      },
      details: {
        ar:
          'بعض الأمثلة السريعة على النص للبناء على عنوان البطاقة   وتشكل الجزء الأكبر من محتوى البطاقة.',
        en:
          "It's the most effective way to prevent the spread of germs,It's the most effective way It's the most effective way to prevent It's the most effective way to prevent the spread of germs.     ",
      },
      image: {
        src: 'assets/img/resourses2.png',
        alt: '',
        link: '/article-page',
      },
      button: {
        link: '/article-page',
        ar: 'للمزيد',
        en: 'Learn More',
      },
    },
    {
      title: {
        ar: '1 عنوان الكارت',
        en: 'Hand Washing',
      },
      details: {
        ar:
          'بعض الأمثلة السريعة على النص للبناء على عنوان البطاقة   وتشكل الجزء الأكبر من محتوى البطاقة.',
        en: "It's the most effective way to prevent the spread of germs.",
      },
      image: {
        src: 'assets/img/resourses3.png',
        alt: '',
        link: '/article-page',
      },
      button: {
        link: '/article-page',
        ar: 'للمزيد',
        en: 'Learn More',
      },
    },
  ];
  Assessment_Subscrription: Subscription;
  Allassessment: any;
  constructor(
    private apiDataService: ApiDataService,
    public override: OverrideService,
    public _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.getData();
    this.Assessment_Subscrription = this._activatedRoute.data.subscribe(
      (res) => {
        console.log(res);
        this.Allassessment = res.assessment.body;
      }
    );
    window.scrollTo(0, 0);
  }
  getData() {
    this.Assessment_Subscrription = this.apiDataService
      .getData(API_URLS.Assessment.get, this.override.AuthHeaders)
      .subscribe((res: any) => {
        this.Allassessment = res.body;
      });
  }
  ngOnDestroy(): void {
    this.Assessment_Subscrription
      ? this.Assessment_Subscrription.unsubscribe()
      : null;
  }
}
