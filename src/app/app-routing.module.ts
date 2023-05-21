import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { ResetPasswordComponent } from 'src/app/components/reset-password/reset-password.component';
import { SignUpFormComponent } from 'src/app/components/sign-up-form/sign-up-form.component';
import { AddGradeComponent } from './components/add-grade/add-grade.component';
import { ChangeGradeComponent } from './components/change-grade/change-grade.component';
import { GradesTablePageComponent } from './components/grades-table-page/grades-table-page.component';
import { PageDashboardComponent } from './components/page-dashboard/page-dashboard.component';
import { PonderationComponent } from './components/ponderation/ponderation.component';
import { ProfilPageComponent } from './components/profil-page/profil-page.component';
import { ReportProblemComponent } from './components/report-problem/report-problem.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'sign-up', component: SignUpFormComponent },
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
