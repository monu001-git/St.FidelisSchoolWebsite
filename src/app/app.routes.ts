import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../app/home/home.component').then((comp) => comp.HomeComponent),
  },
  {
    path: 'home/pdf',
    loadComponent: () =>
      import(
        '../app/pages/notice-board/notice-board-pdf/notice-board-pdf.component'
      ).then((comp) => comp.NoticeBoardPdfComponent),
  },
  {
    path: 'home/mulitple-pdf',
    loadComponent: () =>
      import(
        '../app/pages/notice-board/notice-multi-pdf/notice-multi-pdf.component'
      ).then((comp) => comp.NoticeMultiPdfComponent),
  },
  {
    path: 'home/achievement',
    loadComponent: () =>
      import(
        '../app/pages/achievements/gallery-achievements/gallery-achievements.component'
      ).then((comp) => comp.GalleryAchievementsComponent),
  },
  {
    path: 'home/mulitple-achievement',
    loadComponent: () =>
      import(
        '../app/pages/achievements/multiple-achievements/multiple-achievements.component'
      ).then((comp) => comp.MultipleAchievementsComponent),
  },
  {
    path: 'home/kids-conrner',
    loadComponent: () =>
      import(
        '../app/pages/kids-conrner/kids-conrner/kids-conrner.component'
      ).then((comp) => comp.KidsConrnerComponent),
  },
  {
    path: 'home/image',
    loadComponent: () =>
      import(
        '../app/pages/gallery/multiple-image/multiple-image.component'
      ).then((comp) => comp.MultipleImageComponent),
  },
  {
    path: 'home/album',
    loadComponent: () =>
      import('../app/pages/gallery/image-album/image-album.component').then(
        (comp) => comp.ImageAlbumComponent
      ),
  },

  {
    path: 'home/facilities',
    loadComponent: () =>
      import('../app/pages/facilities/facilities/facilities.component').then(
        (comp) => comp.FacilitiesComponent
      ),
  },

  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'home/:slug',
    loadChildren: () =>
      import('../app/pages-master/route/PageRoutes.routes').then(
        (m) => m.pageRoutes
      ),
  },

  {
    path: '**',
    loadComponent: () =>
      import('../app/error/error.component').then(
        (comp) => comp.ErrorComponent
      ),
  },
];
