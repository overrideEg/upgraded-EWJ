import { sectionHeader } from './../../../../landing-page/layout/section-header/section-header';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './go-totouney.component.html',
  styleUrls: ['./go-totouney.component.scss'],
})
export class GoTotouneyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  sectionHeader: sectionHeader[] = [
    {
      title: {
        ar: 'رحلة المنتج',
        en: 'Product Journey',
      },
      details: {
        ar: ' ',
        en: ' ',
      },
    },
  ];

  public sectionContent = [
    {
      title: {
        ar: '',
        en: 'Configure Your company',
      },
      details: {
        ar: '',
        en:
          "Set up your company's profile, by choosing the right mix of software and hardware solutions combination per your industry needs.",
      },
      img: 'assets/svg/features-1.svg',
    },
    {
      title: {
        ar: '',
        en: 'Add Your Employees',
      },
      details: {
        ar: '',
        en:
          'Get your employee involved in transforming their work experience. Enable their continuous improvement and assessment through courses and questionnaires.',
      },
      img: 'assets/svg/features-2.svg',
    },
    {
      title: {
        ar: '',
        en: 'Optimize Wellness',
      },
      details: {
        ar: '',
        en:
          "Enable intelligence based decision making to optimize your employees' wellness. Use data to your advantage. Know where exactly do you need to focus to reach optimal business results for you and your employees.",
      },
      img: 'assets/svg/features-3.svg',
    },
  ];
}
