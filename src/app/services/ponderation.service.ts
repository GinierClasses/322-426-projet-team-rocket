import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { PonderationModel } from '../models/ponderation-model';

@Injectable({
  providedIn: 'root'
})
export class PonderationService {
  
  constructor(private http: HttpClient) { }

  
  getPonderations(): Observable<PonderationModel[]> {
    const url = 'http://localhost:3000/ponderations';
    return this.http.get<PonderationModel[]>(url);
  }


  


 

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      // Perform any additional error handling logic here
      return throwError(error);
    };
  }
}
