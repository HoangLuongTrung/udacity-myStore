import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ButtonModule } from '../button/button.module';
import { SelectboxModule } from '../selectbox/selectbox.module';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    SelectboxModule
  ],
  exports: [ProductComponent]
})
export class ProductModule { }
