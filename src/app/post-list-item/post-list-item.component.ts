import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../Class/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

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

  setLoveIt(){
    this.post.loveIts++;
  }
  
  setDontLoveIt(){
    this.post.loveIts--;
  }
}
