import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOtherBetterhighlight]'
})
export class OtherBetterhighlightDirective implements OnInit{

  constructor(private element : ElementRef, private renderer : Renderer2) {

   }
   
   @Input()
   deafultColor : string ="transparent";

   @Input("appOtherBetterhighlight")
   highlightColor : string = "pink";
   @Input()
   title : string = "This is a title";
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
