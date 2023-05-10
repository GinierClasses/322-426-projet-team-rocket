import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StepperComponent} from "./components/stepper/stepper.component";
import {PonderationComponent} from "./components/ponderation/ponderation.component";

const routes: Routes = [
  {path: 'stepper', component: StepperComponent},
  {path: 'ponderations', component: PonderationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
