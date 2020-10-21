import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges,OnInit {
  @Input() signIn=true;
  @Output() alertEvent=new EventEmitter<string>();
  name='sree';
  constructor(private service:MessageService) { }
  ngOnChanges(changes: SimpleChanges): void {
    const value=changes['signIn'];
    if(value.currentValue===true)
    {
      this.message="welcome";
    }
    else
    {
      this.message="please log in";
    }
  }
  greetName()
  {
    alert(this.name);
  }
  message:string;
  callParentAlert()
  {
    this.alertEvent.emit(this.name);
    
  }
  // private _signIn:boolean;
  // get signIn():boolean{
  //   return this._signIn;
  // }
  // @Input()
  // set signIn(value){
  //   this._signIn=value;
  //   if(value===true)
  //   {
  //     this.message="welcome";
  //   }
  //   else
  //   {
  //     this.message="please log in";
  //   }
  // }
  ngOnInit(): void {
    this.service.parentMessageObs.subscribe((message)=>{
      alert(message);
    })
  }

}
