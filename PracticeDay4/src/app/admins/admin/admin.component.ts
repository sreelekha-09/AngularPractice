import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admin:{id:number,name:string,status:string}
  constructor(private dataService:DataService,private route:ActivatedRoute,private router:Router) { }
  id:number;
  ngOnInit(): void {
    this.route.params
    .subscribe((params:Params)=>{
     // this.id=+params['id'];
      this.admin=this.dataService.getAdmin(+params['id']);
    })
  }
  editAdmin()
  {
    this.router.navigate(['/admins',this.admin.id,'edit'],{queryParamsHandling:"preserve"})
  }
}
