import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchByCadegoryComponent } from './search-by-cadegory/search-by-cadegory.component';
import { AppComponentsModuleModule } from '../app-components-module/app-components-module.module';
import { ProfileModule } from '../profile/profile.module';
import { PeopleRoutingModule } from './people-routing.module';
import { IonicModule } from '@ionic/angular';
import { GlobalSearchComponent } from './global-search/global-search.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    PeopleRoutingModule,
    AppComponentsModuleModule,
    ProfileModule,
    IonicModule,
    RouterModule
  ],
  declarations: [SearchByCadegoryComponent, GlobalSearchComponent],
})
export class PeopleModule { }
