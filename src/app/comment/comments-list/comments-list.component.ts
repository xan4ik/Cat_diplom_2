import { Component, Input, OnInit } from '@angular/core';
import { CommentView } from '../Comment';
import { Profile } from 'src/app/profile/profile';
import { ImageSize } from 'src/app/app-components-module/image-wrapper/image-wrapper.component';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss'],
})
export class CommentsListComponent implements OnInit {

  @Input() comments: CommentView[];
  @Input() max: number | undefined;
  imageSize = ImageSize.Small;

  commentToDisplay: CommentView[];

  constructor() {
    this.comments = [];
    this.commentToDisplay = [];
    this.max = undefined;
  }

  ngOnInit(): void {
    this.commentToDisplay = this.comments;
    if(this.max){
      this.commentToDisplay = this.comments.slice(0, this.max)
    }
  }

  getAuthorShortName(author: Profile){
    return `${author.name.secondName} ${author.name.firstName}`
  }

  getData(date: Date){
    const month = date.getUTCMonth() + 1; 
    const monthString = month < 10 ? `0${month}` : month; //months from 1-12
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();

    return  day + "." + monthString + "." + year;
  }
}
