import { Component, OnInit } from '@angular/core';
import { ThemeService } from "../../services/theming.service";
import { LanguageService } from 'src/services/language.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private themeService: ThemeService,
    private languageService: LanguageService
  ) { }

  ngOnInit() {
    window.scrollTo(0,0)
   
  }


}
