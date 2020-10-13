import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomDirectiveUsingRenderer]'
})
export class CustomDirectiveUsingRendererDirective implements OnInit{
  @HostBinding('style.backgroundColor') backgroundColor:string;
  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }
  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement,'color','blue');
  }
  @HostListener('mouseenter') mouseover(eventData:Event)
  {
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color','green');
    //this.backgroundColor='green';
  }

  @HostListener('mouseleave') mouseleave(eventdata:Event)
  {
   this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent');
   //this.backgroundColor='transparent';
  }
}
