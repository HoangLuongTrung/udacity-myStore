import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNumberComponent } from './input-number.component';
import { FormsModule } from '@angular/forms';
import { NumberDirective } from 'src/app/directive/onlynumber.directive';

@NgModule({
  declarations: [
    InputNumberComponent,
    NumberDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InputNumberComponent
  ]
})
export class InputNumberModule { }
