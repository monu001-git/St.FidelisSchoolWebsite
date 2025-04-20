import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../partials/header/header.component';
import { FooterComponent } from '../../../partials/footer/footer.component';
import { AdmissionComponent } from '../../../home/home-section/admission/admission.component';
import { FouriconComponent } from '../../../home/home-section/fouricon/fouricon.component';

@Component({
  selector: 'app-gallery-achievements',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,AdmissionComponent,FouriconComponent],
  templateUrl: './gallery-achievements.component.html',
  styleUrl: './gallery-achievements.component.css'
})
export class GalleryAchievementsComponent implements OnInit {

  ngOnInit() {
    setTimeout(() => {
      this.loadScripts();
    },1000);
  }


  loadScripts() {
    const scriptPaths = [
      '../../assets/gallery/js/jquery.smartmenus.min.js',
      '../../assets/gallery/js/aos.js',
      '../../assets/gallery/js/isotope.js',
      '../../assets/gallery/js/imagesloaded.pkgd.min.js',
      '../../assets/gallery/js/main.js',
      '../../assets/gallery/js/lightgallery-all.min.js',

    ];

    scriptPaths.forEach((scriptPath) => {
      const script = document.createElement('script');
      script.src = scriptPath;

      script.onerror = (error) => {
        console.error(`Error loading script: ${scriptPath}`, error);
      };
      document.body.appendChild(script);
    });
  }

}
