import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PostsService } from 'src/app/Service/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  obs$ = new Observable<any>();
  constructor(private postSvc: PostsService) {}

  ngOnInit(): void {
    this.postSvc.getPosts().subscribe((data: any) => {
      this.posts = data;
    });
    // async pipe
    this.obs$ = this.postSvc.getPosts();
  }

  postdata() {
    const post = {
      userId: 1,
      id: 1,
      title: 'test',
      body: 'test',
    };

    this.postSvc.postPosts(post).subscribe(
      (res) => {
        this.posts = [...this.posts, res];
        this.obs$ = of(this.posts);
      },
      (err) => console.log(err),
      () => console.log('complete')
    );
  }
}
