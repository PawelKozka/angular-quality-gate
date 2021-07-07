import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/sights-list', pathMatch: 'full'},
  {
    path: 'map',
    loadChildren: () => import('./modules/map/map-routing.module').then(m => m.MapRoutingModule)
  },
  {
    path: 'sights-list',
    loadChildren: () => import('./modules/sights/sights-routing.module').then(m => m.SightsRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
