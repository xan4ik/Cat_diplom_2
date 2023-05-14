import { CommentView } from "../comment/Comment";
import { Profile } from "../profile/profile";



export interface Post {
  id: number;
  image: string;
  authorId: number;
  namePost: string;
  textPost: string;
  tagsArray: string[];
}


export interface PostView extends Post{
  author: Profile;
  comments: CommentView[] | undefined;
}
