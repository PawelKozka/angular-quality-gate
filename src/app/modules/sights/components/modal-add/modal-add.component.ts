import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SightseeingPoint} from '../../../models/sightseeing-point';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {SightsService} from '../../../services/sights.service';
import {Country} from '../../../models/country';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.scss']
})
export class ModalAddComponent implements OnInit {
  public colors: string[] = [];
  form: FormGroup;
  longitudeREGEX = `^(\\+|-)?(?:180(?:(?:\\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\\.[0-9]{1,6})?))$`;
  latitudeREGEX = `^(\\+|-)?(?:90(?:(?:\\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\\.[0-9]{1,6})?))$`;
  private isEdited = false;
  constructor(
    public dialogRef: MatDialogRef<ModalAddComponent>,
    @Inject(MAT_DIALOG_DATA) public sight: SightseeingPoint,
    private sightService: SightsService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      longitude: new FormControl('', [
        Validators.required,
        Validators.pattern(this.longitudeREGEX)
      ]),
      latitude: new FormControl('', [
        Validators.required,
        Validators.pattern(this.latitudeREGEX)
      ]),
      country: new FormControl('', [
        Validators.required
      ]),
      countryCode: new FormControl('', [
        Validators.required
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.max(256)
      ]),
      color: new FormControl('', [
        Validators.required
      ]),
    });

    SightseeingPoint.colors().forEach(item => {
      this.colors.push(item);
    });
    if (this.sight) {
      this.isEdited = true;
      this.form.patchValue(this.sight);
      this.form.patchValue({
        country: this.sight.country.name,
        countryCode: this.sight.country.iata_code
      });
    }
  }

  get name(): AbstractControl {
    return this.form.get('name');
  }

  get longitude(): AbstractControl {
    return this.form.get('longitude');
  }

  get latitude(): AbstractControl {
    return this.form.get('latitude');
  }
  get country(): AbstractControl {
    return this.form.get('country');
  }
  get countryCode(): AbstractControl {
    return this.form.get('countryCode');
  }

  get description(): AbstractControl {
    return this.form.get('description');
  }
  get color(): AbstractControl {
    return this.form.get('color');
  }

  onSubmit(): void {
      const {name, longitude, latitude, description, color, countryCode} = this.form.value;
      const country: Country = {name: this.form.value.country, iata_code: countryCode};
      const newSight = new SightseeingPoint(name, longitude, latitude, country, description, color, SightseeingPoint.generateID());
      this.isEdited ?
        this.sightService.editSight(newSight).catch(console.error) :
        this.sightService.addSight(newSight).catch(console.error);
      this.dialogRef.close();
  }

}