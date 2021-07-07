import {Injectable} from '@angular/core';
import {SightseeingPoint} from '../models/sightseeing-point';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Country} from '../models/country';
import {map, take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SightsService {

  selectedSight: SightseeingPoint;
  refresh = new Subject();

  private url = `${environment.apiUrl}/sights`
  constructor(private http: HttpClient) {
  }
  get refreshSights(): Subject<any> {
    return this.refresh;
  }
  getSights(): Observable<SightseeingPoint[]> {
   return this.http.get<SightseeingPoint[]>(this.url).pipe(
      map(sights => {
        return sights.map(sight => {
          const country = new Country();
          country.name = sight.country.name;
          country.iata_code = sight.country.iata_code;
          return new SightseeingPoint(
            sight.name,
            sight.longitude,
            sight.latitude,
            country,
            sight.description,
            sight.color,
            sight.id
          );
        });
      }),
    );
  }
  addSight(sight: SightseeingPoint): Promise<SightseeingPoint> {
    return this.http.post(this.url, sight).pipe(
      map((response: SightseeingPoint) => response),
      tap(() => {
        this.refresh.next();
      }),
      take(1)
    ).toPromise();
  }
  deleteSight(sight: SightseeingPoint): Promise<SightseeingPoint> {
    return this.http.delete(`${this.url}/${sight.id}`).pipe(
      map((response: SightseeingPoint) => response),
      tap(() => {
        this.refresh.next();
      }),
      take(1)
    ).toPromise();
  }

  editSight(sight: SightseeingPoint): Promise<SightseeingPoint>  {
    return this.http.put(`${this.url}/${sight.id}`, sight).pipe(
      map((response: SightseeingPoint) => response),
      tap(() => {
        this.refresh.next();
      }),
      take(1)
    ).toPromise();
  }
}
