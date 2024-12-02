import { Routes } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageServicesComponent } from './page-services/page-services.component';
import { PageEventsComponent } from './page-events/page-events.component';
import { PageGalleryComponent } from './page-gallery/page-gallery.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageContactComponent } from './page-contact/page-contact.component';

export const routes: Routes = [
  {
    path: '',
    component: PageHomeComponent,
  },
  {
    path: 'login',
    component: PageLoginComponent,
  },
  {
    path: 'services',
    component: PageServicesComponent,
  },
  {
    path: 'events',
    component: PageEventsComponent,
  },
  {
    path: 'login',
    component: PageLoginComponent,
  },
  {
    path: 'gallery',
    component: PageGalleryComponent,
  },
  {
    path: 'contact',
    component: PageContactComponent,
  },
  {
    path: 'aboutus',
    component: PageAboutComponent,
  },
 
];
