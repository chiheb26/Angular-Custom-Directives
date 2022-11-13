import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomDirectives';
  active : boolean = true;
  display : boolean = true;
  buttonText=this.display?"Hide Notice":"Show Notice";
  displayNotice(){
    this.display=!this.display;
    this.buttonText=this.display?"Hide Notice":"Show Notice";
  
  }
}
