import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchByCadegoryComponent } from './search-by-cadegory/search-by-cadegory.component';
import { GlobalSearchComponent } from './global-search/global-search.component';

const routes: Routes = [
  {
    path: '',
    component: GlobalSearchComponent
  },
  {
    path: 'search/:competance',
    component: SearchByCadegoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule {}
