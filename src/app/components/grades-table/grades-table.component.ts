import {Component} from '@angular/core';

export interface coursEPSIC {
  name: string;
  note: number;
}

const ELEMENT_DATA: coursEPSIC[] = [
  {name: 'i114', note: 4},
  {name: 'i254', note: 5.5},
  {name: 'i296', note: 6}
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
