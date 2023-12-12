import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  url = environment.apiUrl;
  constructor(private _http: HttpClient) {}

  getPosts() {
    return this._http.get(this.url);
  }

  postPosts(body: any) {
    return this._http.post(this.url, body);
  }
}
