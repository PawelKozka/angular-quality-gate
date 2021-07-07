import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SightsComponent} from './components/sights/sights.component';

const routes: Routes = [
  {
    path: '',
    component: SightsComponent,
  },
  {
    path: 'sights',
    component: SightsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }
