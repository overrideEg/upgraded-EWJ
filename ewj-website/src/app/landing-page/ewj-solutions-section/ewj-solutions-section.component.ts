import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OverrideService } from 'src/app/shared/utils/override.service';
import { sectionHeader } from "../layout/section-header/section-header";
@Component({
  selector: 'app-ewj-solutions-section',
  templateUrl: './ewj-solutions-section.component.html',
  styleUrls: ['./ewj-solutions-section.component.scss']
})
export class EwjSolutionsSectionComponent implements OnInit {

  constructor(public override:OverrideService, private router :Router) { }
  show = false
  ngOnInit(): void {
    if(this.router.url === '/solutions'){
      this.show= true
    }
  }
  sectionHeader: sectionHeader[] = [
    {
      title:{
        ar:'حلول EWJ',
        en:'EWJ Solutions'
      },
      details:{
        ar:'',
        en:'We want to lead you into optimizing your Employee Wellness Journey.'
      }

    },
  

  
  ];
}
