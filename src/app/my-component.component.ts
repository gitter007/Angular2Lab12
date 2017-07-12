import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: `
    <div>
      <ul>
          <li *ngFor="let item of classes">{{item}}</li>
      </ul>    
      <h3>To upper applied to <em>li elements</em></h3>
      <ul>
          <li upper *ngFor="let item of classes">{{item}}</li>
      </ul>   
    </div>
    <div>
         <div myvisibility [state]="true">I must be visible</div>
         <div myvisibility [state]="false">Can you see me? I'm hiding</div>
    </div>

    <div>
         <div mycolor (currentColor)="showOutputData($event)"  [style.font-size.px]="20" >Click me for new color</div>
    </div>
    <div [ngStyle]="{'font-size': 20+'px'}">
        Current color selection is : {{receivedColor}}
    </div>
  `,
  styles: []
})
export class MyComponentComponent implements OnInit {
  private classes:string[] = ['mwa','fpp','WAA','Big data'];
  constructor() { }

  ngOnInit() {
  }

  public receivedColor:string;
  showOutputData(data):void {
    this.receivedColor = data;
  }  
}
