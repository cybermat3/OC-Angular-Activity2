import { Component } from '@angular/core';
import { Post } from './Class/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lipsum: string = 'Vivamus in fermentum magna, imperdiet vestibulum purus. Aliquam sed urna eget mauris accumsan sollicitudin vitae ac purus. Cras lacus felis, dapibus at consequat sed, bibendum quis nisl. Donec dignissim, libero.';

  posts: Array<Post> = [];
  
  constructor(){
    this.posts.push(new Post("Mon premier post", this.lipsum, 1));
    this.posts.push(new Post("Mon deuxième post", this.lipsum, -1));
    this.posts.push(new Post("Encore un post", this.lipsum, 0));
  }
}
