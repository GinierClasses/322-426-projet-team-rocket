import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PonderationModel } from '../models/ponderation-model';

@Injectable({
  providedIn: 'root',
})
export class PonderationService {
  constructor(private http: HttpClient) {}

  getPonderations(): Observable<PonderationModel[]> {
    const url = 'http://localhost:3000/ponderations';
    return this.http.get<PonderationModel[]>(url);
  }
}
