import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostProveider } from 'src/app/Services/PostProveider';
import { Post, PostView } from '../Post';
import { UrlStackService } from 'src/app/Services/UrlStackService';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent  implements OnInit {

  private postID: number;
  post : PostView | undefined;

  constructor(  
    private service: PostProveider, 
    private route: ActivatedRoute)
  {
    this.postID = route.snapshot.params['id'];
    UrlStackService.pushUrl("/main/posts/post/"+this.postID);
  }

  ngOnInit() {
    this.post = this.service.getPostById(this.postID);
  }

}
