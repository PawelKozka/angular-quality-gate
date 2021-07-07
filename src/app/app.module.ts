import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxMapboxGLModule} from 'ngx-mapbox-gl';
import {environment} from '../environments/environment';
import { NavComponent } from './nav/nav.component';
import {MatTabsModule} from '@angular/material/tabs';
import {AppRoutingModule} from './app-routing.module';
import {SightsModule} from './modules/sights/sights.module';
import {MapModule} from './modules/map/map.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
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
    SightsModule,
    MapModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
