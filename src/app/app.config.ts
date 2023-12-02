import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, ModuleWithProviders, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { ROUTES } from './app.routes';

const angular_modules: Type<unknown>[] | ModuleWithProviders<unknown>[] = [FormsModule];


export const appConfig: ApplicationConfig = {
    providers: [provideRouter(ROUTES), provideHttpClient(), importProvidersFrom(...angular_modules), provideClientHydration()]
};
