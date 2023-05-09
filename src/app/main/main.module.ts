import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponentsModuleModule } from '../app-components-module/app-components-module.module';
import { MainRoutingModule } from './main-routing.module';
import { IonicModule } from '@ionic/angular';
import { MainPageComponent } from './main-page/main-page.component';



@NgModule({
  imports: [
    CommonModule,
    AppComponentsModuleModule,
    MainRoutingModule,
    IonicModule
  ],
  declarations: [MainPageComponent]
})
export class MainModule { }
