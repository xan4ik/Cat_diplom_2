import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Post, PostView } from '../Post';
import { Profile } from 'src/app/profile/profile';
import { PostProveider } from '../../Services/PostProveider';
import { CommentService } from 'src/app/Services/CommentService';
import { ImageSize } from 'src/app/app-components-module/image-wrapper/image-wrapper.component';
import { IonModal } from '@ionic/angular';


@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss'],
})
export class PostPreviewComponent implements OnDestroy{

  @ViewChild('commentModal') commentModal: IonModal | undefined;
  @ViewChild('imageModal') imageModal: IonModal | undefined;
  @Input() post!: PostView;
  @Input() short: boolean;

  SIZES = ImageSize;

  openComments: boolean = false;
  openImage: boolean = false;

  constructor(private commentService: CommentService){
    this.short = true;
  }

  getAuthorName(profile: Profile) : string{
    return `${profile.name.secondName} ${profile.name.firstName} ${profile.name.fathersName[0]}.`
  }

  getPostContent(text : string): string{
    if(this.short){
      return `${text.substring(0, 260)}...`;
    }
    return text;
  }

  getCommentsCount(){
    return this.commentService.getCommentsCountByPostId(this.post.id);
  }

  refreshComments(){
    const updatedComments =  this.commentService.getCommntsByPostId(this.post.id);
    this.post.comments = updatedComments;
  }

  openCommentModal(){
    this.openComments = true;
  }

  openImageModal(){
    this.openImage = true
  }

  ngOnDestroy(): void {
    this.imageModal?.dismiss();
    this.commentModal?.dismiss();
  }

}
