import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponentsModuleModule } from '../app-components-module/app-components-module.module';
import { PostPreviewComponent } from './post-preview/post-preview.component';
import { PostListComponent } from './post-list/post-list.component';
import { IonicModule } from '@ionic/angular';
import { PostRoutingModule } from './post-routing.module';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { CommentModule } from '../comment/comment.module';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    AppComponentsModuleModule,
    IonicModule,
    PostRoutingModule,
    CommentModule,
    RouterModule
  ],
  declarations: [PostPreviewComponent, PostListComponent, PostDetailComponent],
})
export class PostModule { }
