import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponentsModuleModule } from '../app-components-module/app-components-module.module';
import { IonicModule } from '@ionic/angular';
import { MapPageComponent } from './map-page/map-page.component';
import { MapRoutingModule } from './map-routing.module';



@NgModule({
  imports: [
    CommonModule,
    AppComponentsModuleModule,
    IonicModule,
    MapRoutingModule
  ],
  declarations: [MapPageComponent]
})
export class MapModule { }
