import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlacesResponse, Feature } from '../components/interfaces';
import { placesApiclient } from '../api/index';
import { MapService } from './map.service';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {


  public useLocation?: [number, number] = undefined;
  public isLoadingPlaces: boolean = false;
  public places: Feature[] = [];

  get isUserLocationReady():boolean {
    
    return !!this.useLocation;
  }

  constructor(private placesApi: placesApiclient,
              private mapService:MapService) {

    this.getUserLocation();
   }

   public  async getUserLocation():Promise<[number,number]> {
    
     return new Promise((resolve, reject)=> {
     
       navigator.geolocation.getCurrentPosition(

         ({ coords }) => {
           this.useLocation = [coords.longitude, coords.latitude];
           resolve(this.useLocation);
          
         }, (err) => {
           alert('No se pudo optener la geolocalizacion');
           console.log(err);
           reject();
         })
    })
   }
  
  getPlacesByQuery(query: string = '') {

    if (query.length === 0) {
      this.places = [];
      this.isLoadingPlaces = false;
      return;
    }

    if (!this.useLocation) throw Error(' No hay user location');
    
    this.isLoadingPlaces = true;

    
    this.placesApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity:this.useLocation.join(',')
      }
    })
      .subscribe(res => {
        this.isLoadingPlaces = false;
        this.places = res.features;

        this.mapService.createMarkersFromplaces(this.places,this.useLocation!);
      });
  }

  deleteplaces() {
    this.places = [];
    
  }
}
