import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private element : ElementRef,private renderer : Renderer2) {

   }

  @Input("appStyle")
  set setStyle(styles: Object){
    let entries =Object.entries(styles);
    //entries.forEach((entry)=>{this.renderer.setStyle(this.element.nativeElement,entry[0],entry[1])});
    entries.forEach(([key,value])=>{this.renderer.setStyle(this.element.nativeElement,key,value)});
  }
}
