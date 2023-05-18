import {ProfilPageComponent} from './components/profil-page/profil-page.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StepperComponent} from "./components/stepper/stepper.component";
import {GradesTablePageComponent} from "./components/grades-table-page/grades-table-page.component";
import {PonderationComponent} from "./components/ponderation/ponderation.component";

const routes: Routes = [
  {path: 'ponderations', component: PonderationComponent}
  {path: 'stepper', component: StepperComponent},
  {path: 'grades', component: GradesTablePageComponent},
  {path: 'profil', component: ProfilPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
