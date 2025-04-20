import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../partials/header/header.component';
import { FooterComponent } from '../../../partials/footer/footer.component';
import { CryptoService } from '../../../commonService/service/crypto.service';
import { SweetAlertServiceService } from '../../../commonService/service/sweet-alert-service.service';
import { PageApiService } from '../../../pages/pageApiservice/page-api.service';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MessageComponent } from '../../../home/home-section/message/message.component';
import { FouriconComponent } from '../../../home/home-section/fouricon/fouricon.component';
import { AdmissionComponent } from '../../../home/home-section/admission/admission.component';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-master-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,FouriconComponent,AdmissionComponent,RouterModule],
  templateUrl: './master-page.component.html',
  styleUrl: './master-page.component.css',
})
export class MasterPageComponent implements OnInit {
 
  unSubscribeSubject: Subject<any> = new Subject();
  contentData:any;
  currentId: any;
  message503:any;
  bannerImage:any;
  contentImage:any;

  constructor(
    private CryptoService: CryptoService,
    private SweetAlertServiceService: SweetAlertServiceService,
    private PageApiService: PageApiService,
    private route: ActivatedRoute,

  ) {
    
  }
 
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.currentId = params.get('slug');
      if (this.currentId) {
        this.getMenuPageSection(this.currentId)
      }
    });
  }



  getMenuPageSection(slug: any) {
    const encryptedslug = this.CryptoService.encrypt(slug);
    this.PageApiService.getMenuPageSection(encryptedslug)
      .pipe(takeUntil(this.unSubscribeSubject))
      .subscribe({
        next: (res: any) => {
          if (res?.data && res.data !== '') {
            if (res.status === 200) {
              this.contentData = res.data;
              this.bannerImage = environment.apiUrl+'uploads/page/'+res.data?.banner;
              this.contentImage = environment.apiUrl+'uploads/page/'+res.data?.content?.content_image;
            }else if(res.status === 503){

                 this.message503 =  res.message

            } else {
              this.SweetAlertServiceService.showErrorAlert(
                'Something went wrong!'
              );
            }

          }else if(res.status === 503){

             this.message503  =  res.message 

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
