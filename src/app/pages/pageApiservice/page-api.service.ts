import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment"
 
@Injectable({
  providedIn: 'root'
})
export class PageApiService {

  constructor(private http: HttpClient) {}

    //pdf
    getNoticeBoardPDF(id: any): Observable<any> {
      return this.http.post<any>(`${environment.apiUrl}api/noticeboard-pdf`, {
        data: id,
      });
    }

    getMenuPageSection(slug: any): Observable<any> {
      return this.http.post<any>(`${environment.apiUrl}api/page-data`, {
        data: slug,
      });
    }

    getFacilitiesSection(): Observable<any> {
      return this.http.get<any>(`${environment.apiUrl}api/facilities-data`);
    }

    eventGallerySection(id:any): Observable<any> {
      return this.http.post<any>(`${environment.apiUrl}api/event-gallery`,{
        data: id,
      });
    }

    getEventAlbumData(): Observable<any> {
      return this.http.get<any>(`${environment.apiUrl}api/event-album`);
    }  
  
}
