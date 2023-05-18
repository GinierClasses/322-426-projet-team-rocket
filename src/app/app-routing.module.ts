import {ProfilPageComponent} from './components/profil-page/profil-page.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StepperComponent} from "./components/stepper/stepper.component";
import {GradesTablePageComponent} from "./components/grades-table-page/grades-table-page.component";
import {PonderationComponent} from "./components/ponderation/ponderation.component";
import {PageDashboardComponent} from "./components/page-dashboard/page-dashboard.component";
import {ReportProblemComponent} from "./components/report-problem/report-problem.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  {path: 'ponderations', component: PonderationComponent},
  {path: 'stepper', component: StepperComponent},
  {path: 'grades', component: GradesTablePageComponent},
  {path: 'profil', component: ProfilPageComponent},
  {path: 'dashboard', component: PageDashboardComponent},
  {path: 'problem', component: ReportProblemComponent},
  {path: '**', component: PageDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
