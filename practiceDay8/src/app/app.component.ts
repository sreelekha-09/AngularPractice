import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    this.lastname.nativeElement.focus();
  }
  title = 'practice8';
  username='';
  firstname='';
  @ViewChild('lastname') lastname:ElementRef;
  greetUser(value)
  {
    this.firstname=value;
    alert(value);
  }
}
