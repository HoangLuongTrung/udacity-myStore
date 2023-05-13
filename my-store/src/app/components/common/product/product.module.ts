import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { ButtonModule } from '../button/button.module';
import { SelectboxModule } from '../selectbox/selectbox.module';
@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    ButtonModule,
    SelectboxModule
  ],
  exports: [ProductComponent]
})
export class ProductModule { }
