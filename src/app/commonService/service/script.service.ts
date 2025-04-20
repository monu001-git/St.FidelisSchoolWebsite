import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptService {

  constructor() { }


  loadScripts() {
   const scriptPaths = [
     '../../assets/js/popper.min.js',
     '../../assets/js/bootstrap.min.js',
     '../../assets/gallery/js/swiper-bundle.min.js',
     '../../assets/js/custom.js',
     '../../assets/js/owl.js',
     '../../assets/js/wow.js',
     '../../assets/js/carousel.js',
     '../../assets/js/validation.js',
     '../../assets/js/jquery.fancybox.js',
     '../../assets/js/appear.js',
     '../../assets/js/parallax.min.js',
     '../../assets/js/script.js',
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
