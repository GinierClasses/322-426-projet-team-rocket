import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ModuleModel} from "../models/module.model";

@Injectable({
  providedIn: 'root'
})

export class ModulesService{

  constructor(private http: HttpClient) { }



  getModules(): Observable<any> {
    const url = 'http://localhost:3000/modules'; // URL du serveur JSON

    console.log(this.http.get<any>(url))
    return this.http.get<any>(url);

  },

  content_copy
  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<any> {
    const url = `http://localhost:3000/modules/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }


}


