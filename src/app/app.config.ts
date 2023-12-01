import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, ModuleWithProviders, Type } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { ROUTES } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

// const angular_modules: Type<unknown>[] | ModuleWithProviders<unknown>[] = [BrowserModule, BrowserAnimationsModule];


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(ROUTES), provideHttpClient(), provideClientHydration()]
};
