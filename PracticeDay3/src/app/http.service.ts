import { JsonPipe } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError, map, retry,tap} from 'rxjs/operators';
import {Post} from './post.model';
@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnInit{

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    this.getPosts();
    //throw new Error('Method not implemented.');
  }
  addPosts(post)
  {
    return this.http.post<Post>('https://users-19918.firebaseio.com/posts.json',post,{
      observe:'response'
    })
    .pipe(
      retry(3),
      catchError(this.handleError));
  }
  getPosts()
  {
    return (this.http.get<Post>('https://users-19918.firebaseio.com/posts.json',
    {
      headers: new HttpHeaders({'Custom-Header':'customHeader'}),
      params: new HttpParams().set('print','pretty'),
      responseType:'json'
    }
    )
    .pipe(
      map((response)=>{
        let posts:Post[]=[];
        for(let key in response)
        {
          posts.push({...response[key],id:key});
        }
        return posts;
      })
    )
    )
  }
  deletePosts()
  {
    return (this.http.delete(`https://users-19918.firebaseio.com/posts.json`,
    {
      observe: 'events'
    })
    .pipe(
      tap(event=>{
        console.log(event);
        if(event.type===HttpEventType.Sent)
        {
          console.log('sent');
        }
        if(event.type===HttpEventType.Response){
          console.log('response');
        }
      })
    )
    );
    
  }
  private handleError(error:HttpErrorResponse)
  {
    if(error.error instanceof ErrorEvent)
    {
      console.error('Client or network side error', error.error.message);
    }
    else{
      console.error('backend error '+`code: ${error.status}`);
    }
    return throwError(
      'Error occured try later'
    )
  }
}
