import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-cards-cfc',
  templateUrl: './dashboard-cards-cfc.component.html',
  styleUrls: ['./dashboard-cards-cfc.component.scss'],
})
export class DashboardCardsCfcComponent {
  @Input() brancheName!: string;
}
