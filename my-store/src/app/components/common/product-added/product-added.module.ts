import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAddedComponent } from './product-added.component';
import { InputModule } from '../input/input.module';

@NgModule({
  declarations: [
    ProductAddedComponent
  ],
  imports: [
    CommonModule,
    InputModule
  ],
  exports: [
    ProductAddedComponent
  ]
})
export class ProductAddedModule { }
