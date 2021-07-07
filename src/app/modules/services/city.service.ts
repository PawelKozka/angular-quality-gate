import { Injectable } from '@angular/core';
import {SightseeingPoint} from '../models/sightseeing-point';
import {Observable, Subject} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map, take, tap} from 'rxjs/operators';
import {Country} from '../models/country';
import {City} from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  refresh = new Subject();
  private url = `${environment.apiUrl}/cities`;
  constructor(private http: HttpClient) {
  }
  //TODO add CRUD for Cities
}
