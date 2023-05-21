import { ProfilPageComponent } from './components/profil-page/profil-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradesTablePageComponent } from './components/grades-table-page/grades-table-page.component';
import { ChangeGradeComponent } from './components/change-grade/change-grade.component';
import { PonderationComponent } from './components/ponderation/ponderation.component';
import { PageDashboardComponent } from './components/page-dashboard/page-dashboard.component';
import { ReportProblemComponent } from './components/report-problem/report-problem.component';
import { AddGradeComponent } from './components/add-grade/add-grade.component';
import { LoginComponent } from 'src/app/components/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'login', component: LoginComponent },
  { path: 'ponderations', component: PonderationComponent },
  { path: 'add-grade', component: AddGradeComponent },
  { path: 'grades', component: GradesTablePageComponent },
  { path: 'profil', component: ProfilPageComponent },
  { path: 'change-grade', component: ChangeGradeComponent },
  { path: 'dashboard', component: PageDashboardComponent },
  { path: 'problem', component: ReportProblemComponent },
  { path: '**', component: PageDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
