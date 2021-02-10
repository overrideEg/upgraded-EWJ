import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ThemingModule { }


// theming
export interface Theme {
  name: string;
  properties: any;

}

export const light: Theme = {
  name: "light",
  properties: {
    "--white-color": "#ffffff",
    "--light-color": "#F4F6FF",
    "--darkLight-color": "#1F1F1F",
    "--dark-color": "#121212",
  }
};

export const dark: Theme = {
  name: "dark",
  properties: {
    "--white-color": "#121212",
    "--light-color": "#1F1F1F",
    "--darkLight-color": "#F4F6FF",
    "--dark-color": "#ffffff",

  }
};
