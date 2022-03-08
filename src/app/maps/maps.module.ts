import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './screens/map-screen/map-screen.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';
import { BtnMylocationComponent } from './components/btn-mylocation/btn-mylocation.component';
import { AngularlogoComponent } from './components/angularlogo/angularlogo.component';
import { ResultsComponent } from './components/results/results.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';



@NgModule({
  declarations: [
    MapScreenComponent,
    MapViewComponent,
    LoadingComponent,
    BtnMylocationComponent,
    AngularlogoComponent,
    ResultsComponent,
    SearchbarComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    MapScreenComponent
  ]
})
export class MapsModule { }
