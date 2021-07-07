import { Injectable } from '@angular/core';
import {City} from '../models/city';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  city: City;
  citySubject: Subject<null | City> = new Subject();
  constructor() {}


  selectCity(selectedCity: City): void {
    console.log('select', selectedCity);
    this.citySubject.next(selectedCity);
    this.city = selectedCity;
  }
}
