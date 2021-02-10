import { Component, OnInit } from '@angular/core';
import { OverrideService } from 'src/app/shared/utils/override.service';
import { sectionHeader } from '../layout/section-header/section-header';
@Component({
  selector: 'app-take-survey',
  templateUrl: './take-survey.component.html',
  styleUrls: ['./take-survey.component.scss']
})
export class TakeSurveyComponent implements OnInit {

  constructor(
    public override: OverrideService,
  ) { }

  ngOnInit(): void {
  }
  sectionHeader: sectionHeader[] = [
    {
      title: {
        en: 'Take Survey',
        ar: 'ابدأ الاستبيان',
      },
      details: {
        ar: 'يرجى استخدام هذا الاستبيان كقائمة مراجعة لاستعدادك الحالي للعمل في "الوضع الطبيعي الجديد" ، أي. تعمل في أوقات فيروس كورونا. من أجل تلبية المطالب "الطبيعية الجديدة" للموظفين بالعودة إلى فترات العمل        ',
        en: 'Please use this survey as a checklist for your current preparedness to operating in the "new normal", I.e. operating in times of the coronavirus. In order to meet the "new normal" demands of the employees back to work periods'
      },
    },
  ];
}
