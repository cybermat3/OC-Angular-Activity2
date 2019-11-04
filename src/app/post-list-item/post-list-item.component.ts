import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postSerrvice: PostService) { }

  ngOnInit() {
  }

  isSuccess(){
    return this.post.loveIts > 0;
  }

  isDanger(){
    return this.post.loveIts < 0;
  }

  getColor(){
    return this.isSuccess() ? 'green' : this.isDanger() ? 'red' : '';
  }

  onLoveIt(){
    this.postSerrvice.setLoveIt(this.post);    
  }
  
  onDontLoveIt(){
    this.postSerrvice.setDontLoveIt(this.post);
  }

  onDeletePost(post:Post){
    this.postSerrvice.removePost(post);
  }
}
