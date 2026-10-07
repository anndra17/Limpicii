import { Routes } from '@angular/router';

export const activitiesRoutes: Routes = [
     {
    path: 'tennis',
    loadComponent: () =>
      import('./tennis/tennis-page.component')
        .then((module) => module.TennisPageComponent)
  },
  {
    path: 'athletics',
    loadComponent: () =>
      import('./athletics/athletics-page.component')
        .then((module) => module.AthleticsPageComponent)
  },
  {
    path: 'skiing',
    loadComponent: () =>
      import('./skiing/skiing-page.component')
        .then((module) => module.SkiingPageComponent)
  },
  {
    path: 'gymnastics',
    loadComponent: () =>
      import('./gymnastics/gymnastics-page.component')
        .then((module) => module.GymnasticsPageComponent)
  },
  {
    path: 'hiking',
    loadComponent: () =>
      import('./hiking/hiking-page.component')
        .then((module) => module.HikingPageComponent)
  },
  {
    path: 'swimming',
    loadComponent: () =>
      import('./swimming/swimming-page.component')
        .then((module) => module.SwimmingPageComponent)
  }
];