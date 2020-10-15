import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:{name:string,status:string,id:number}
  id:number;
  constructor(private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    //this.id=this.activateRoute.snapshot.params['id'];
    this.activateRoute.params.subscribe((params)=>{
      this.id=params['id'];
    })
  }

}
