import { API_URLS } from './../../../../../assets/constants/API_URLS';
import { sectionHeader } from './../../../../landing-page/layout/section-header/section-header';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ApiDataService } from 'src/app/shared/utils/api-data.service';
import { OverrideService } from 'src/app/shared/utils/override.service';
import { UtilsService } from 'src/app/shared/utils/utils.service';
@Component({
  selector: 'app-prod-solution-sec',
  templateUrl: './prod-solution-sec.component.html',
  styleUrls: ['./prod-solution-sec.component.scss'],
})
export class ProdSolutionSecComponent implements OnInit, OnDestroy {
  sectionHeader: sectionHeader[] = [
    {
      title: {
        ar: 'الحلول',
        en: 'Product Solutions',
      },
      details: {
        ar: ' ',
        en: ' ',
      },
    },
  ];
  category_Subscrription: Subscription;
  Allcategory: any;
  // expansionPanel: expansionPanel[] = [
  //   {
  //     expansionTitle: {
  //       ar: 'عنوان',
  //       en: 'IOT',
  //     },
  //     expansionDetails: {
  //       ar: ' كلام كتيييييييييييييييييييييييير',
  //       en:
  //         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled        ",
  //     },
  //     card: [
  //       {
  //         title: {
  //           ar: 'عنوان',
  //           en: 'Smart Thermal Facial Recognition',
  //         },
  //         details: {
  //           ar: ' كلام كتيييييييييييييييييييييييير',
  //           en:
  //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled        ",
  //         },
  //         img: {
  //           src: 'assets/icons/user-images@2x.png',
  //         },
  //       },
  //       {
  //         title: {
  //           ar: 'عنوان',
  //           en: 'Smart Watches & Bracelets',
  //         },
  //         details: {
  //           ar: ' كلام كتيييييييييييييييييييييييير',
  //           en:
  //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled        ",
  //         },
  //         img: {
  //           src: 'assets/icons/smart-watch-1@2x.png',
  //         },
  //       },
  //       {
  //         title: {
  //           ar: 'عنوان',
  //           en: 'Smart Air Quality',
  //         },
  //         details: {
  //           ar: ' كلام كتيييييييييييييييييييييييير',
  //           en:
  //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled        ",
  //         },
  //         img: {
  //           src: 'assets/icons/air-purifier@2x.png',
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     expansionTitle: {
  //       ar: 'عنوان',
  //       en: 'AI',
  //     },
  //     expansionDetails: {
  //       ar: ' كلام كتيييييييييييييييييييييييير',
  //       en:
  //         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled        ",
  //     },
  //     card: [
  //       {
  //         title: {
  //           ar: 'عنوان',
  //           en: 'Smart Thermal Facial Recognition',
  //         },
  //         details: {
  //           ar: ' كلام كتيييييييييييييييييييييييير',
  //           en:
  //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled        ",
  //         },
  //         img: {
  //           src: 'assets/icons/user-images@2x.png',
  //         },
  //       },
  //       {
  //         title: {
  //           ar: 'عنوان',
  //           en: 'Smart Watches & Bracelets',
  //         },
  //         details: {
  //           ar: ' كلام كتيييييييييييييييييييييييير',
  //           en:
  //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled        ",
  //         },
  //         img: {
  //           src: 'assets/icons/smart-watch-1@2x.png',
  //         },
  //       },
  //       {
  //         title: {
  //           ar: 'عنوان',
  //           en: 'Smart Air Quality',
  //         },
  //         details: {
  //           ar: ' كلام كتيييييييييييييييييييييييير',
  //           en:
  //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled        ",
  //         },
  //         img: {
  //           src: 'assets/icons/air-purifier@2x.png',
  //         },
  //       },
  //     ],
  //   },
  // ];

  constructor(
    private apiDataService: ApiDataService,
    private router: Router,
    private activedRoute: ActivatedRoute,
    public override: OverrideService
  ) {}

  ngOnInit(): void {
    // this.getData();
    this.category_Subscrription = this.activedRoute.data.subscribe((res) => {
      this.Allcategory = res.productJouerny.body;
      console.log(this.Allcategory);
    });
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
