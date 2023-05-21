import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-cards-grades',
  templateUrl: './dashboard-cards-grades.component.html',
  styleUrls: ['./dashboard-cards-grades.component.scss'],
})
export class DashboardCardsGradesComponent {
  @Input() brancheName!: string;
}
