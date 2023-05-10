import {ProfilPageComponent} from './components/profil-page/profil-page.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {StepperComponent} from "./components/stepper/stepper.component";

const routes: Routes = [
  {path: 'stepper', component: StepperComponent},
  {path: 'profil', component: ProfilPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
