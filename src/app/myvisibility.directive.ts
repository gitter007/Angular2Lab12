import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[myvisibility]'
})
export class MyvisibilityDirective {
  @Input() state: boolean;
  constructor() { 
  }

  @HostBinding('style.visibility') myBG;
  ngOnInit(){ // reached after all bound properties are initilized
    if(this.state)
      this.myBG = 'visible';
    else
      this.myBG = 'hidden';
  }

}
