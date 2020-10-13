import { Directive, TemplateRef, ViewContainerRef,Input, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Directive({
  selector: '[appCustomStructuralDirective]'
})
export class CustomStructuralDirectiveDirective implements OnInit{
  hasView=false;
  constructor(private templateRef:TemplateRef<any>,private viewContainerRef:ViewContainerRef,private usersService:UsersService) { }
  condition=this.usersService.condition;
  ngOnInit(): void {
    if(this.condition && !this.hasView)
    {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.hasView=true;
    }
    else if(!this.condition && this.hasView)
    {
      this.viewContainerRef.clear();
      this.hasView=false;
    }
  }
  
}
