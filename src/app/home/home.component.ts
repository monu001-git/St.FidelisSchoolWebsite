import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../partials/header/header.component';
import { FooterComponent } from '../partials/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { AboutUsComponent } from '../home/home-section/about-us/about-us.component';
import { AchievementsComponent } from '../home/home-section/achievements/achievements.component';
import { AdmissionComponent } from '../home/home-section/admission/admission.component';
import { FacilitiesComponent } from '../home/home-section/facilities/facilities.component';
import { FouriconComponent } from '../home/home-section/fouricon/fouricon.component';
import { MessageComponent } from '../home/home-section/message/message.component';
import { NoticeBoardComponent } from '../home/home-section/notice-board/notice-board.component';
import { PhotoComponent } from '../home/home-section/photo/photo.component';
import { TestimonialsComponent } from '../home/home-section/testimonials/testimonials.component';
import { HomeApiService } from './homeApiservice/home-api.service';
import { ScriptService } from '../../app/commonService/service/script.service';
import {BusyService} from "../../app/commonService/service/busy.service"

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    AchievementsComponent,
    AdmissionComponent,
    FacilitiesComponent,
    FouriconComponent,
    MessageComponent,
    NoticeBoardComponent,
    PhotoComponent,
    TestimonialsComponent,
    RouterOutlet,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(
    public HomeService: HomeApiService,
    private ScriptService: ScriptService,
    private BusyService:BusyService
  ) {}

  ngOnInit() {
    this.BusyService.busy();
    setTimeout(() => {
      this.ScriptService.loadScripts();
      this.BusyService.idle();
    },3000);
  }
}
