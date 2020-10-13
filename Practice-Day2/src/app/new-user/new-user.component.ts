import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';
import {map,filter} from 'rxjs/operators';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    const customObservable=Observable.create(observer=>{
      let num=0;
      setInterval(()=>{
        observer.next(num);
        if(num==5)
        {
          observer.complete();
        }
        num++;
      },1000);
    })

    customObservable.pipe(filter((data=>{
      return data>0;
    })),map(((data:number)=>{
      return 'number:' + (data+1);
    }))).subscribe(num=>{
      console.log(num)
    })
  }

  createUser(name:string, status:string)
  {
    this.userService.addUser(name,status);
  }
}
