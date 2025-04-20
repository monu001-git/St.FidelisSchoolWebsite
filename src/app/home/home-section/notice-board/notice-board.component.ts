import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import {SweetAlertServiceService} from "../../../commonService/service/sweet-alert-service.service"
import {CryptoService} from "../../../commonService/service/crypto.service"
import { HomeApiService } from '../../homeApiservice/home-api.service';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notice-board',
  imports: [RouterModule,CommonModule],
  standalone: true,
  templateUrl: './notice-board.component.html',
  styleUrl: './notice-board.component.scss'
})
export class NoticeBoardComponent implements OnInit {
 
    unSubscribeSubject: Subject<any> = new Subject();
    menuData: any;
    currentUrl: any;
    orgData: any;
    logoUrl: any;
    noticeBoard: any;

  constructor(
    private homeApiService: HomeApiService,
    private SweetAlertServiceService:SweetAlertServiceService,
    private CryptoService:CryptoService,
    private router: Router,
  ){
    this.currentUrl = this.router.url;
 
  }

  ngOnInit() {
   
      this.getNoticeBoardSection();
    
   
  }
  getNoticeBoardSection() {
    this.homeApiService.getNoticeBoardSection()
      .pipe(takeUntil(this.unSubscribeSubject))
      .subscribe({
        next: (res: any) => {
          if (res?.data && res.data != '') {
            if (res.status === 200) {
              this.noticeBoard = this.CryptoService.decrypt(res.data);
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


  noticeBoardPdf(id: number) {
      this.router.navigate(['/home/pdf'], {
        queryParams: {
          id: this.CryptoService.encrypt(id),
        },
      });
  }

}
