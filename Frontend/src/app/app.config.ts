import { ApplicationConfig, inject, provideAppInitializer } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withXhr } from '@angular/common/http';


import { routes } from './app.routes';
import { TranslationService } from './core/services/translation.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withXhr()),
    provideAppInitializer(() => inject(TranslationService).initialize())
  ]
};
