import { Component, OnInit } from '@angular/core';
import { OverrideService } from 'src/app/shared/utils/override.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(
    public override: OverrideService,    public dialog: MatDialog,
  ) { }


  ngOnInit(): void {
  }

}
