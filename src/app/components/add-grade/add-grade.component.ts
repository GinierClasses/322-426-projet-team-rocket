import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModulesService} from 'src/app/services/modules.service';
import {ModuleModel} from 'src/app/models/module.model';
import {MatStepper} from '@angular/material/stepper';

@Component({
  selector: 'app-add-grade',
  templateUrl: './add-grade.component.html',
  styleUrls: ['./add-grade.component.scss']
})
export class AddGradeComponent implements OnInit {

  title = "Ajouter une note";
  isLinear = false;
  modules: ModuleModel[] = [];
  selectedModule: ModuleModel | undefined;
  selectedGrade: string | undefined;
  @ViewChild('stepper') stepper: MatStepper | undefined;
  firstFormGroup: FormGroup = this._formBuilder.group({
    selectedModule: ['', Validators.required],
  });
  secondFormGroup: FormGroup = this._formBuilder.group({
    selectedGrade: ['', Validators.required],
  });

  constructor(
    private _formBuilder: FormBuilder,
    private moduleService: ModulesService
  ) {
  }

  ngOnInit() {
    this.moduleService.getModules().subscribe((modules: ModuleModel[]) => {
      this.modules = modules;
    });
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
      // Mettez à jour le module avec la nouvelle note
      this.moduleService.updateModule(moduleSelectionne, noteSelectionnee)
        .subscribe(updatedModule => {
          // Le module a été mis à jour avec succès
          const phrase = `Vous avez ajouté la note ${noteSelectionnee} au module ${updatedModule.name} - ${updatedModule.description}.`;
          console.log(phrase);
        }, error => {
          // Une erreur s'est produite lors de la mise à jour du module
          console.error('Erreur lors de la mise à jour du module', error);
        });
    }
  }

}
