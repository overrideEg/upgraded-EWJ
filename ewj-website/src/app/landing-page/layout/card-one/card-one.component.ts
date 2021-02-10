import { Component, OnInit, Input } from '@angular/core';
import { Card } from "./cardone";
import { OverrideService } from '../../../shared/utils/override.service';
@Component({
  selector: 'card-one',
  templateUrl: './card-one.component.html',
  styleUrls: ['./card-one.component.scss']
})
export class CardOneComponent implements OnInit {

  @Input() card: Card

  constructor(
    public override:OverrideService
  ) { }

  ngOnInit(): void {
  }

}
