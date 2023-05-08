import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfilPageComponent} from './components/profil-page/profil-page.component';

const routes: Routes = [
  {path: 'profil', component: ProfilPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
