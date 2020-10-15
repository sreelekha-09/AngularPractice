import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users=[
    {name:'sree',status:'online',id:1},
    {name:'bhavishya',status:'offline',id:2},
    {name:'swetha',status:'online',id:3}
  ];
  admins=[
    {name:'sreeA',status:'online',id:1},
    {name:'bhavishyaA',status:'offline',id:2},
    {name:'swethaA',status:'online',id:3}
  ];
  constructor() { }
  getAdmin(id: number) {
    const admin = this.admins.find(
      (data) => {
        console.log(data.id===id);
        return data.id === id;
      }
    );
   
    return admin;
  }
  updateAdmin(id:number,name:string,status:string)
  {
    const admin=this.admins.find(
      (data)=>{
        return data.id===id;
      }
    );
    if(admin)
    {
      admin.name=name;
      admin.status=status;
    }
  }
}
