import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatStepperModule} from "@angular/material/stepper";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {TitleBoxContainerComponent} from "./components/title-box-container/title-box-container.component";
import {StepperComponent} from "./components/stepper/stepper.component";
import {MatInputModule} from "@angular/material/input";
import {GradesTableComponent} from "./components/grades-table/grades-table.component";
import {MatTableModule} from "@angular/material/table";
import {GradesTablePageComponent} from "./components/grades-table-page/grades-table-page.component";
import {ProfilPageComponent} from "./components/profil-page/profil-page.component";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import { ChangeGradeComponent } from './components/change-grade/change-grade.component';
import { PonderationComponent } from './components/ponderation/ponderation.component';
import {PageDashboardComponent} from './components/page-dashboard/page-dashboard.component';
import {DashboardCardsCfcComponent} from './components/dashboard-cards-cfc/dashboard-cards-cfc.component';
import { DashboardCardsGradesComponent } from './components/dashboard-cards-grades/dashboard-cards-grades.component';
import { DashboardGradesTablesComponent } from './components/dashboard-grades-tables/dashboard-grades-tables.component';
import { DashboardGradesTableCardComponent } from './components/dashboard-grades-table-card/dashboard-grades-table-card.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatSidenavModule, MatButtonModule, MatStepperModule, Reactive, MatFormFieldModule, MatInputModule, MatTableModule, MatCardModule,HttpClientModule, ReactiveFormsModule, FormsModule, MatSelectModule,],
  declarations: [AppComponent, SidebarComponent, StepperComponent, TitleBoxContainerComponent, GradesTableComponent, GradesTablePageComponent, ProfilPageComponent, PageDashboardComponent, DashboardCardsCfcComponent, DashboardCardsGradesComponent, DashboardGradesTablesComponent, DashboardGradesTableCardComponent, PonderationComponent, ChangeGradeComponent],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {
}
