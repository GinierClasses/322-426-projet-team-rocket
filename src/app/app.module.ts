import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddGradeComponent } from './components/add-grade/add-grade.component';
import { ChangeGradeComponent } from './components/change-grade/change-grade.component';
import { DashboardCardsCfcComponent } from './components/dashboard-cards-cfc/dashboard-cards-cfc.component';
import { DashboardCardsGradesComponent } from './components/dashboard-cards-grades/dashboard-cards-grades.component';
import { DashboardGradesTableCardComponent } from './components/dashboard-grades-table-card/dashboard-grades-table-card.component';
import { DashboardGradesTablesComponent } from './components/dashboard-grades-tables/dashboard-grades-tables.component';
import { GradesTablePageComponent } from './components/grades-table-page/grades-table-page.component';
import { GradesTableComponent } from './components/grades-table/grades-table.component';
import { PageDashboardComponent } from './components/page-dashboard/page-dashboard.component';
import { PonderationComponent } from './components/ponderation/ponderation.component';
import { ProfilPageComponent } from './components/profil-page/profil-page.component';
import { ReportProblemComponent } from './components/report-problem/report-problem.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { TitleBoxContainerComponent } from './components/title-box-container/title-box-container.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    RouterModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    AddGradeComponent,
    TitleBoxContainerComponent,
    GradesTableComponent,
    GradesTablePageComponent,
    ProfilPageComponent,
    PageDashboardComponent,
    DashboardCardsCfcComponent,
    DashboardCardsGradesComponent,
    DashboardGradesTablesComponent,
    DashboardGradesTableCardComponent,
    PonderationComponent,
    ChangeGradeComponent,
    ReportProblemComponent,
    LoginComponent,
    ResetPasswordComponent,
    SignUpFormComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
