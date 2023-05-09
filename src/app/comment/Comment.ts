import { Profile } from 'src/app/profile/profile';


export interface Comment {
  postId: number;
  profileId: number;
  text: string;
  date: Date;
}

export interface CommentView extends Comment {
  author: Profile;
}
