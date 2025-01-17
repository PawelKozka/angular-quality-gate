import {Component, OnInit, ViewChild} from '@angular/core';
import {SightseeingPoint} from '../../../models/sightseeing-point';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {SightsService} from '../../../services/sights.service';
import {MapComponent} from '../map/map.component';
import {Location} from '../../../models/location';
import {NavService} from '../../../services/nav.service';
import {City} from '../../../models/city';

@Component({
  selector: 'app-sights',
  templateUrl: './sights.component.html',
  styleUrls: ['./sights.component.scss']
})
export class SightsComponent implements OnInit {

  @ViewChild('mapComponent', {static: false}) mapComponent: MapComponent;
  currentCity: Location;
  sights$: Observable<SightseeingPoint[]>;

  constructor(
    private sightsService: SightsService,
    private router: Router,
    private navService: NavService
  ) {
  }

  ngOnInit(): void {
    this.currentCity = new Location(19.9449, 50.0646);
    this.sights$ = this.sightsService.getSights();
    this.navService.citySubject.subscribe(city => {
      this.currentCity = new Location(city.longitude, city.latitude)
      this.centerMap(city);
    });
  }
  centerMap(location: Location | City): void {
    this.mapComponent.centerMap(location);
  }

  selectSight(sight: SightseeingPoint): void {
    this.sightsService.selectedSight = sight;
    this.router.navigate(['/sight']).then();
  }
}
