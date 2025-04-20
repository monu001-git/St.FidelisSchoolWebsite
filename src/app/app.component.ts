import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import {HomeApiService} from "../app/home/homeApiservice/home-api.service"
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'St.FidelisSchoolWebsite';
  orgData : any;
   unSubscribeSubject: Subject<any> = new Subject();

  
  constructor(
    private _router: Router,
    private HomeApiService:HomeApiService
  ) {
    if (performance.navigation.type === 1) {
      this._router.navigateByUrl('/');
    }
  }

  ngOnInit() {
    this.getOrgSection();
  }

  getOrgSection(): void {
    this.HomeApiService
      .getOrgSection()
      .pipe(takeUntil(this.unSubscribeSubject))
      .subscribe({
        next: (res: any) => {
          if (res?.status === 200 && res?.data) {
            this.orgData = res.data;
            localStorage.setItem('orgData', JSON.stringify(this.orgData));
          } else {
            console.error('Unexpected response:', res);
            console.log('Something went wrong while fetching organization data.');
          }
        },
        error: (err) => {
          console.error('API call failed:', err);
          console.log('Failed to fetch organization data.');
        },
      });
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event: PopStateEvent) {
    window.history.forward();
  }

  @HostListener('document:contextmenu', ['$event'])
  onRightClick(event: MouseEvent) {
    event.preventDefault();
  }
  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.keyCode === 123) {
      event.preventDefault();
    }

    if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
      event.preventDefault();
    }

    if (event.ctrlKey && event.shiftKey && event.keyCode === 74) {
      event.preventDefault();
    }

    if (event.ctrlKey && event.keyCode === 85) {
      event.preventDefault();
    }
  }

}
