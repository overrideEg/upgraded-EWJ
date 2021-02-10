import { Component, OnInit, HostListener, ViewChild, Input } from '@angular/core';
import { ThemeService } from "../../../services/theming.service";
import { OverrideService } from 'src/app/shared/utils/override.service';
import { MatDialog } from '@angular/material/dialog';
import AOS from 'aos';
export interface sectionDetails {
  title: {
    ar: string;
    en: string
  },
  titleTwo: {
    ar: string;
    en: string
  },
  details: {
    ar: string;
    en: string
  },
  image: {
    src: string,
    alt: string,
  },
}

@Component({
  selector: 'app-landing-section',
  templateUrl: './landing-section.component.html',
  styleUrls: ['./landing-section.component.scss']
})
export class LandingSectionComponent implements OnInit {

  @Input() details: sectionDetails;
  constructor(
    private themeService: ThemeService,
    public override: OverrideService,
    public dialog: MatDialog,
  ) { }

  async ngOnInit(): Promise<void> {
    AOS.init({
      duration: 800,
      })

    // this.services  = await this.entity.getData(API_URLS.Form.baseForm, this.override.authHeadders);
    // console.log("baseForm " , this.services);
    
  }

       // public section = {};

 public sectionDetails: sectionDetails[] = [
    {
      title:{
        ar:'مرحبا بك في',
        en:'Welcome to '
      },
      titleTwo:{
        ar:'Employee Wellness Journey',
        en:'Employee Wellness Journey '
      },

      details:{
        ar:'لا أحد محصن من الضغوطات المتعددة التي تسببها الاضطرابات التجارية. ما الذي يمكن أن يفعله القادة لتحسين القدرة على التحمل؟ اعتمادًا على قطاعها ، أصاب الاضطراب المنظمات بشكل مختلف تمامًا. لكن العامل المشترك الوحيد للجميع هو أن الحياة أكثر إرهاقًا بلا حدود.        ',
        en:'No one is immune from the multiple stressors being caused by business turbulence. What can leaders do to improve wellbeing stamina? Depending on their sector, turbulence hit organizations very differently. But the single common factor for everyone is that life is infinitely more stressful.'
      },
      image:{
        src:'assets/img/EWJ.mp4',
        alt:"/",
    },

    },



  ];
  @ViewChild('contact', { static: false }) ContactUsComponent;
  openDialog() {
    const dialogRef = this.dialog.open(this.ContactUsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}

