import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appValidate]'
})
export class ValidateDirective {
  pattern: RegExp = /^\d+$/;
  @HostListener('input') onValueChange() {
    this.validateFunction();
  }

  // @Output("successfulValidation") validationResult: boolean;
  @Input("appValidate") inputData: string;
  constructor(private el: ElementRef) { };

  validateFunction() {
    if (this.inputData === "") {
        this.inputColorAlert("", "", "");
        // this.validationResult = false;
    } else {
      if (this.pattern.test(this.inputData)) {
          this.inputColorAlert("", "", "");
          // this.validationResult = true;
      } else {
          this.inputColorAlert("red", "2px", "5px");
          // this.validationResult = false;
      }
    }
  }

  inputColorAlert(color: string, borderSize: string, radiusSize: string) {
    // console.log(this.el.nativeElement.style) for showing all properties
    this.el.nativeElement.style.borderColor = color;
    this.el.nativeElement.style.borderWidth = borderSize;
    this.el.nativeElement.style.borderRadius = radiusSize;

  }
}
