import { Component } from '@angular/core';

@Component({
  selector: 'app-calculate-logic',
  templateUrl: './calculate-logic.component.html',
  styleUrls: ['./calculate-logic.component.css']
})
export class CalculateLogicComponent {

  constructor() { }

  firstNumberPlaceholder = 'first number';
  secondNumberPlaceholder = 'second number';
  firstNumber: number;
  secondNumber: number;
  operators: string []=["/", "*", "-", "+"];
  selectedOperator: string = this.operators[0];
  result: number;
  resultView: boolean;

  onSelectedVal(value){
    this.selectedOperator = value;
  }

  getFirstInputVal($event) {
    this.firstNumber = $event;
  }

  getSecondInputVal($event) {
    this.secondNumber = $event;
  }

  onCalculateButtonClick () {
    this.calculate();
    this.inputEraser();
  }

  inputEraser() {
    this.firstNumber = undefined;
    this.secondNumber = undefined;
  }

  calculate () {
    switch (this.selectedOperator) {
      case "/":
        this.result = (this.firstNumber) / (this.secondNumber);
        break;
      case "*":
        this.result = (this.firstNumber) * (this.secondNumber);
        break;
      case "+":
        this.result = (this.firstNumber) + (this.secondNumber);
        break;
      case "-":
        this.result = (this.firstNumber) - (this.secondNumber);
        break;
    }
    this.resultView = false;
  }

  resultHidden() {
    this.resultView = true;
  }
}
