import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddedModule } from '../../common/product-added/product-added.module';
import { InputModule } from '../../common/input/input.module';
import { ButtonModule } from '../../common/button/button.module';
import { InputNumberModule } from '../../common/input-number/input-number.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CartComponent
  }
];

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProductAddedModule,
    InputModule,
    ButtonModule,
    InputNumberModule,
    FormsModule
  ]
})
export class CartModule { }
