import {Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { ModuleModel } from 'src/app/models/module.model';
import { ModulesService } from 'src/app/services/modules.service';

export interface coursEPSIC {
  name: string;
  note: number;
}



@Component({
  selector: 'app-grades-table',
  templateUrl: './grades-table.component.html',
  styleUrls: ['./grades-table.component.scss']
})




export class GradesTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'grade', 'edit'];
  dataSource: MatTableDataSource<ModuleModel> = new MatTableDataSource<ModuleModel>();

  constructor(private modulesService: ModulesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const year = +params['year'];
      this.getModulesByYear(year);
    });
  }

  getModulesByYear(year: number) {
    this.modulesService.getModulesByYear(year).subscribe((modules: ModuleModel[]) => {
      this.dataSource.data = modules;
    });
  }

  // ...
}
