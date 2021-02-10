import { Component, OnInit } from '@angular/core';
import { OverrideService } from '../../../shared/utils/override.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(public override:OverrideService) { }

  ngOnInit(): void {
  }

}
