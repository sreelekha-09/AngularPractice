import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,AfterViewInit {
  @ViewChild(ChildComponent) childComponentRef:ChildComponent;
  constructor(private service:MessageService) { }
  ngAfterViewInit(): void {
   // this.childComponentRef.message="Message from parent Component";
  }
  userSignIn=true;
  ngOnInit(): void {
  }
  alertName(name:string)
  {
    alert(name);
    console.log(name);
  }
  sendMessage1()
  {
    this.service.sendMessage("message1");
  }
  sendMessage2(){
    this.service.sendMessage("message2");
  }
}
