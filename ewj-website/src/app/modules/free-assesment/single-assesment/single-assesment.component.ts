import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiDataService } from 'src/app/shared/utils/api-data.service';
import { OverrideService } from 'src/app/shared/utils/override.service';
import { API_URLS } from 'src/assets/constants/API_URLS';

@Component({
  selector: 'app-single-assesment',
  templateUrl: './single-assesment.component.html',
  styleUrls: ['./single-assesment.component.scss'],
})
export class SingleAssesmentComponent implements OnInit {
  Resources_Subscrription: Subscription;
  AllResources: any;
  resourc_id;
  constructor(
    private apiDataService: ApiDataService,
    public override: OverrideService,
    private activatedrouter: ActivatedRoute
  ) {
    this.activatedrouter.params.subscribe((res) => {
      this.resourc_id = res.id;
      console.log(this.resourc_id);
    });
  }

  ngOnInit(): void {
    // this.getData();
    this.Resources_Subscrription = this.activatedrouter.data.subscribe(
      (res) => {
        console.log(res.singleAssessment.body);
        this.AllResources = res.singleAssessment.body;
      }
    );
    window.scrollTo(0, 0);
  }
  getData() {
    this.Resources_Subscrription = this.apiDataService
      .getData(
        API_URLS.Resource.getOne.replace('{entityId}', this.resourc_id),
        this.override.AuthHeaders
      )
      .subscribe((res: any) => {
        this.AllResources = res.body;
      });
  }
  ngOnDestroy(): void {
    this.Resources_Subscrription
      ? this.Resources_Subscrription.unsubscribe()
      : null;
  }
}
