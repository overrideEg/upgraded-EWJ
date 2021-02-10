import { API_URLS } from './../../../../../assets/constants/API_URLS';
import { sectionHeader } from './../../../../landing-page/layout/section-header/section-header';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ApiDataService } from 'src/app/shared/utils/api-data.service';
import { OverrideService } from 'src/app/shared/utils/override.service';
import { UtilsService } from 'src/app/shared/utils/utils.service';

@Component({
  selector: 'app-ewjsolution-sec',
  templateUrl: './ewjsolution-sec.component.html',
  styleUrls: ['./ewjsolution-sec.component.scss'],
})
export class EWJSolutionSecComponent implements OnInit, OnDestroy {
  sectionHeader: sectionHeader[] = [
    {
      title: {
        ar: 'حلول EWJ',
        en: 'EWJ Solutions',
      },
      details: {
        ar: '',
        en:
          'We want to lead you into optimizing your Employee Wellness Journey.',
      },
    },
  ];
  solution_Subscrription: Subscription;
  ALLsolution: any;
  constructor(
    private apiDataService: ApiDataService,
    private router: Router,
    private _activateRoue: ActivatedRoute,
    public override: OverrideService
  ) {}

  ngOnInit(): void {
    // this.getData();
    this.solution_Subscrription = this._activateRoue.data.subscribe((res) => {
      this.ALLsolution = res.solutions.body;
    });
  }
  getData() {
    this.solution_Subscrription = this.apiDataService
      .getData(API_URLS.Solution.get, this.override.AuthHeaders)
      .subscribe((res: any) => {
        this.ALLsolution = res.body;
      });
  }
  ngOnDestroy(): void {
    this.solution_Subscrription
      ? this.solution_Subscrription.unsubscribe()
      : null;
  }
}
