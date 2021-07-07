import {Component, OnInit} from '@angular/core';
import {SightseeingPoint} from '../../../models/sightseeing-point';
import {SightsService} from '../../../services/sights.service';
import {ModalDetailsComponent} from '../modal-details/modal-details.component';
import {MatDialog} from '@angular/material/dialog';
import {ModalAddComponent} from '../modal-add/modal-add.component';

@Component({
  selector: 'app-sights-list',
  templateUrl: './sights-list.component.html',
  styleUrls: ['./sights-list.component.scss']
})
export class SightsListComponent implements OnInit{

  sights: SightseeingPoint[];

  constructor(private sightsService: SightsService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.sightsService.refresh.subscribe(() => {
      this.getSights();
    });
    this.getSights();
  }
  getSights(): void {
    this.sightsService.getSights().subscribe(sights => {
      this.sights = sights;
    });
  }
  openDetailsModal(sight: SightseeingPoint): void {
      const dialogRef = this.dialog.open(ModalDetailsComponent, {
        width: '250px',
        data: sight,
      });
      dialogRef.afterClosed().subscribe();
    }

  openEditModal(sight?: SightseeingPoint): void {
    const dialogRef = this.dialog.open(ModalAddComponent, {
      width: '250px',
      data: sight,
    });
    dialogRef.afterClosed().subscribe();
  }

  deleteSight(sight: SightseeingPoint): void {
    this.sightsService.deleteSight(sight).catch(console.error);
  }

}
