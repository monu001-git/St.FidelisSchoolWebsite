import { Routes } from '@angular/router';
import { pageCommonRoutes } from '../../pages/route/PageCommonRoutes.routes';
import { PagesMasterComponent } from '../pages-master.component';

export const pageRoutes: Routes = [

    {
      path: '',
      component: PagesMasterComponent,
      children: pageCommonRoutes,
    },

];
