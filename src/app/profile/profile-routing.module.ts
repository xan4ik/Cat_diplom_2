import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePreviewComponent } from './profile-preview/profile-preview.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';

const routes: Routes = [
    {
      path: '',
      component: ProfileDetailComponent,
    },
    {
      path: 'profile/:id',
      component: ProfileDetailComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
