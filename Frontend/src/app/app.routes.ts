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
        import('./features/about-us/about-us-page.component')
          .then((module) => module.AboutUsPageComponent)
    },
    { path: 'history',
      loadComponent: () =>
        import('./features/activities/history/activity-history-page.component')
          .then((module) => module.ActivityHistoryPageComponent)
    },
    { path: 'team',
      loadComponent: () =>
        import('./features/activities/team/team-page.component')
          .then((module) => module.TeamPageComponent)
    },
    { path: 'news',
      loadComponent: () =>
        import('./features/community/community-news-page.component')
          .then((module) => module.CommunityNewsPageComponent)
    },
    { path: 'contact',
      loadComponent: () =>
        import('./features/contact/contact-page.component')
          .then((module) => module.ContactPageComponent)
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
