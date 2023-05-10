import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { ProductModule } from '../common/product/product.module';
import { StoreRoutingModule } from './store-routing.module';

@NgModule({
  declarations: [
    StoreComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    ProductModule,
  ]
})
export class StoreModule { }
