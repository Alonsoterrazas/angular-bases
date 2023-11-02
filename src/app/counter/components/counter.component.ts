import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `<hr>
  <h3>counter : {{counter}}</h3>

  <button (click)="increaseBy(1)">+1</button>
  <button (click)="reset()">reset</button>
  <button (click)="increaseBy(-1)">-1</button>

  <hr>`
})

export class CounterComponent  {
  public counter:number = 10;

  public increaseBy( value: number): void {
    this.counter+= value;
  }

  public reset(): void{
    this.counter= 10;
  }

}
