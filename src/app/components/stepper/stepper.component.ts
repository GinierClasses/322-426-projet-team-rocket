import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModulesService } from 'src/app/services/modules.service';
import { ModuleModel } from 'src/app/models/module.model';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  title = "Ajouter une note";
  isLinear = false;
  modules: ModuleModel[] = [];
  selectedModule: ModuleModel | undefined;
  selectedGrade: string | undefined;
  @ViewChild('stepper') stepper: MatStepper | undefined;

  constructor(
    private _formBuilder: FormBuilder,
    private moduleService: ModulesService
  ) {}

  firstFormGroup: FormGroup = this._formBuilder.group({
    selectedModule: ['', Validators.required],
  });

  secondFormGroup: FormGroup = this._formBuilder.group({
    selectedGrade: ['', Validators.required],
  });

  ngOnInit() {
    this.moduleService.getModules().subscribe((modules: ModuleModel[]) => {
      this.modules = modules;
    });
  }

  goToNextStep() {
    if (this.stepper) {
      this.stepper.next();
    }
  }

  onModuleSelectionChange(event: any) {
    this.selectedModule = event.value;
  }

  onGradeSelectionChange(event: any) {
    this.selectedGrade = event.value;
  }

  onSubmit() {
    const moduleSelectionne = this.selectedModule;
    const noteSelectionnee = this.selectedGrade;
    if (moduleSelectionne && noteSelectionnee) {
      const phrase = `Vous allez ajouter la note ${noteSelectionnee} au module ${moduleSelectionne.name} - ${moduleSelectionne.description}.`;
      console.log(phrase);
    }
  }
}
