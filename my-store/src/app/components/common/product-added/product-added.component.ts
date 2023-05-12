import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-added',
  templateUrl: './product-added.component.html',
  styleUrls: ['./product-added.component.scss']
})
export class ProductAddedComponent implements OnInit {
  @Input() product: Product;
  @Output() valueChange = new EventEmitter<string | number>();
  constructor() { }

  ngOnInit(): void {
  }

  onChange(value: string | number) {
    this.valueChange.emit(value);
  }
}
