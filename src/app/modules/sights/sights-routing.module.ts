import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SightsListComponent} from './components/sights-list/sights-list.component';

const routes: Routes = [
  {
    path: '',
    component: SightsListComponent,
  },
  {
    path: 'sights-list',
    component: SightsListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SightsRoutingModule { }
