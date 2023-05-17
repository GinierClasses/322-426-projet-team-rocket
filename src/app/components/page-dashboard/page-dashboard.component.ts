import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.scss']
})
export class PageDashboardComponent implements OnInit {

  cfc = "CFC";
  cultureG = "Culture générale";
  informatique = "Informatique";
  baseElargie = "Base élargie";

  constructor(
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
  }
}
