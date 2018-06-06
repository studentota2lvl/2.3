import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

  constructor() { }

  @Input() resultData: number;
  @Output() clearBtnClick = new EventEmitter;

  onClearButtonClick() {
    this.clearBtnClick.emit();
  }
}
