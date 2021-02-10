import { Component, OnInit } from '@angular/core';
import { sectionHeader } from '../layout/section-header/section-header';

@Component({
  selector: 'app-contact-us-page',
  templateUrl: './contact-us-page.component.html',
  styleUrls: ['./contact-us-page.component.scss']
})
export class ContactUsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  sectionHeader: sectionHeader[] = [
    {
      title: {
        en: 'Contact US',
        ar: 'تواصل معنا',
      },
      details: {
        ar: '',
        en: ''
      },
    },
  ];

}
