import {Component} from '@angular/core';

export interface coursEPSIC {
  name: string;
  note: number;
}

const ELEMENT_DATA: coursEPSIC[] = [
  {name: 'Module 165 - Utiliser des bases de données NoSQL', note: 5},
  {name: 'Module 254 - Décrire des processus métier dans son propre environnement professionnel', note: 5},
  {name: 'Module 322 - Concevoir et implémenter des interfaces utilisateur', note: 5},
  {name: 'Module 346 - Concevoir et réaliser des solutions cloud', note: 5},
  {name: 'Module 426 - Développer un logiciel avec des méthodes agiles', note: 5}
];

@Component({
  selector: 'app-dashboard-grades-tables',
  templateUrl: './dashboard-grades-tables.component.html',
  styleUrls: ['./dashboard-grades-tables.component.scss']
})
export class DashboardGradesTablesComponent {
  displayedColumns: string[] = ['name', 'note', 'edit'];
  dataSource = ELEMENT_DATA;
}
