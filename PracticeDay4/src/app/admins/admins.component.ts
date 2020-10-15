import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
  admins=[];
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.admins=this.dataService.admins;
  }

}
