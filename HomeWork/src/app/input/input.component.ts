import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent{
  @Input() numberData: Number;
  @Input() variable: string;
  @Output() inputEvent = new EventEmitter();


  constructor() { }

  onInputReady(){
    this.inputEvent.emit(this.numberData);
 }

}
