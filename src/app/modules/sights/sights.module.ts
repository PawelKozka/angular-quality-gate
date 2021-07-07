import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SightsRoutingModule } from './sights-routing.module';
import {SightsListComponent} from './components/sights-list/sights-list.component';
import { ModalAddComponent } from './components/modal-add/modal-add.component';
import { ModalDetailsComponent } from './components/modal-details/modal-details.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
SightsListComponent,
ModalAddComponent,
ModalDetailsComponent
  ],
  imports: [
    CommonModule,
    SightsRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class SightsModule { }
