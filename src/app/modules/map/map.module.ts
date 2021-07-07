import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import {MapComponent} from './components/map/map.component';
import {SightsComponent} from './components/sights/sights.component';
import {NgxMapboxGLModule} from 'ngx-mapbox-gl';
import {environment} from '../../../environments/environment';



@NgModule({
  declarations: [
    MapComponent,
    SightsComponent
  ],
  imports: [
    NgxMapboxGLModule.withConfig({
      accessToken: environment.mapboxToken
    }),
    CommonModule,
    MapRoutingModule
  ]
})
export class MapModule { }
