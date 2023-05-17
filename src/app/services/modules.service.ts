import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ModuleModel } from '../models/module.model';

@Injectable({
  providedIn: 'root'
})
export class ModulesService {
  
  constructor(private http: HttpClient) { }

  
  getModules(): Observable<ModuleModel[]> {
    const url = 'http://localhost:3000/modules';
    return this.http.get<ModuleModel[]>(url);
  }


  getModulesByYear(year: number): Observable<ModuleModel[]> {
  const url = `http://localhost:3000/modules?year=${year}`;
  return this.http.get<ModuleModel[]>(url);
}


 

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      // Perform any additional error handling logic here
      return throwError(error);
    };
  }
}
