import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import {Map,Popup,Marker}  from 'mapbox-gl';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit, AfterViewInit{
  
  @ViewChild('mapDiv') mapDivelement!: ElementRef;
  constructor(private PlacesService: PlacesService,
              private mapService: MapService) { }
  
  ngAfterViewInit(): void {
    if(!this.PlacesService.useLocation) throw Error('No hay placesservices.userlocation');
 
    console.log(this.PlacesService.useLocation);
    const map = new Map({
      container:this.mapDivelement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.PlacesService.useLocation,
      zoom: 14 // starting zoom
    });
    
    const popup = new Popup()
      .setHTML(`<h1>Hello World!</h1>
                <span> Estoy en otrto lugar del mundo</span>`);
      new Marker({ color: 'red' })
      .setLngLat(this.PlacesService.useLocation)
      .setPopup(popup)    
        .addTo(map)
    
    this.mapService.setMap(map);
  }  

  ngOnInit(): void {
   // console.log(this.PlacesService.useLocation);
  }




}
