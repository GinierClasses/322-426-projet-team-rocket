import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ModulesService } from 'src/app/services/modules.service';
import { ModuleModel } from 'src/app/models/module.model';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})

export class StepperComponent implements OnInit {

  title = "Ajouter une note";

  isLinear = false;
  modules: ModuleModel[] = [];
  

  constructor(
    private _formBuilder: FormBuilder,
    private moduleService: ModulesService
){}
  
  

    firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  

  

  ngOnInit() {
    this.moduleService.getModules().subscribe((modules: ModuleModel[]) => {
      this.modules = modules;
    });
  }

}

