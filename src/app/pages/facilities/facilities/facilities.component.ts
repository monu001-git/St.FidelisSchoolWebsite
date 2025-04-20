import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../partials/header/header.component';
import { FooterComponent } from '../../../partials/footer/footer.component';
import { AdmissionComponent } from '../../../home/home-section/admission/admission.component';
import { FouriconComponent } from '../../../home/home-section/fouricon/fouricon.component';
import { SweetAlertServiceService } from '../../../commonService/service/sweet-alert-service.service';
import { CryptoService } from '../../../commonService/service/crypto.service';
import { PageApiService } from '../../../pages/pageApiservice/page-api.service';
import { Subject, takeUntil } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    AdmissionComponent,
    FouriconComponent,
  ],
  templateUrl: './facilities.component.html',
  styleUrl: './facilities.component.css',
})
export class FacilitiesComponent implements AfterViewInit, OnInit {
  unSubscribeSubject: Subject<any> = new Subject();
  facilitieData: any;
  backendUrl: any;

  constructor(
    private CryptoService: CryptoService,
    private SweetAlertServiceService: SweetAlertServiceService,
    private PageApiService: PageApiService
  ) {}

  ngOnInit() {
    this.getFacilitiesSection();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.loadScripts();
    }, 3000);
  }

  loadScripts() {
    const scriptPaths = [
      'assets/gallery/js/jquery.smartmenus.min.js',
      'assets/js/lightbox.js',
      'assets/js/toggle.js',
    ];

    scriptPaths.forEach((scriptPath) => {
      if (!document.querySelector(`script[src="${scriptPath}"]`)) {
        const script = document.createElement('script');
        script.src = scriptPath;
        script.defer = true;

        script.onload = () => {
          if (scriptPath.includes('toggle.js')) {
            (window as any).initToggles(); // safely call the toggle function
          }
        };

        script.onerror = (error) => {
          console.error(`Error loading script: ${scriptPath}`, error);
        };

        document.body.appendChild(script);
      }
    });
  }

  getFacilitiesSection() {
    this.PageApiService.getFacilitiesSection()
      .pipe(takeUntil(this.unSubscribeSubject))
      .subscribe({
        next: (res: any) => {
          if (res?.data && res.data != '') {
            if (res.status === 200) {
              this.facilitieData = res.data;
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
