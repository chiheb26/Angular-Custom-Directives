import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective implements OnInit{

  constructor(private element : ElementRef, private renderer : Renderer2) {

   }
   
   @Input()
   deafultColor : string ="transparent";

   @Input()
   highlightColor : string = "pink";

   @HostBinding("style.backgroundColor")
   background : string =this.deafultColor;
   
   @HostBinding("style.border")
   border : string ="none";

   ngOnInit(){
    this.background=this.deafultColor;
   }
   @HostListener("mouseenter")
   onmouseover(){
    this.background=this.highlightColor;
    this.border="red 2px solid";
   }

   @HostListener("mouseleave")
   onmouseout(){
    this.background=this.deafultColor;
    this.border="none";
   }

}
