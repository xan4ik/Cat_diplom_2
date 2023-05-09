import { Component, Input, OnInit } from '@angular/core';
import { Post, PostView } from '../Post';
import { Profile } from 'src/app/profile/profile';
import { PostProveider } from '../../Services/PostProveider';
import { CommentService } from 'src/app/Services/CommentService';


@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss'],
})
export class PostPreviewComponent{

  @Input() post!: PostView;
  @Input() short: boolean;

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

  refreshComments(){
    const updatedComments =  this.commentService.getCommntsByPostId(this.post.id);
    this.post.comments = updatedComments;
  }
}
