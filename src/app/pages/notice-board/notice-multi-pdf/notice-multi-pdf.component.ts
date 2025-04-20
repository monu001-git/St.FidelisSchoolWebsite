import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CryptoService } from '../../../commonService/service/crypto.service';
import { SweetAlertServiceService } from '../../../commonService/service/sweet-alert-service.service';
import { HomeApiService } from '../../../home/homeApiservice/home-api.service';
import { Route, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../partials/header/header.component';
import { FooterComponent } from '../../../partials/footer/footer.component';

@Component({
  selector: 'app-notice-multi-pdf',
  standalone: true,
  imports: [CommonModule, RouterModule,HeaderComponent,FooterComponent],
  templateUrl: './notice-multi-pdf.component.html',
  styleUrl: './notice-multi-pdf.component.css',
})
export class NoticeMultiPdfComponent implements OnInit {
  unSubscribeSubject: Subject<any> = new Subject();
  menuData: any;
  orgData: any;
  logoUrl: any;
  noticeBoard: any;

  constructor(
    private CryptoService: CryptoService,
    private SweetAlertServiceService: SweetAlertServiceService,
    private homeApiService: HomeApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getNoticeBoardSection();
  }

  getNoticeBoardSection() {
    this.homeApiService
      .getNoticeBoardSection()
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
