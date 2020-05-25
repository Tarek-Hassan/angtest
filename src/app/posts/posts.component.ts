import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts_arr = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    console.log('on init');
    
    this.postService.sendGetRequest().subscribe((post: any[])=>{
      console.log(post);
      this.posts_arr = post;
      
    })
  }

}
