import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MapPageComponent } from './map-page/map-page.component';

const routes: Routes = [
  {
    path: '',
    component: MapPageComponent
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MapRoutingModule {}
