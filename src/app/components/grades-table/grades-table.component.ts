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
  {name: 'Module 426 - Développer un logiciel avec des méthodes agiles', note: 5},
  {name: 'Module 114 - Mettre en œuvre des systèmes de codification, de compression et d\'encryptage', note: 5},
  {name: 'Module 320 - Programmation orientée objet', note: 5},
  {name: 'Module 347 - Utiliser un service avec des conteneurs', note: 5},
  {name: 'Anglais', note: 5},
  {name: 'Math', note: 5},
  {name: 'ECG', note: 5},
];

@Component({
  selector: 'app-grades-table',
  templateUrl: './grades-table.component.html',
  styleUrls: ['./grades-table.component.scss']
})

export class GradesTableComponent {
  displayedColumns: string[] = ['name', 'note', 'edit'];
  dataSource = ELEMENT_DATA;
}
