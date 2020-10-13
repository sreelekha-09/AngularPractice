import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  condition:boolean=true;
  observable=of(1,2,3);
  users = [
    {
      name: 'Sreelekha',
      status: 'online'
    },
    {
      name: 'Bhavishya',
      status: 'offline'
    },
    {
      name: 'Swetha',
      status: 'Online'
    }
  ];
  numbers=[1,2,3];
  constructor(private loggingService:LoggingService) { 
  }
  //observable.subcribe(observer);
  getNumbers():Observable<number[]>{
    return of(this.numbers);
  }

  addUser(name:string, status:string)
  {
    this.users.push({name,status});
    this.loggingService.logStatusChange(status);
    
  }
  demoObservable():Observable<number>{
    return new Observable((observer)=>{
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    })
  }
  updateStatus(id:number,status:string)
  {
    this.users[id].status=status;
    this.loggingService.logStatusChange(status);
  };
  
}
