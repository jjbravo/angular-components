import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { CustomInputComponent } from './custom-input/custom-input.component';



@NgModule({
  declarations: [CustomCardComponent, CustomInputComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CustomCardComponent,
    CustomInputComponent
  ]
})
export class CommonContentModule { }
