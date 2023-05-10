import { Component, OnInit } from '@angular/core';
import { NumberOrder } from 'src/app/constants/common.constants';
import { Selectbox } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  listOptions: Selectbox[] = [];
  constructor() { }

  ngOnInit(): void {
    this.listOptions = NumberOrder;
  }

  onAddToCart() {
    console.log('bbbb');
  }

  onChange(value: any) {
    console.log(value);
  }
}
