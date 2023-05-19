import {ProfilPageComponent} from './components/profil-page/profil-page.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StepperComponent} from "./components/stepper/stepper.component";
import {GradesTablePageComponent} from "./components/grades-table-page/grades-table-page.component";
import {ChangeGradeComponent} from "./components/change-grade/change-grade.component";

const routes: Routes = [
  {path: 'stepper', component: StepperComponent},
  {path: 'grades', component: GradesTablePageComponent},
  {path: 'profil', component: ProfilPageComponent},
  {path: 'change', component: ChangeGradeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
