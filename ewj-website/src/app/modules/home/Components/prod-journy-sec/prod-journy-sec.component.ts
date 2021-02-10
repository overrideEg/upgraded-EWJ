import { sectionHeader } from './../../../../landing-page/layout/section-header/section-header';
import { API_URLS } from './../../../../../assets/constants/API_URLS';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ApiDataService } from 'src/app/shared/utils/api-data.service';
import { OverrideService } from 'src/app/shared/utils/override.service';
import { UtilsService } from 'src/app/shared/utils/utils.service';
@Component({
  selector: 'app-prod-journy-sec',
  templateUrl: './prod-journy-sec.component.html',
  styleUrls: ['./prod-journy-sec.component.scss'],
})
export class ProdJournySecComponent implements OnInit {
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
  product_Subscrription: Subscription;
  ALLproduct: any;
  constructor(
    private apiDataService: ApiDataService,
    private router: Router,
    private activedRoute: ActivatedRoute,
    public override: OverrideService
  ) {}

  ngOnInit(): void {
    this.product_Subscrription = this.activedRoute.data.subscribe((res) => {
      this.ALLproduct = res.productJouerny.body;
      console.log(this.ALLproduct);
    });
    // this.getData();
  }
  getData() {
    this.product_Subscrription = this.apiDataService
      .getData(API_URLS.Product.get, this.override.AuthHeaders)
      .subscribe((res: any) => {
        this.ALLproduct = res.body;
      });
  }
  ngOnDestroy(): void {
    this.product_Subscrription
      ? this.product_Subscrription.unsubscribe()
      : null;
  }
}
