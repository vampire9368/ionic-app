import { Profile } from './profile.model';

export interface Comment {
  id: number;
  body: string;
  createdAt: string;
  author: Profile;
}

export interface CommentsArray extends Array<Comment>{
   [position: number]: Comment;
    length: number;
    unshift(item: Comment): number;
}

