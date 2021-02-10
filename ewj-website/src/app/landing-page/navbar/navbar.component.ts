import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
} from '@angular/core';
import { ThemeService } from '../../../services/theming.service';
import { OverrideService } from 'src/app/shared/utils/override.service';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  title = 'Dark mode';
  // direction = '';
  showFiller = false;
  mode = '';
  currentUrl: string = '';
  constructor(
    private themeService: ThemeService,
    public override: OverrideService,
    public dialog: MatDialog,
    private router: Router,
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl = this.router.url;
        // // console.log(this.currentUrl);
      });
  }

  ngOnInit() {
    // console.log(this.router.url);
  }

  selectTheme() {
    if (this.themeService.isDarkTheme()) {
      this.title = 'Light mode';
      localStorage.setItem('currentTheme', 'dark');
    } else {
      this.title = 'Dark mode';
      localStorage.setItem('currentTheme', 'light');
    }
  }

  toggleTheme() {
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
      localStorage.setItem('activeTheme', 'light');
    } else {
      this.themeService.setDarkTheme();
      localStorage.setItem('activeTheme', 'dark');
    }

    this.selectTheme();
  }

  @ViewChild('contact', { static: false }) ContactUsComponent;
  openDialog() {
    const dialogRef = this.dialog.open(this.ContactUsComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  async getContact() {
    this.viewContainerRef.clear();
    const { ContactUsPageComponent } = await import(
      '../contact-us-page/contact-us-page.component'
    );
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(ContactUsPageComponent)
    );
  }
}
