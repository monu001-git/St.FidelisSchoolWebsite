import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../partials/header/header.component';
import { FooterComponent } from '../../../partials/footer/footer.component';
import { CryptoService } from '../../../commonService/service/crypto.service';
import { SweetAlertServiceService } from '../../../commonService/service/sweet-alert-service.service';
import { PageApiService } from '../../../pages/pageApiservice/page-api.service';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {environment} from "../../../../environments/environment"


@Component({
  selector: 'app-notice-board-pdf',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,CommonModule,RouterModule,RouterLink],
  templateUrl: './notice-board-pdf.component.html',
  styleUrl: './notice-board-pdf.component.css',
})
export class NoticeBoardPdfComponent  {

  unSubscribeSubject: Subject<any> = new Subject();
  noticeBoard: any;
  noticeBoardtitle:any;
  noticeBoarddate:any;
  noticeBoardpdf:any;
  safeUrl: any;

  constructor(
    private CryptoService: CryptoService,
    private SweetAlertServiceService: SweetAlertServiceService,
    private PageApiService: PageApiService,
    private route: ActivatedRoute,
    private _router: Router,
    private sanitizer: DomSanitizer

  ) {

    this.route.queryParams.subscribe((params) => {
      const id = params['id'];
      const encryptId = this.CryptoService.decrypt(id);
      if (encryptId) {
        this.getNoticeBoardPDF(encryptId);
      }
    });

  }

  getNoticeBoardPDF(id: number) {
    const encryptedID = this.CryptoService.encrypt(id)
    this.PageApiService.getNoticeBoardPDF(encryptedID)
      .pipe(takeUntil(this.unSubscribeSubject))
      .subscribe({
        next: (res: any) => {
          if (res?.data && res.data != '') {
            if (res.status === 200) {
              this.noticeBoard = res.data;
              this.noticeBoardtitle = res.data.title
              this.noticeBoarddate = res.data.date
              this.noticeBoardpdf = this.sanitizer.bypassSecurityTrustResourceUrl(
                environment.apiUrl + 'public/uploads/' + res.data.pdf
              )

            } else {
              this.SweetAlertServiceService.showErrorAlert('Something went wrong!');
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
