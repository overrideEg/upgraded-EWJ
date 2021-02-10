import { sectionHeader } from './../../landing-page/layout/section-header/section-header';
import { Card } from './../../landing-page/layout/card-one/cardone';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ApiDataService } from 'src/app/shared/utils/api-data.service';
import { OverrideService } from 'src/app/shared/utils/override.service';
import { UtilsService } from 'src/app/shared/utils/utils.service';
import { API_URLS } from 'src/assets/constants/API_URLS';
@Component({
  selector: 'app-free-assesment',
  templateUrl: './free-assesment.component.html',
  styleUrls: ['./free-assesment.component.scss'],
})
export class FreeAssesmentComponent implements OnInit {
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
  numberOfPage: number;
  page: number = 1;
  Assessment_Subscrription: Subscription;
  Allassessment: any;
  constructor(
    private apiDataService: ApiDataService,
    public override: OverrideService,
    private _activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.getData();
    this.Assessment_Subscrription = this._activedRoute.data.subscribe((res) => {
      this.Allassessment = res.assessment.body;
    });
    window.scrollTo(0, 0);
  }
  getData() {
    this.Assessment_Subscrription = this.apiDataService
      .getData(API_URLS.Assessment.get, this.override.AuthHeaders)
      .subscribe((res: any) => {
        this.Allassessment = res.body;
        this.numberOfPage = this.Allassessment.length;
      });
  }
  ngOnDestroy(): void {
    this.Assessment_Subscrription
      ? this.Assessment_Subscrription.unsubscribe()
      : null;
  }
}
