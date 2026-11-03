import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '',
    pathMatch: 'full', 
    loadComponent: () => 
      import('./features/home/home-page.component')
        .then((module) => module.HomePageComponent)
    },
    { path: 'about-us',
      loadComponent: () => 
        import('./features/history/history-page.component')
          .then((module) => module.HistoryPageComponent)
    },
    { path: 'history',
      loadComponent: () =>
        import('./features/activities/history/activity-history-page.component')
          .then((module) => module.ActivityHistoryPageComponent)
    },
    { path: 'community/:slug',
      loadComponent: () =>
        import('./features/community/community-story-page.component')
          .then((module) => module.CommunityStoryPageComponent)
    },
    { path: 'activities',
      loadChildren: () =>
        import('./features/activities/activities.routes')
          .then((module) => module.activitiesRoutes)
    },
    { path: '**', 
      redirectTo: '' }
];
