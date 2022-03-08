import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { Feature } from '../interfaces';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private placesService: PlacesService,
              private mapService:MapService) {

  }
  
  public selectedid: string = '';

  get isLoadingPlaces():boolean{   
    return this.placesService.isLoadingPlaces;
  }

  get places():Feature[] {
    return this.placesService.places;
  }

  flyto(place: Feature) {

    this.selectedid = place.id;
    
    const [lng, lat] = place.center;
    this.mapService.flyTo( [lng, lat]);
    

    
  }


  ngOnInit(): void {
  }

  getDirections(place: Feature) {

    if (!this.placesService.useLocation) throw Error('no Hay user location');

    this.placesService.deleteplaces();

    const start = this.placesService.useLocation;
    const end = place.center as [number,number];

    
    this.mapService.getRouterBetweenPoinst(start, end);
    
  }


}
