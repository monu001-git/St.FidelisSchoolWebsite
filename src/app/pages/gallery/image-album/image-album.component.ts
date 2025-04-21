import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../partials/header/header.component';
import { FooterComponent } from '../../../partials/footer/footer.component';
import { Router, RouterModule } from '@angular/router';
import {ScriptService} from "../../../commonService/service/script.service"
import { Subject, takeUntil } from 'rxjs';
import {environment} from "../../../../environments/environment"
import {PageApiService} from "../../pageApiservice/page-api.service"
import {SweetAlertServiceService} from "../../../commonService/service/sweet-alert-service.service"
import { CommonModule } from '@angular/common';
import {BusyService} from "../../../commonService/service/busy.service";
import {CryptoService} from "../../../commonService/service/crypto.service"

@Component({
  selector: 'app-image-album',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,RouterModule,CommonModule,RouterModule],
  templateUrl: './image-album.component.html',
  styleUrl: './image-album.component.css'
})
export class ImageAlbumComponent implements OnInit {

 unSubscribeSubject: Subject<any> = new Subject();
 backendUrl:any;
 featuredEvent:any;
 eventList:any;
 data:any

  constructor(
    private ScriptService:ScriptService,
    private PageApiService:PageApiService,
    private SweetAlertServiceService:SweetAlertServiceService,
    private BusyService:BusyService,
    private router: Router,
    private  CryptoService:CryptoService
  ){

  }

  ngOnInit(){
    this.getEventAlbumData();
    this.BusyService.busy()
    setTimeout(() => {
      // this.Scripts();
      this.ScriptService.loadScripts();
      this.BusyService.idle();
    },4000);
  }
 

  // Scripts() {
  //   const scriptPaths = [
  //     '../../../../assets/js/jquery.js',
  //     '../../../../assets/gallery/js/jquery.smartmenus.min.js',
  //     '../../../../assets/gallery/js/aos.js',
  //     '../../../../assets/gallery/js/isotope.js',
  //     '../../../../assets/gallery/js/imagesloaded.pkgd.min.js',
  //     '../../../../assets/gallery/js/main.js',
  //     '../../../../assets/gallery/js/lightgallery-all.min.js',
  //   ];
    


  //   scriptPaths.forEach((scriptPath) => {
  //     const script = document.createElement('script');
  //     script.src = scriptPath;

  //     script.onerror = (error) => {
  //       console.error(`Error loading script: ${scriptPath}`, error);
  //     };
  //     document.body.appendChild(script);
  //   });
  // }


    getEventAlbumData() {
      this.PageApiService.getEventAlbumData()
        .pipe(takeUntil(this.unSubscribeSubject))
        .subscribe({
          next: (res: any) => {
            if (res?.status === 200 && res?.data) {
              this.data = res?.data;
              this.eventList = res.data.eventList || [];
              this.featuredEvent = res.data.featuredEvent || [];
              this.backendUrl = environment.apiUrl;
            } else {
              this.SweetAlertServiceService.showErrorAlert(
                res?.message || 'No Event Gallery data available.'
              );
            }
          },
          error: (err: any) => {
            console.error('Error fetching event gallery data:', err);
            this.SweetAlertServiceService.showErrorAlert(
              'An error occurred while fetching the event gallery data.'
            );
          },
        });
    }

  // event-album


  imageSection(id: number) {
    this.router.navigate(['/home/image'], {
      queryParams: {
        id: this.CryptoService.encrypt(id),
      },
    });
  }

}
