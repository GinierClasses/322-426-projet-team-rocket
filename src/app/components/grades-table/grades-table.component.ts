import {Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, forkJoin } from 'rxjs';
import { ModuleModel } from 'src/app/models/module.model';
import { ModulesService } from 'src/app/services/modules.service';

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

export class GradesTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'grade', 'description', 'edit'];
  dataSource: MatTableDataSource<ModuleModel> = new MatTableDataSource<ModuleModel>();

  constructor(private modulesService: ModulesService) { }

  ngOnInit() {
    this.modulesService.getModules().subscribe((modules: ModuleModel[]) => {
      this.dataSource.data = modules;
    });
  }

  // ...
}