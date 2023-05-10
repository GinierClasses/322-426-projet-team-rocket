import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {PageGradesTableComponent} from './components/page-grades-table/page-grades-table.component';
import {GradesTableComponent} from "./components/grades-table/grades-table.component";
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [AppComponent, SidebarComponent, PageGradesTableComponent, GradesTableComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatSidenavModule, MatButtonModule, MatTableModule],
  import {StepperComponent} from './components/stepper/stepper.component';
  import {MatStepperModule} from "@angular/material/stepper";
  import {ReactiveFormsModule} from "@angular/forms";
  import {MatFormFieldModule} from "@angular/material/form-field";
  import {TitleBoxContainerComponent} from './components/title-box-container/title-box-container.component';

  @NgModule({
    declarations: [AppComponent, SidebarComponent, StepperComponent, TitleBoxContainerComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatSidenavModule, MatButtonModule, MatStepperModule, ReactiveFormsModule, MatFormFieldModule],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {
  }
