import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', title: 'Haytham Nagdy', loadComponent: () => import('./features/home/home/home.component').then(m => m.HomeComponent) },
  { path: 'industries/:slug', loadComponent: () => import('./features/industries/industry-page/industry-page.component').then(m => m.IndustryPageComponent) },
  { path: 'contact', title: 'Contact Us', loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent) },
   { path: 'about', title: 'About Us', loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent) },

   { path: 'insights', title: 'Insights', loadComponent: () => import('./features/insights-page/insights-page.component').then(m => m.InsightsPageComponent) },
  { path: 'services', title: 'Our Services', loadComponent: () => import('./features/services-page/services-page.component').then(m => m.ServicesPageComponent) },
  { path: 'how-we-work', title: 'How We Work', loadComponent: () => import('./features/how-we-work/how-we-work.component').then(m => m.HowWeWorkComponent) },
  { path: '**', redirectTo: '' },
];

