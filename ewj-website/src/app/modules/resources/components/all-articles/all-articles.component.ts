import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiDataService } from 'src/app/shared/utils/api-data.service';
import { OverrideService } from 'src/app/shared/utils/override.service';
import { API_URLS } from 'src/assets/constants/API_URLS';
@Component({
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.scss'],
})
export class AllArticlesComponent implements OnInit {
  Resources_Subscrription: Subscription;
  AllResources: any;
  numberOfPage: number;
  page: number = 1;
  constructor(
    private apiDataService: ApiDataService,
    public override: OverrideService,
    public _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.getData();
    this.Resources_Subscrription = this._activatedRoute.data.subscribe(
      (res) => {
        console.log(res);
        this.AllResources = res.assessment.body;
      }
    );
    window.scrollTo(0, 0);
  }
  getData() {
    this.Resources_Subscrription = this.apiDataService
      .getData(API_URLS.Resource.get, this.override.AuthHeaders)
      .subscribe((res: any) => {
        this.AllResources = res.body;
        this.numberOfPage = this.AllResources.length;
      });
  }
  ngOnDestroy(): void {
    this.Resources_Subscrription
      ? this.Resources_Subscrription.unsubscribe()
      : null;
  }
}
