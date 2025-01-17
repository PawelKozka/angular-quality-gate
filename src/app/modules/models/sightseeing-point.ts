import {Country} from './country';

export class SightseeingPoint {
  constructor(
    public name: string = '',
    public longitude: number = 0,
    public latitude: number = 0,
    public country: Country,
    public description: string = '',
    public color: number = 0,
    public id: string
  ) {
  }

  static colors(): Map<number, string> {
    return new Map([[1, '#FF5733'], [2, '#54CCE2'], [3, '#973AFF']]);
  }
  static generateID(): string {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  getColor(): string {
    return SightseeingPoint.colors().get(this.color);
  }
}
