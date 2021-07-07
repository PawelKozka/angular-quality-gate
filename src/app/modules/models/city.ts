import { Location } from './location';

export interface City extends Location{
  name?: string;
  longitude: number;
  latitude: number;
}
