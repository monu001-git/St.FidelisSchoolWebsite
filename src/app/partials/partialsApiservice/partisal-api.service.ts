import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment"
 
@Injectable({
  providedIn: 'root'
})
export class PartisalApiService {

  constructor(private http: HttpClient) {}

    // -----------------------  home Section  ------------------------------  // 

    //header menu
    headerMenuSection(): Observable<any> {
      return this.http.get<any>(`${environment.apiUrl}api/header-menu`);
    }
  
    //getOrgSection
    getOrgSection(): Observable<any> {
      return this.http.get<any>(`${environment.apiUrl}api/org-data`);
    }

    // footer Menu
    footerMenuSection(): Observable<any> {
      return this.http.get<any>(`${environment.apiUrl}api/footer-menu`);
    }

}
