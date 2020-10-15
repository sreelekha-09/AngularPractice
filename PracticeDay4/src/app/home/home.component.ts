import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private authService:AuthService) { }

  ngOnInit(): void {
  }
  loadUsers(id:number)
  {
    // this.router.navigate(['/users'],{relativeTo:this.activatedRoute});
    this.router.navigate(['/admins',id,'edit'],{queryParams:{writable:'1'},fragment:'fragment'});
  }
  signIn()
  {
    this.authService.signIn();
  }
  signOut()
  {
    this.authService.signOut();
  }
}
