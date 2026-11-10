import { Routes } from '@angular/router';

export const activitiesRoutes: Routes = [
  {
    path: 'camps',
    loadComponent: () =>
      import('./camps/camps-page.component')
        .then((module) => module.CampsPageComponent)
  },
  {
    path: 'competitions',
    loadComponent: () =>
      import('./competitions/competitions-page.component')
        .then((module) => module.CompetitionsPageComponent)
  },
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
    path: 'fitness',
    loadComponent: () =>
      import('./fitness/fitness-page.component')
        .then((module) => module.FitnessPageComponent)
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
