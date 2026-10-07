import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '',
    pathMatch: 'full', 
    loadComponent: () => 
      import('./features/home/home-page.component')
        .then((module) => module.HomePageComponent)
    },
    { path: 'history',
      loadComponent: () => 
        import('./features/history/history-page.component')
          .then((module) => module.HistoryPageComponent)
    },
    { path: 'activities',
      loadChildren: () =>
        import('./features/activities/activities.routes')
          .then((module) => module.activitiesRoutes)
    },
    { path: '**', 
      redirectTo: '' }
];