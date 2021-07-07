import {Component} from '@angular/core';
import {NavService} from '../modules/services/nav.service';
import {City} from '../modules/models/city';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  selectedCity: string;
  links = [
    {
      title: 'LIST',
      path: 'sights-list'
    },
    {
      title: 'MAP',
      path: 'sights'
    }
  ];
  cities: City[] = [
    {
      name: 'Kraków',
      longitude: 19.944544,
      latitude: 50.049683
    },
     {
      name: 'Warszawa',
      longitude: 21.017532,
      latitude: 52.237049
    },
      {
      name: 'Wrocław',
      longitude: 17.038538,
      latitude: 51.107883
    }
  ];
  constructor(private navService: NavService) {
  }
  onSelectChange(): void {
    this.navService.selectCity(this.cities.filter(item => item.name === this.selectedCity)[0]);

  }
}
