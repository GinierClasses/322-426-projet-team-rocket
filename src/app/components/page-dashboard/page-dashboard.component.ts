import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ModuleModel} from 'src/app/models/module.model';
import { ModulesService } from 'src/app/services/modules.service';

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
  derniereNote = "5 dernières notes";

  informatiqueAverage: number = 0;
  cultureGAverage: number = 0;
  baseElargieAverage: number = 0;
  cfcAverage: number = 0;

  constructor(
    private route: ActivatedRoute,
    private modulesService: ModulesService
  ) { }

  ngOnInit(): void {
    this.modulesService.getModules()
      .subscribe(
        modules => {
          this.calculateAverages(modules);
        },
        error => console.error(error)
      );
  }

  calculateAverages(modules: ModuleModel[]): void {
    const typeGrades: { [type: string]: number } = {};
    const typeCounts: { [type: string]: number } = {};

    modules.forEach(module => {
      if (module.type) {
        if (!typeGrades[module.type]) {
          typeGrades[module.type] = module.grade;
          typeCounts[module.type] = 1;
        } else {
          typeGrades[module.type] += module.grade;
          typeCounts[module.type]++;
        }
      }
    });

    const typeAverages: { [type: string]: number } = {};

    for (const type in typeGrades) {
      const average = typeGrades[type] / typeCounts[type];
      typeAverages[type] = Math.round(average * 2) / 2;
    }

    this.informatiqueAverage = typeAverages[this.informatique] || 0;
    this.cultureGAverage = typeAverages[this.cultureG] || 0;
    this.baseElargieAverage = typeAverages[this.baseElargie] || 0;

    const allAverages = [this.informatiqueAverage, this.cultureGAverage, this.baseElargieAverage];
    this.cfcAverage = Math.round(allAverages.reduce((sum, average) => sum + average, 0) / allAverages.length * 10) / 10;
  }
}
