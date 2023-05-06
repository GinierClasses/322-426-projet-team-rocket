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

    return this.http.get<any>(url);
  }

}


