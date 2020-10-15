import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {
  admin:{id:number,name:string,status:string}
  adminName='';
  adminStatus='';
  writable=false;
  constructor(private dataService:DataService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe((queryParams:Params)=>{
      this.writable=queryParams['writable']==='1'? true: false;
    })
    this.admin=this.dataService.getAdmin(1);
    this.adminName=this.admin.name;
    this.adminStatus=this.admin.status;
  }
  updateAdmin()
  {
    this.dataService.updateAdmin(this.admin.id,this.admin.name,this.admin.status);
  }

}
