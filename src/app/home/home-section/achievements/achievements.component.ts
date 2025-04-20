import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import {SweetAlertServiceService} from "../../../commonService/service/sweet-alert-service.service"
import {CryptoService} from "../../../commonService/service/crypto.service"
import { HomeApiService } from '../../homeApiservice/home-api.service';
import {environment} from "../../../../environments/environment"
import { Router, RouterModule } from '@angular/router';
 
@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss'
})
export class AchievementsComponent {

  unSubscribeSubject: Subject<any> = new Subject();
  testimonial: any;
  achievementData:any;
  StudentCorner:any;
  backendUrl:any;

  ngOnInit() {
   this.getAchievementSection();
  }
  constructor(
    private homeApiService: HomeApiService,
    private SweetAlertServiceService:SweetAlertServiceService,
    private CryptoService:CryptoService,
       private router: Router
  ) {}


  getAchievementSection() {
    this.homeApiService.getAchievementSection()
      .pipe(takeUntil(this.unSubscribeSubject))
      .subscribe({
        next: (res: any) => {
          if (res?.data && res.data != '') {
            if (res.status === 200) {
              this.achievementData = res.data;
              console.log('achievementData',this.achievementData)
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

  getStudentCornerSection() {
    this.homeApiService.getStudentCornerSection()
      .pipe(takeUntil(this.unSubscribeSubject))
      .subscribe({
        next: (res: any) => {
          if (res?.data && res.data != '') {
            if (res.status === 200) {
              this.StudentCorner = this.CryptoService.decrypt(res.data);
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


  achievementSection(id: number) {
    this.router.navigate(['/achievement'], {
      queryParams: {
        id: this.CryptoService.encrypt(id),
      },
    });
}


jgd(){
  alert('hajksh')
}
}
