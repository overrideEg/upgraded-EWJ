import { Component, OnInit } from '@angular/core';
import { OverrideService } from 'src/app/shared/utils/override.service';
import { Card } from '../layout/card-one/cardone';
import { sectionHeader } from '../layout/section-header/section-header';

@Component({
  selector: 'app-assessment-page',
  templateUrl: './assessment-page.component.html',
  styleUrls: ['./assessment-page.component.scss']
})
export class AssessmentPageComponent implements OnInit {

  constructor( public override: OverrideService) { }

  ngOnInit(): void {
    window.scrollTo(0,0)
  }
  sectionHeader: sectionHeader[] = [
    {
      title: {
        en: 'Free Assessment',
        ar: 'تقييم مجاني',
      },
      details: {
        ar: ' ',
        en: ' '
      },
    },
  ];

  cardDataOne: Card[] = [
    {
      title:{
        ar:'1 عنوان الكارت',
        en:'Title '
      },
      details:{
        ar:'بعض الأمثلة السريعة على النص للبناء على عنوان البطاقة   وتشكل الجزء الأكبر من محتوى البطاقة.',
        en: "It's the most effective way to prevent the spread of germs."
      },
      image:{
        src:'assets/img/resourses1.png',
        alt:"",
        link:"/article-page"
    },
      button:{
        link:"/article-page",
        ar: "للمزيد",
        en:"Learn More"
      }
    },
    {
      title:{
        ar:'1 عنوان الكارت',
        en:'Title'
      },
      details:{
        ar:'بعض الأمثلة السريعة على النص للبناء على عنوان البطاقة   وتشكل الجزء الأكبر من محتوى البطاقة.',
        en: "It's the most effective way to prevent the spread of germs,   "
      },
      image:{
        src:'assets/img/resourses2.png',
        alt:"",
        link:"/article-page"
    },
      button:{
        link:"/article-page",
        ar: "للمزيد",
        en:"Learn More"
      }
    },
    {
      title:{
        ar:'1 عنوان الكارت',
        en:'Title'
      },
      details:{
        ar:'بعض الأمثلة السريعة على النص للبناء على عنوان البطاقة   وتشكل الجزء الأكبر من محتوى البطاقة.',
        en: "It's the most effective way to prevent the spread of germs."
      },
      image:{
        src:'assets/img/resourses3.png',
        alt:"",
        link:"/article-page"
    },
      button:{
        link:"/article-page",
        ar: "للمزيد",
        en:"Learn More"
      }
    },
    {
      title:{
        ar:'1 عنوان الكارت',
        en:'Title '
      },
      details:{
        ar:'بعض الأمثلة السريعة على النص للبناء على عنوان البطاقة   وتشكل الجزء الأكبر من محتوى البطاقة.',
        en: "It's the most effective way to prevent the spread of germs."
      },
      image:{
        src:'assets/img/resourses1.png',
        alt:"",
        link:"/article-page"
    },
      button:{
        link:"/article-page",
        ar: "للمزيد",
        en:"Learn More"
      }
    },
  
  ];
  

}
