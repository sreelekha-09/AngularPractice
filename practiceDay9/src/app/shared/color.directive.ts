import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit{

  constructor(private elementRef:ElementRef) { }
  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor="blue";
  }

}
