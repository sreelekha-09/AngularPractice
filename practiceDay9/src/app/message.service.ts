import { Injectable } from '@angular/core';

 @Injectable({
   providedIn: 'root'
 })
export class MessageService {
  prevMessage:string;
  constructor() { }
  onNewMessage(message:string)
  {
    console.log("new"+" "+message);
    console.log("prev"+" "+this.prevMessage);
  }
}
