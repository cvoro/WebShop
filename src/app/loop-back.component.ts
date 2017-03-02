import {Component} from '@angular/core';

@Component({
  selector: 'loop-back',
  template: `
    <input #box (keyup.enter)="onKey(box.value)" (blur)="onKey(box.value)">
   <ul> <li *ngFor="let val of values">{{val}}</li></ul>
    
  `
})
export class LoopbackComponent {
  values = [];
  onKey(value: string) {
    this.values.push(value);
  }
}
