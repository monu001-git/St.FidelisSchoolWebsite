import { Routes } from '@angular/router';
// import { pagesRoutes } from '';

export const pageCommonRoutes: Routes = [


  {
    path: 'image',
    loadComponent: () =>
      import(
        '../../pages/gallery/multiple-image/multiple-image.component'
      ).then((comp) => comp.MultipleImageComponent),
  },
  {
    path: 'album',
    loadComponent: () =>
      import('../../pages/gallery/image-album/image-album.component').then(
        (comp) => comp.ImageAlbumComponent
      ),
  },

  // {
  //   path: '',
  //   loadComponent: () =>
  //     import('../master/master-page/master-page.component').then((c) => c.MasterPageComponent),
  // },

];
