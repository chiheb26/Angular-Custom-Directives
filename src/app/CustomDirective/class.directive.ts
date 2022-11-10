import { Directive, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef,
     private renderer: Renderer2) {

   }
  // or name the variable with the same name as the directive name
  //@Input("appClass")
   //set appClass(value : Object){
   @Input("appClass")
   set display(value : Object){
    let  entries = Object.entries(value);
    //for(let entry of entries){
    for(let [className,condition] of entries){
        //if(entry[1]){
      if(condition){}  
      //this.renderer.addClass(this.element.nativeElement,entry[0]);
      this.renderer.addClass(this.element.nativeElement,className);
      }
    }
  }

