import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NumberOrder } from 'src/app/constants/common.constants';
import { Product, Selectbox } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product;
  listOptions: Selectbox[] = NumberOrder;
  constructor(private router: Router, private productService: ProductService, private toastr: ToastrService) { }

  ngOnInit(): void {}

  onAddToCart() {
    this.productService.productAddedToCart(this.product);
    this.toastr.success('Added to cart success!', 'Inform!');
  }

  onChange(value: number) {
    this.product.quantity = value;
  }

  onViewDetail(product: Product) {
    this.productService.setProduct(product);
    this.router.navigateByUrl(`store/detail/${product.id}`)
  }
}
