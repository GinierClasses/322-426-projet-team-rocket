import { Component, OnInit } from '@angular/core';
import { ModulesService } from 'src/app/services/modules.service';
import { ModuleModel } from 'src/app/models/module.model';

@Component({
  selector: 'app-dashboard-grades-tables',
  templateUrl: './dashboard-grades-tables.component.html',
  styleUrls: ['./dashboard-grades-tables.component.scss']
})
export class DashboardGradesTablesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'note', 'edit'];
  dataSource: ModuleModel[] = [];

  constructor(private modulesService: ModulesService) { }

  ngOnInit() {
    this.modulesService.getModules()
      .subscribe(
        modules => {
          const sortedModules = modules.sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
          });
          this.dataSource = sortedModules.slice(0,5);
        },
        error => console.error(error)
      );
  }

}