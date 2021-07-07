import {Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {SightseeingPoint} from '../../../models/sightseeing-point';
import * as mapbox from 'ngx-mapbox-gl';
import {Location} from '../../../models/location';
import {NavService} from '../../../services/nav.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnChanges{

  @ViewChild(mapbox.MapComponent, { static: true }) map;
  @Input() location: Location;
  @Input() sights: SightseeingPoint[];
  @Output() selectedSightEvent = new EventEmitter<SightseeingPoint>();
  loading = true;
  sightsAround: number;
  constructor(public navService: NavService) {
  }

  ngOnChanges(): void {
    if(this.sights) {
      this.calculateSightsAroundCity();
    }
  }
  centerMap(location: Location): void {
    this.loading = false;
    this.map.mapInstance.flyTo({ center: [location.longitude, location.latitude] });
  }
  calculateSightsAroundCity(): void {
    this.sightsAround = 0;
    this.sights.forEach(sight => {if (this.calculateDistance(this.location.longitude,
      this.location.latitude, sight.longitude, sight.latitude) <= 15){
      console.log('znaleziono');
      this.sightsAround++;
    }})
  }
  calculateDistance(lon1: number, lat1: number, lon2: number, lat2: number): number {
    const R = 6371e3; // metres
    const φ1 = lat1 * Math.PI/180; // φ, λ in radians
    const φ2 = lat2 * Math.PI/180;
    const Δφ = (lat2 - lat1) * Math.PI/180;
    const Δλ = (lon2 - lon1) * Math.PI/180;

    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
      Math.cos(φ1) * Math.cos(φ2) *
      Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    return (R * c)/1000; // distance in km
  }

}
