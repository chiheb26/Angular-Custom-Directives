import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:"[setBackground]"// wrap it inside [] to use it as an attribute

})
export class SetBackGroundDirective implements OnInit{
    
    //private element: ElementRef;
    constructor(private element: ElementRef){
       // element.nativeElement.style.backgroundColor="#C8E6C9";
        this.element=element;
    }

    ngOnInit(){
        this.element.nativeElement.style.backgroundColor="#C8E6C9";

    }
}