
import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'practice3';
  posts:Post[]=[];
  error=null;
  constructor(private httpService:HttpService){}
  ngOnInit(): void {
    this.getPosts();
    //throw new Error('Method not implemented.');
  }
  addPosts(title:string,content:string)
  {
    let post={'title':title,'content':content};
    this.httpService.addPosts(post).subscribe(res=>console.log(res),(error=>
      {
        this.error=error.message;
      }));
  }
  getPosts()
  {
    this.httpService.getPosts().subscribe(
      (response)=>{
        this.posts=response;
      },(error=>{
        this.error=error.message;
      })
    )
  }
  deletePosts()
  {
    this.httpService.deletePosts()
    .subscribe(res=>console.log(res));
  }
}
