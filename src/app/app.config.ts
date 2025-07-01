

// -------------------------------------------------------
// 8. Provide HttpClient with Basic‑Auth Interceptor
// File: src/app/app.config.ts
// -------------------------------------------------------
// import { ApplicationConfig } from '@angular/core';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

import {
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { routes } from './app.routes';
import { basicAuthInterceptor } from './core/basic-auth.interceptor';
import { provideRouter } from '@angular/router';
// import { provideZoneChangeDetection } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([basicAuthInterceptor])),
    provideRouter(routes),
    provideZoneChangeDetection({ eventCoalescing: true }),
  ],
};

