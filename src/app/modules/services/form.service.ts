import { Injectable } from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  showError(controlName: string, errorName: string, form): boolean {
    const control = form.get(controlName);
    return (control.touched && control?.errors?.[errorName]);
  }
  isErrorShowed(controlName: AbstractControl): boolean {
    return controlName.invalid && (controlName.dirty || controlName.touched);
  }
}
