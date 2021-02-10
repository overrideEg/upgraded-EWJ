import { OverrideService } from 'src/app/shared/utils/override.service';
import { Component, OnInit } from '@angular/core';
export interface sectionDetails {
  title?: {
    ar?: string;
    en?: string;
  };
  list?: {
    listTitle?: {
      ar?: string;
      en?: string;
    };
    listContent?: {
      ar?: string;
      en?: string;
    }[];
  }[];
  details?: {
    ar?: string;
    en?: string;
  }[];
  image?: {
    src?: string;
    alt?: string;
  };
}
@Component({
  selector: 'app-incl-solution-sec',
  templateUrl: './incl-solution-sec.component.html',
  styleUrls: ['./incl-solution-sec.component.scss'],
})
export class InclSolutionSecComponent implements OnInit {
  constructor(public override: OverrideService) {}

  ngOnInit(): void {}
  public sectionDetails: sectionDetails[] = [
    {
      title: {
        ar: 'حلول إشراك الموظفين والشمول',
        en: 'The Employees Engagement and Inclusion Solutions',
      },

      list: [
        {
          listTitle: {
            ar: 'أولويتنا',
            en: 'Our Priority',
          },
          listContent: [
            {
              ar: 'حماية سبل العيش.',
              en: ' Protect livelihoods.',
            },
            {
              ar: 'تسهيل استمرارية العمل',
              en: 'Facilitate business continuity',
            },
          ],
        },
      ],
      details: [
        {
          ar:
            'EWJ عبارة عن حزمة ذكية وقابلة للتخصيص وقابلة للتطوير من التقنيات والبرامج والأجهزة الرقمية ، مما يساعد على التفوق في أي موقف.        ',
          en:
            'EWJ is customizable, intelligent, scale-able package of digital technologies, software and hardware, that helps excel in any situation.',
        },
        {
          ar:
            'اتخذ الخطوة الذكية الآن ، استثمر في أصولك البشرية ، أهم الأصول في عصرنا. استخدم قوة التكنولوجيا لصالحك. مراجعة حالة المخاطر لموظفيك بسرعة. اتخذ إجراءات وقائية قبل انتشار المخاطر.',
          en:
            'Take the smart step now, invest in your human assets, the most important asset of our time. Use the power of technology of your advantage. Quickly review risk status of your employees. Take preventive action before risk spreads.',
        },
      ],
      image: {
        src: 'assets/img/employee-wearing-mask.jpg',
        alt: '/',
      },
    },
  ];
}
