import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'console';
import { ToastrService } from 'ngx-toastr';
import { NumberOrder } from 'src/app/constants/common.constants';
import { Product, Selectbox } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  listOptions: Selectbox[] = NumberOrder;
  id = 0;
  product: Product;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router, private toastr: ToastrService) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id && +id > 0) {
      this.id = +id;
    }
  }

  ngOnInit(): void {
    this.productService.product$.subscribe(x => {
      this.product = x;
    })
    if (!this.product) {
      this.router.navigateByUrl('store/list');
    }
  }

  onAddToCart() {
    this.productService.productAddedToCart(this.product);
    this.toastr.success('Added to cart success!', 'Inform!');
  }

  onChange(value: number) {
    this.product.quantity = +value;
  }
}