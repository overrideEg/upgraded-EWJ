import { Component, OnInit } from '@angular/core';
import { OverrideService } from 'src/app/shared/utils/override.service';
import { sectionHeader } from "../layout/section-header/section-header";
import { Card } from '../layout/card-one/cardone';
@Component({
  selector: 'app-resourses-section',
  templateUrl: './resourses-section.component.html',
  styleUrls: ['./resourses-section.component.scss']
})
export class ResoursesSectionComponent implements OnInit {

  constructor(public override: OverrideService) { }

  ngOnInit(): void {
    window.scrollTo(0,0)
  }
  sectionHeader: sectionHeader[] = [
    {
      title: {
        ar: '1 عنوان الكارت',
        en: 'Resourses'
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
        en:'Hand Washing'
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
        en:'Hand Washing'
      },
      details:{
        ar:'بعض الأمثلة السريعة على النص للبناء على عنوان البطاقة   وتشكل الجزء الأكبر من محتوى البطاقة.',
        en: "It's the most effective way to prevent the spread of germs,It's the most effective way It's the most effective way to prevent It's the most effective way to prevent the spread of germs.     "
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
        en:'Hand Washing'
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


  
  ];

}
