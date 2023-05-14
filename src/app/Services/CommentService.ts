import { Injectable } from '@angular/core';
import { ProfileService } from 'src/app/Services/ProfileService';
import { Comment, CommentView } from "../comment/Comment";


@Injectable({ providedIn: 'root' })
export class CommentService {
  private comments: Comment[];

  constructor(private profileService: ProfileService) {

    console.log("here");
    this.comments = [
      {
        postId: 0,
        profileId: 0,
        text: `Интересное место. Можете рассказать подробности исследования воды в данном озере? С нетерпением жду новую часть.`,
        date: new Date(2023, 4),
      },
      {
        postId: 0,
        profileId: 1,
        text: `Ооо, моя коллега, я тоже скоро поеду в это красивое место изучать флору и фауну для научной статьи.`,
        date: new Date(2023, 4),
      }
    ];
  }


  getAllComments(): CommentView[] {
    const result: CommentView[] = [];

    for (let item of this.comments) {
      const profile = this.profileService.getProfileById(item.profileId);
      const commentView: CommentView = {
        postId: item.postId,
        profileId: item.profileId,
        text: item.text,
        date: item.date,
        author: profile!,
      };

      result.push(commentView);
    }

    return result;
  }

  saveCommnet(comment: Comment) {
    this.comments.push(comment);
  }

  getCommntsByPostId(id: number): CommentView[] | undefined {
    const result = this.getAllComments().filter(x => x.postId == id).sort((a, b) => {
      return b.date.getTime() - a.date.getTime();
    });

    if (result.length) {
      return result;
    }

    return undefined;
  }

  getCommentsCountByPostId(id: number) : number{
    const comments = this.getCommntsByPostId(id);
    return comments ? comments.length : 0;
  }

}
