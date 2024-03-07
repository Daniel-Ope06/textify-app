import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"textify-art","appId":"1:933785432280:web:173f6a66d99bac2d7fa7ad","storageBucket":"textify-art.appspot.com","apiKey":"AIzaSyCua9ksUvdWGTVWhXYAW4-sTRtYM2YYhQM","authDomain":"textify-art.firebaseapp.com","messagingSenderId":"933785432280","measurementId":"G-WVEFLGLST4"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
