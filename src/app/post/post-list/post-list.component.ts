import { Component, OnInit } from '@angular/core';
import { PostProveider } from "../../Services/PostProveider";
import { PostView } from "../Post";
import { ActivatedRoute } from '@angular/router';
import { UrlStackService } from 'src/app/Services/UrlStackService';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent  implements OnInit {
  posts: PostView[] | undefined;
  tag: string;

  constructor(
    private postProvider: PostProveider,
    private route: ActivatedRoute) 
  { 
    this.tag = route.snapshot.params["tag"];
    if(this.tag){
      UrlStackService.pushUrl("/main/list/"+this.tag);
    }
    else{
      UrlStackService.pushUrl("/main")
    }
  }

  ngOnInit() {
    if(this.tag){
      this.posts = this.postProvider.getPostsWithTag(this.tag);
    }
    else{
      this.posts = this.postProvider.getAllPosts();
    }
  }

}
