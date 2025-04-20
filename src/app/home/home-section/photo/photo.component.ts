import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import {SweetAlertServiceService} from "../../../commonService/service/sweet-alert-service.service"
import {CryptoService} from "../../../commonService/service/crypto.service"
import { HomeApiService } from '../../homeApiservice/home-api.service';
import { Router, RouterModule } from '@angular/router';
import {environment} from "../../../../environments/environment"
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo',
  imports: [RouterModule,CommonModule],
  standalone: true,
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss',
})
export class PhotoComponent implements OnInit {
  unSubscribeSubject: Subject<any> = new Subject();
  eventData: any;
  albumCountNumber:any;
  eventImagData:any;
  backendUrl:any;
  imageCount:any;
  totalImageCount:any;

  constructor(
    private HomeApiService: HomeApiService,
    private CryptoService: CryptoService,
    private SweetAlertServiceService: SweetAlertServiceService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getEventData();
  }
 
  getEventData(): void {
    this.HomeApiService.eventGallerySection()
      .pipe(takeUntil(this.unSubscribeSubject))
      .subscribe({
        next: (res: any) => {
          if (res?.status === 200 && res?.data) {
            this.eventData = res.data.eventData || [];
            this.eventImagData = res.data.eventImage || [];
            this.backendUrl = environment.apiUrl;
            this.albumCountNumber = res.data.albumCount || 0;
            this.totalImageCount = res.data.totalImageCount || 0;
            this.imageCount = res.data.imageCount || 0;
          } else {
            this.SweetAlertServiceService.showErrorAlert(
              'Something went wrong while fetching the Event Gallery data!'
            );
          }
        },
        error: (err) => {
          console.error('Error fetching event data:', err);
          this.SweetAlertServiceService.showErrorAlert(
            'An error occurred while fetching the event data.'
          );
        }
      });
  }
  
  imageSection(id: number) {
    this.router.navigate(['/home/image'], {
      queryParams: {
        id: this.CryptoService.encrypt(id),
      },
    });
  }
}
