import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment"
 
@Injectable({
  providedIn: 'root'
})
export class HomeApiService {

  constructor(private http: HttpClient) {}

    // -----------------------  home Section  ------------------------------  // 

    //header menu
    headerMenuSection(): Observable<any> {
      return this.http.get<any>(`${environment.apiUrl}api/header-menu`);
    }
  
    //event gallery
    eventGallerySection(): Observable<any> {
      return this.http.post<any>(`${environment.apiUrl}api/event-gallery`,{
        data: 0,
      });
    }

    //getOrgSection
    getOrgSection(): Observable<any> {
      return this.http.get<any>(`${environment.apiUrl}api/org-data`);
    }

    // footer Menu
    footerMenuSection(): Observable<any> {
      return this.http.get<any>(`${environment.apiUrl}api/footer-menu`);
    }

    // testimonial 
    gettestimonialSection(): Observable<any> {
      return this.http.get<any>(`${environment.apiUrl}api/testimonial-data`);
    }

    //notice board
    getNoticeBoardSection(): Observable<any> {
      return this.http.get<any>(`${environment.apiUrl}api/noticeboard-data`);
    }

    //student birthday
    getstudentbirthdaySection(): Observable<any> {
      return this.http.get<any>(`${environment.apiUrl}api/student-data`);
    }

    //achievement birthday
    getAchievementSection(): Observable<any> {
      return this.http.get<any>(`${environment.apiUrl}api/achievement-data`);
    }

    getStudentCornerSection(): Observable<any> {
      return this.http.get<any>(`${environment.apiUrl}api/student-corner`);
    }

}
