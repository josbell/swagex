import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'ui-layout-mat-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  constructor(public configService: LayoutService) {}

  ngOnInit(): void {}
}
