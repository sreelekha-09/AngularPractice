import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private parentMessage=new Subject<string>();
  parentMessageObs=this.parentMessage.asObservable();
  constructor() { }

  sendMessage(message:string)
  {
    this.parentMessage.next(message);
  }
}
