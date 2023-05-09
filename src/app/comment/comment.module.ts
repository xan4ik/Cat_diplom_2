import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentInputComponent } from './comment-input/comment-input.component';
import { AppComponentsModuleModule } from '../app-components-module/app-components-module.module';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    AppComponentsModuleModule,
    IonicModule,
    RouterModule,
    FormsModule
  ],
  declarations: [CommentsListComponent, CommentInputComponent],
  exports: [CommentsListComponent, CommentInputComponent]
})
export class CommentModule { }
