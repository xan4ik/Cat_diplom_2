import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponentsModuleModule } from '../app-components-module/app-components-module.module';
import { ProfilePreviewComponent } from './profile-preview/profile-preview.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileService } from '../Services/ProfileService';
import { IonicModule } from '@ionic/angular';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { PostModule } from '../post/post.module';



@NgModule({
  imports: [
    CommonModule,
    AppComponentsModuleModule,
    ProfileRoutingModule,
    PostModule,
    IonicModule
  ],
  declarations: [ProfilePreviewComponent, ProfileDetailComponent, ProfileSettingsComponent],
  exports: [ProfilePreviewComponent]
})
export class ProfileModule { }
