import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';
import { post } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  posts: Post[] = [];
  postSubject = new Subject<Post[]>();
  
  constructor(){}
  
  getPosts(){
    let lipsum: string = 'Vivamus in fermentum magna, imperdiet vestibulum purus. Aliquam sed urna eget mauris accumsan sollicitudin vitae ac purus. Cras lacus felis, dapibus at consequat sed, bibendum quis nisl. Donec dignissim, libero.';

    this.posts.push(new Post(1, "Mon premier post", lipsum, 1));
    this.posts.push(new Post(2, "Mon deuxième post", lipsum, -1));
    this.posts.push(new Post(3, "Encore un post", lipsum));
    this.emitPosts();
  }

  emitPosts(){
    this.posts.sort((a, b) => {
      if (a.created_at > b.created_at){
        return -1;
      } else if (a.created_at < b.created_at) {
        return 1;
      }
      return 0;
    })
    this.postSubject.next(this.posts);
  }

  createNewPost(newPost: Post){
    newPost.id = this.posts[this.posts.length - 1].id + 1;
    this.posts.push(newPost);
    this.emitPosts();
  }

  removePost(post: Post){
    let postIndex = this.posts.findIndex(
      (elt) => {
        if (elt === post ){
          return true;
        }
      }
    );
    this.posts.splice(postIndex, 1);
    this.emitPosts();
  }

  getSinglePost(id: number){
    return new Promise(
      (resolve, reject) => {
        let postIndex = this.posts.findIndex(
          (post) => {
            if (post.id === id){
              return true;
            }
          }
        );
        if (postIndex !== -1){
          resolve(this.posts[postIndex]);
        } else {
          reject();
        }
      }
    );
  }

  private getIndex(post: Post):number {
    return this.posts.findIndex(
      (elt) => {
        if (elt === post ){
          return true;
        }
      }
    );
  }

  setLoveIt(post: Post){
    this.posts[this.getIndex(post)].loveIts++;
    this.emitPosts();
  }
  
  setDontLoveIt(post: Post){
    this.posts[this.getIndex(post)].loveIts--;
    this.emitPosts();
  }
}
