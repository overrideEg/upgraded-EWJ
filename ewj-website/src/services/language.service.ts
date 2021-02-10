import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@Injectable({
  providedIn: "root"
})

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class languageClass { }


export interface Language {
  name: string;
  properties: any;

}

export const arabic: Language = {
  name: "ar",
  properties: {
    "direction": "rtl",
    "text-align" :"right"
  }
};

export const english: Language = {
  name: "en",
  properties: {
    "direction": "ltr",
    "text-align" :"left"
  }
};

export class LanguageService {
  private keyLang = this.currentLang;
  private htmlElement = document.getElementsByTagName("html")[0];
  private headElements = document.getElementsByTagName("head")[0];
  private bodyElements = document.getElementsByTagName("body")[0];

  private active: Language = english;
  private availableLanguage: Language[] = [english, arabic];



  getAvailableLanguages(): Language[] {
    return this.availableLanguage;
    
  }

  getActiveLanguage(): Language {
    return this.active;
    
  }

  isArabicLanguage(): boolean {
    return this.active.name === arabic.name;

  }

  setArabicLanguage(): void {
    this.setActiveLanguage(arabic);
  }

  setEnglishLanguage(): void {
    this.setActiveLanguage(english);
    
  }
  get currentLang() {
    return localStorage.getItem("activeLanguage");
  }
  setActiveLanguage(language: Language): void {
    this.active = language;
    console.log(this.active);
    const keyLang = this.currentLang;
    const htmlElement = document.getElementsByTagName("html")[0];
    const headElements = document.getElementsByTagName("head")[0];
    const bodyElements = document.getElementsByTagName("body")[0];
    
    htmlElement.setAttribute("lang", keyLang);
    if (keyLang == "ar") {
      htmlElement.setAttribute("dir", "ltr");
      bodyElements.setAttribute("style", "text-align: left;");
    } else {

      htmlElement.setAttribute("dir", "rtl");
      bodyElements.setAttribute("style", "text-align: right;");
    }

    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}


