import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ChangeDetectorRef
} from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../../partials/header/header.component';
import { FooterComponent } from '../../../partials/footer/footer.component';
import { CommonModule } from '@angular/common';
import { ScriptService } from '../../../commonService/service/script.service';
import { PageApiService } from '../../pageApiservice/page-api.service';
import { Subject, takeUntil } from 'rxjs';
import { SweetAlertServiceService } from '../../../commonService/service/sweet-alert-service.service';
import { environment } from '../../../../environments/environment';
import { BusyService } from '../../../commonService/service/busy.service';
import { CryptoService } from '../../../commonService/service/crypto.service';

import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

import { LightgalleryModule } from 'lightgallery/angular';
import { LightGallery } from 'lightgallery/lightgallery';

@Component({
  selector: 'app-multiple-image',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule, CommonModule, LightgalleryModule],
  templateUrl: './multiple-image.component.html',
  styleUrl: './multiple-image.component.css',
})
export class MultipleImageComponent implements OnInit {

  @ViewChild('dynamicGallery') dynamicGallery!: LightGallery;

  unSubscribeSubject: Subject<any> = new Subject();
  eventData: any;
  data:any;
  backendUrl: any;
  eventImagData:any;

  constructor(
    private ScriptService: ScriptService,
    private PageApiService: PageApiService,
    private SweetAlertServiceService: SweetAlertServiceService,
    private BusyService: BusyService,
    private route: ActivatedRoute,
    private _router: Router,
    private CryptoService: CryptoService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const id = params['id'];
      const encryptId = this.CryptoService.decrypt(id);
      if (encryptId) {
        alert(encryptId)
        this.getEventData(encryptId);
      }
    });
  }


  getEventData(id: any) {
   // const encryptedID = this.CryptoService.encrypt(id);
   const encryptedID = id;
    this.PageApiService.eventGallerySection(encryptedID)
      .pipe(takeUntil(this.unSubscribeSubject))
      .subscribe({
        next: (res: any) => {
          if (res?.status === 200 && res?.data) {

             this.data = res?.data,
            this.eventData = res.data.eventData || [];
            this.eventImagData = res.data.eventImage || [];
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

  settings = {
    licenseKey: '0000-0000-000-0000',
    plugins: [lgZoom, lgThumbnail],
    speed: 100,
    download: true,
    zoom: true,
    fullScreen: true,
    actualSize: true,
    controls: true,
    showZoomInOutIcons: true,
    mode: 'lg-fade' as const,  // Fixed mode
    loop: true,
    escKey: true,
    swipeThreshold: 50,
    preload: 2,
    thumbWidth: 100,
    thumbHeight: '80px',
    showThumbByDefault: true,
  };
  
}
