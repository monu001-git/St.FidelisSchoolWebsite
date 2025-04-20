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
  eventImagData: { 
    id: number; 
    image_name: string; 
    image_path: string; 
    event_id: number; 
    created_at: string; 
    updated_at: string;
  }[] = [];
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

  getEventData() {
    this.HomeApiService.eventGallerySection()
      .pipe(takeUntil(this.unSubscribeSubject))
      .subscribe({
        next: (res: any) => {
          if (res?.data && res.data != '') {
            if (res.status === 200) {
              this.eventData = res.data.eventData;
              this.eventImagData = res.data.eventImage
              this.backendUrl = environment.apiUrl;
              this.albumCountNumber = res.data.albumCount
              this.totalImageCount = res.data.totalImageCount
              this.imageCount = res.data.imageCount
            } else {
              this.SweetAlertServiceService.showErrorAlert(
                'Something went wrong!'
              );
            }
          } else {
            // this.SweetAlertServiceService.showErrorAlert(
            //   'No Event Gallery data Not available.'
            // );
          }
        },
        error: (err) => {
          console.error('Error fetching menu data:', err);
          // this.SweetAlertServiceService.showErrorAlert(
          //   'An error occurred while fetching the menu data.'
          // );
        },
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
