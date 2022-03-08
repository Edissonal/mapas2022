import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs/operators';
import { PlacesService } from '../../services/places.service';
import { Feature } from '../interfaces';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {


  private debounceTimer?: NodeJS.Timeout;


  constructor(private placesService:PlacesService) { }

  ngOnInit(): void {
  }

  onQueryCahnged(query: string = '') {
    if (this.debounceTimer) clearTimeout(this.debounceTimer);

    this.debounceTimer = setTimeout(() => {
      
      this.placesService.getPlacesByQuery(query);
      
    },350);
       
    
  }

}
