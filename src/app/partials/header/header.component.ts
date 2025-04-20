import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SweetAlertServiceService } from '../../commonService/service/sweet-alert-service.service';
import { PartisalApiService } from '../partialsApiservice/partisal-api.service';
import {CryptoService} from "../../commonService/service/crypto.service"
@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule, RouterLink],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  unSubscribeSubject: Subject<any> = new Subject();
  headerMenu: any;
  orgData: any;
  contentData:any;

  constructor(
    private PartisalApiService: PartisalApiService,
    private SweetAlertServiceService: SweetAlertServiceService,
    private CryptoService:CryptoService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.headerMenuSection();

    const storedOrgData = localStorage.getItem('orgData');
    if (storedOrgData) {
      this.orgData = JSON.parse(storedOrgData);
    } else {
      console.log('No data found in local storage');
    }
  }

  headerMenuSection() {
    this.PartisalApiService.headerMenuSection()
      .pipe(takeUntil(this.unSubscribeSubject))
      .subscribe({
        next: (res: any) => {
          if (res?.data && res.data !== '') {
            if (res.status === 200) {
              this.headerMenu = res.data;
            } else {
              this.SweetAlertServiceService.showErrorAlert(
                'Something went wrong!'
              );
            }
          } else {
            // this.SweetAlertServiceService.showErrorAlert(
            //   'No Event Gallery data Not available.'
            // );

            console.error('No Event Gallery data Not available.');
          }
        },
        error: (err) => {
          console.error('Error fetching header menu data:', err);
          // this.SweetAlertServiceService.showErrorAlert(
          //   'An error occurred while fetching the header menu data.'
          // );
        },
      });
  }

}
