import { Component, OnInit, Input } from '@angular/core';
import { sectionDetails } from 'src/app/landing-page/landing-section/landing-section.component';

@Component({
  selector: 'app-heade-home',
  templateUrl: './heade-home.component.html',
  styleUrls: ['./heade-home.component.scss'],
})
export class HeadeHomeComponent implements OnInit {
  @Input() details: sectionDetails;
  constructor() {}

  ngOnInit(): void {}
  public sectionDetails: sectionDetails[] = [
    {
      title: {
        ar: 'مرحبا بك في',
        en: 'Welcome to ',
      },
      titleTwo: {
        ar: 'Employee Wellness Journey',
        en: 'Employee Wellness Journey ',
      },

      details: {
        ar:
          'لا أحد محصن من الضغوطات المتعددة التي تسببها الاضطرابات التجارية. ما الذي يمكن أن يفعله القادة لتحسين القدرة على التحمل؟ اعتمادًا على قطاعها ، أصاب الاضطراب المنظمات بشكل مختلف تمامًا. لكن العامل المشترك الوحيد للجميع هو أن الحياة أكثر إرهاقًا بلا حدود.        ',
        en:
          'No one is immune from the multiple stressors being caused by business turbulence. What can leaders do to improve wellbeing stamina? Depending on their sector, turbulence hit organizations very differently. But the single common factor for everyone is that life is infinitely more stressful.',
      },
      image: {
        src: 'assets/img/EWJ.mp4',
        alt: '/',
      },
    },
  ];
}
