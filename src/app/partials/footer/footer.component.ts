import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SweetAlertServiceService } from '../../commonService/service/sweet-alert-service.service';
import {PartisalApiService} from "../partialsApiservice/partisal-api.service"

@Component({
  selector: 'app-footer',
  imports: [],
  standalone:true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  orgData: any;
  unSubscribeSubject: Subject<any> = new Subject();
  footerMenu: any;

  constructor(
    private PartisalApiService: PartisalApiService,
    private SweetAlertServiceService: SweetAlertServiceService
  ) {}

  ngOnInit() {
    this.footerMenuSection();
    
    const storedOrgData = localStorage.getItem('orgData');
    if (storedOrgData) {
      this.orgData = JSON.parse(storedOrgData);
    } else {
      console.log('No data found in local storage');
    }
  }

  footerMenuSection() {
    this.PartisalApiService
      .footerMenuSection()
      .pipe(takeUntil(this.unSubscribeSubject))
      .subscribe({
        next: (res: any) => {
          if (res?.data && res.data != '') {
            if (res.status === 200) {
              this.footerMenu = res.data;
            } else {
              this.SweetAlertServiceService.showErrorAlert(
                'Something went wrong!'
              );
            }
          } else {
            // this.SweetAlertServiceService.showErrorAlert(
            //   'No Footer menu  Not available.'
            // );
          }
        },
        error: (err) => {
          console.error('Error fetching Footer menu  data:', err);
          // this.SweetAlertServiceService.showErrorAlert(
          //   'An error occurred while fetching the menu data.'
          // );
        },
      });
  }
}
