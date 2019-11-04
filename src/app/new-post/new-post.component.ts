import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private postService: PostService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSavePost(){
    let title:string = this.postForm.get('title').value;
    let content:string = this.postForm.get('content').value;
    this.postService.createNewPost(new Post(0, title, content));
    this.router.navigate(['/posts']);
  }
}
