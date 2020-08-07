import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Article, CommentsArray, Comment } from '../models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private apiService: ApiService) { }

  getAll(slug: string): Observable<CommentsArray>{
    return this.apiService.get(`/articles/${slug}/comments`).pipe(map(data => data.comments as CommentsArray));
  }

  addComment(slug, payLoad): Observable<Comment> {
    return this.apiService.post(`/articles/${slug}/comments`, { comment: { body: payLoad } }).pipe(map(data => data.comment as Comment));
  }

  destroy(commentId, articleSlug) {
    return this.apiService
           .delete(`/articles/${articleSlug}/comments/${commentId}`);
  }
}
