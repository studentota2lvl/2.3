import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstNumberPlaceholder = 'first number';
  secondNumberPlaceholder = 'second number';
  firstNumber: number;
  secondNumber: number;
  result: number;

  onFirstInputEvent($event) {
    this.firstNumber = $event;
  }

  onSecondInputEvent($event) {
    this.secondNumber = $event;
  }

  onCalculateButtonClick () {
    this.result = (this.firstNumber) + (this.secondNumber);
    this.inputEraser();
  }

  inputEraser() {
    this.firstNumber = undefined;
    this.secondNumber = undefined;
  }
}
