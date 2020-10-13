import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { UsersService } from '../users.service';
import {take} from 'rxjs/operators';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit,OnDestroy {
  @Input() user:{name:string,status:string};
  @Input() id:number; 
  constructor(private userService:UsersService) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    throw new Error('Method not implemented.');
  }
  private subscription: Subscription;
  ngOnInit(): void {
    this.subscription= interval(1000).pipe(take(5)).subscribe((num=>{
      console.log(num);
    }),(err=>console.log(err)),(()=>console.log("completed")));
  }
  customObservable()
  {
    this.userService.observable.subscribe((val=>console.log(val)),(err=>console.log(err)),(()=>console.log('complete')))
    this.userService.demoObservable().subscribe((val=>console.log(val)),(err=>console.log(err)),(()=>console.log('completed')));
  }
  updateStatus(status:string)
  {
    this.userService.updateStatus(this.id,status);
    this.customObservable();
  }
}
