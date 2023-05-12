import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import _ from "lodash";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  listProduct: Product[];
  total = 0;
  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    if (this.productService.listProduct.length === 0) {
      this.router.navigateByUrl('store/not-found');
    }
    const listProduct = _.cloneDeep(this.productService.listProduct)
    this.listProduct = this.formatProductAdded(listProduct);

    this.productService.listProduct = this.listProduct;

    this.total = this.listProduct.reduce((acc, cur) => acc + (+cur.price)*cur.quantity, 0)
  }
  onSubmit(): void {
    this.router.navigateByUrl('store/summary')
  }

  onChange(value: string| number, product: Product) {
    product.quantity = +value;
    this.total = this.listProduct.reduce((acc, cur) => acc + (+cur.price)*cur.quantity, 0)
    
  }

  private formatProductAdded(products: Product[]): Product[] {
    const data = products.reduce((acc, cur) => {
      const itemExist = acc.find(x => x.id === cur.id);
      if (itemExist) {
        itemExist.quantity += cur.quantity;
      } else {
        acc.push(cur)
      }
      return acc;
    }, [])
    return data;
  }
}
