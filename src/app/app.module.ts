import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SetBackGroundDirective } from './CustomDirective/setbackground.directive';
import { HighlightDirective } from './CustomDirective/highlight.directive';
import { HoverDirective } from './CustomDirective/hover.directive';
import { BetterhighlightDirective } from './CustomDirective/betterhighlight.directive';
import { OtherBetterhighlightDirective } from './CustomDirective/otherbetterhighlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    SetBackGroundDirective,
    HighlightDirective,
    HoverDirective,
    BetterhighlightDirective,
    OtherBetterhighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
