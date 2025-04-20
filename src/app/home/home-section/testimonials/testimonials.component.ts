import { Component, OnInit } from '@angular/core';

import { Subject, takeUntil } from 'rxjs';
import {SweetAlertServiceService} from "../../../commonService/service/sweet-alert-service.service"
import {CryptoService} from "../../../commonService/service/crypto.service"
import { HomeApiService } from '../../homeApiservice/home-api.service';
import { CommonModule } from '@angular/common';
import {environment} from "../../../../environments/environment"
@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent implements OnInit {
  unSubscribeSubject: Subject<any> = new Subject();
  testimonial: any;
  birthdayStudent:any;
  backendUrl:any;
  ngOnInit() {
   this.gettestimonialSection();
   this.getstudentbirthdaySection();
  }
  constructor(
    private homeApiService: HomeApiService,
    private SweetAlertServiceService:SweetAlertServiceService,
    private CryptoService:CryptoService

  ) {}

  gettestimonialSection() {
    this.homeApiService.gettestimonialSection()
      .pipe(takeUntil(this.unSubscribeSubject))
      .subscribe({
        next: (res: any) => {
          if (res?.data && res.data != '') {
            if (res.status === 200) {
              this.testimonial = this.CryptoService.decrypt(res.data);
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

  getstudentbirthdaySection() {
    this.homeApiService.getstudentbirthdaySection()
      .pipe(takeUntil(this.unSubscribeSubject))
      .subscribe({
        next: (res: any) => {
          if (res?.data && res.data != '') {
            if (res.status === 200) {
              this.birthdayStudent = this.CryptoService.decrypt(res.data);
                this.backendUrl = environment.apiUrl;
            } else {
              this.SweetAlertServiceService.showErrorAlert(
                'Something went wrong!'
              );
            }
          } else {
            // this.SweetAlertServiceService.showErrorAlert(
            //   'No Notice board data Not available.'
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


}
