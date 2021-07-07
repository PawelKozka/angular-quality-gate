import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MapComponent} from './map/map.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxMapboxGLModule} from 'ngx-mapbox-gl';
import {environment} from '../environments/environment';
import { SightsComponent } from './sights/sights.component';
import { NavComponent } from './nav/nav.component';
import {SightsListComponent} from './sights-list/sights-list.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SightsComponent,
    NavComponent,
    SightsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMapboxGLModule.withConfig({
      accessToken: environment.mapboxToken
    }),
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
