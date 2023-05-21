import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-grades-table-card',
  templateUrl: './dashboard-grades-table-card.component.html',
  styleUrls: ['./dashboard-grades-table-card.component.scss'],
})
export class DashboardGradesTableCardComponent {
  @Input() lastGrades!: string;
}
