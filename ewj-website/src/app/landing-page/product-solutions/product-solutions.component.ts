import { Component, OnInit } from '@angular/core';
import { OverrideService } from 'src/app/shared/utils/override.service';
import { sectionHeader } from "../layout/section-header/section-header";
import { expansionPanel } from '../layout/expansion-panel/expansion-panel';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-solutions',
  templateUrl: './product-solutions.component.html',
  styleUrls: ['./product-solutions.component.scss']
})
export class ProductSolutionsComponent implements OnInit {

  constructor( public override: OverrideService , private router :Router) { }

  show = false
  ngOnInit(): void {
    if(this.router.url === '/product-solution'){
      this.show= true
      console.log(this.router.url);
      
    }
  }
  sectionHeader: sectionHeader[] = [
    {
      title: {
        ar: 'الحلول',
        en: 'Product Solutions'
      },
      details: {
        ar: ' ',
        en: ' '
      },
    },
  ];


  expansionPanel: expansionPanel[] = [
{

      expansionTitle: {
        ar: "عنوان",
        en: "IOT",

      },
      expansionDetails: {
        ar: " كلام كتيييييييييييييييييييييييير",
        en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled        ",
      },
      card: [
        {
          title: {
            ar: "عنوان",
            en: "Smart Thermal Facial Recognition",
          },
          details: {
            ar: " كلام كتيييييييييييييييييييييييير",
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled        ",
          },
          img: {
            src: "assets/icons/user-images@2x.png"
          }
        },
        {
          title: {
            ar: "عنوان",
            en: "Smart Watches & Bracelets",
          },
          details: {
            ar: " كلام كتيييييييييييييييييييييييير",
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled        ",
          },
          img: {
            src: "assets/icons/smart-watch-1@2x.png"
          }
        },
        {
          title: {
            ar: "عنوان",
            en: "Smart Air Quality",
          },
          details: {
            ar: " كلام كتيييييييييييييييييييييييير",
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled        ",
          },
          img: {
            src: "assets/icons/air-purifier@2x.png"
          }
        },
      ]
    },
    {
      expansionTitle: {
        ar: "عنوان",
        en: "AI",

      },
      expansionDetails: {
        ar: " كلام كتيييييييييييييييييييييييير",
        en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled        ",
      },
      card: [
        {
          title: {
            ar: "عنوان",
            en: "Smart Thermal Facial Recognition",
          },
          details: {
            ar: " كلام كتيييييييييييييييييييييييير",
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled        ",
          },
          img: {
            src: "assets/icons/user-images@2x.png"
          }
        },
        {
          title: {
            ar: "عنوان",
            en: "Smart Watches & Bracelets",
          },
          details: {
            ar: " كلام كتيييييييييييييييييييييييير",
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled        ",
          },
          img: {
            src: "assets/icons/smart-watch-1@2x.png"
          }
        },
        {
          title: {
            ar: "عنوان",
            en: "Smart Air Quality",
          },
          details: {
            ar: " كلام كتيييييييييييييييييييييييير",
            en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled        ",
          },
          img: {
            src: "assets/icons/air-purifier@2x.png"
          }
        },
      ]
    },
  ]





}
