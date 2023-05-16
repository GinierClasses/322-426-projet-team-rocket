import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradesTablePageComponent } from './components/grades-table-page/grades-table-page.component';
import { PageLoginComponent } from './components/page-login/page-login.component';
import { ProfilPageComponent } from './components/profil-page/profil-page.component';
import { StepperComponent } from './components/stepper/stepper.component';

const routes: Routes = [
  { path: 'stepper', component: StepperComponent },
  { path: 'grades', component: GradesTablePageComponent },
  { path: 'profil', component: ProfilPageComponent },
  { path: 'login', component: PageLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
