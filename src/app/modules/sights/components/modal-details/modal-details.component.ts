import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SightseeingPoint} from '../../../models/sightseeing-point';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.scss']
})
export class ModalDetailsComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public sight: SightseeingPoint
  ) {}

}
