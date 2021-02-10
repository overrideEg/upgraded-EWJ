import { Component, OnInit, Input } from '@angular/core';
import { Cardtwo } from "./cardtwo";
import { OverrideService } from '../../../shared/utils/override.service';
@Component({
  selector: 'card-two',
  templateUrl: './card-two.component.html',
  styleUrls: ['./card-two.component.scss']
})
export class CardTwoComponent implements OnInit {

  @Input() card: Cardtwo
  constructor(
    public override:OverrideService
  ) { }

  ngOnInit(): void {
  }

}
 