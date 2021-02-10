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
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss'],
})
export class SolutionsComponent implements OnInit {
  solution_Subscrription: Subscription;
  ALLsolution: any;
  constructor(
    private apiDataService: ApiDataService,
    private router: Router,
    private activedRoute: ActivatedRoute,
    public override: OverrideService
  ) {}

  ngOnInit(): void {
    this.getData();
    this.ALLsolution;
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
