import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  
  posts: Post[];
  postSubscription: Subscription;
  
  constructor(private postService: PostService) { }
  
  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPosts();
  }
  
  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }
}
