import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductModule } from '../../common/product/product.module';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  }
];

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProductModule
  ]
})
export class ListModule { }
