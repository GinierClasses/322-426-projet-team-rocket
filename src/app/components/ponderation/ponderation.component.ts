  import {Component, OnInit} from '@angular/core';
  import { PonderationModel } from 'src/app/models/ponderation-model';
  import { PonderationService } from 'src/app/services/ponderation.service';

  @Component({
    selector: 'app-ponderation',
    templateUrl: './ponderation.component.html',
    styleUrls: ['./ponderation.component.scss']
  })
  export class PonderationComponent implements OnInit{
    title = 'Pondérations';

    ponderations: PonderationModel[] = []; // Initialisation avec une valeur vide

  constructor(private ponderationService: PonderationService) { }

  ngOnInit() {
    this.getPonderations();
  }

  getPonderations() {
    this.ponderationService.getPonderations()
      .subscribe(
        (data: PonderationModel[]) => {
          this.ponderations = data;
          // Faire quelque chose avec les pondérations récupérées
        },
        error => {
          console.error(error);
          // Gérer l'erreur
        }
      );
  }
  }
