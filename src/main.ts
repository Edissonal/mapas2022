import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZWRpc3NvbmFsMSIsImEiOiJja3p4NjRveTMwMmc4MnZwbGZvM3YydWJoIn0.ol5APVFju75J4vvDuMNjew';


if (!navigator.geolocation) {
  alert('Navegador no soporta la geolocalizacion');
  throw new Error('Navegador no soporta el Geolocalizacion');
}




if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
