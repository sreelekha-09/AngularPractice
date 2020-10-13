import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice2';
  users:{name:string,status:string}[]=[];
  condtion:boolean=true;
  constructor(private userService : UsersService){}

  ngOnInit()
  {
    this.users= this.userService.users;
  }
}
