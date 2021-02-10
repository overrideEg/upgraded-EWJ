import { API_URLS } from './../../../../assets/constants/API_URLS';
import { expansionPanel } from './expansion-panel';
import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ApiDataService } from 'src/app/shared/utils/api-data.service';
import { OverrideService } from 'src/app/shared/utils/override.service';
import { UtilsService } from 'src/app/shared/utils/utils.service';
@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
})
export class ExpansionPanelComponent implements OnInit {
  @Input() expansionPanel: expansionPanel;
  category_Subscrription: Subscription;
  Allcategory: any;
  constructor(
    private apiDataService: ApiDataService,
    private router: Router,
    private activedRoute: ActivatedRoute,
    public override: OverrideService
  ) {}

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.category_Subscrription = this.apiDataService
      .getData(API_URLS.Solution.get, this.override.AuthHeaders)
      .subscribe((res: any) => {
        this.Allcategory = res.body;
      });
  }
  ngOnDestroy(): void {
    this.category_Subscrription
      ? this.category_Subscrription.unsubscribe()
      : null;
  }
}
