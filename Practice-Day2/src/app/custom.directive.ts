import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appCustom]'
})

export class CustomDirective implements OnInit{
    constructor(private elementRef:ElementRef){
    }
    ngOnInit(): void {
        this.elementRef.nativeElement.style.color='blue';
    }
    
}