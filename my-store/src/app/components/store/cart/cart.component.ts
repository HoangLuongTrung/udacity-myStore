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
  fullName = '';
  address = '';
  cardCredit = '';
  isSubmit = false;
  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    if (this.productService.listProduct.length === 0) {
      this.router.navigateByUrl('store/not-found');
    }
    const listProduct = _.cloneDeep(this.productService.listProduct)
    this.listProduct = this.formatProductAdded(listProduct);

    this.productService.listProduct = this.listProduct;

    this.total = this.listProduct.reduce((acc, cur) => acc + (+cur.price) * cur.quantity, 0)
  }
  onSubmit(): void {
    this.isSubmit = true;
    if (!this.isValid()) {
      return; 
    }
    this.router.navigateByUrl('store/summary');
    this.productService.setDataSummary({
      total: this.total,
      fullName: this.fullName
    });
    this.productService.listProduct = [];
  }

  onChange(value: string | number, product: Product): void {
    product.quantity = +value;
    this.total = this.listProduct.reduce((acc, cur) => acc + (+cur.price) * cur.quantity, 0)
  }

  onDeleteProduct(value: string | number): void {
    const listProduct = _.cloneDeep(this.listProduct)
    const index = listProduct.findIndex(x => x.id === +value);

    listProduct.splice(index, 1);
    if (listProduct.length === 0) {
      this.router.navigateByUrl('store/not-found');
    }
    this.listProduct = listProduct;
    this.productService.listProduct = listProduct;
  }

  isValid(): boolean {
    const isValidFullName = this.fullName.length >= 3;
    const isValidAddress = this.address.length >= 6;
    const isValidCreditCard = this.cardCredit.length === 16;
    return isValidAddress && isValidFullName && isValidCreditCard;
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
