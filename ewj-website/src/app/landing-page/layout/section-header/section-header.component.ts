import { Component, Input, OnInit } from '@angular/core';
import { OverrideService } from 'src/app/shared/utils/override.service';

import { sectionHeader } from './section-header';
@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss'],
})
export class SectionHeaderComponent implements OnInit {
  @Input() sectionHeader: sectionHeader;

  constructor(public override: OverrideService) {}

  ngOnInit(): void {}
}
