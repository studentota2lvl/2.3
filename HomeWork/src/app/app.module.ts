import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { CalculateLogicComponent } from './calculate-logic/calculate-logic.component';
import { ValidateDirective } from './calculate-logic/validate.directive';
import { ResultComponent } from './result/result.component';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    CalculateLogicComponent,
    ValidateDirective,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
