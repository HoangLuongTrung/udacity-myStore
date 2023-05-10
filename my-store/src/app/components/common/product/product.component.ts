import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NumberOrder } from 'src/app/constants/common.constants';
import { Selectbox } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: any;
  listOptions: Selectbox[] = NumberOrder;
  constructor(private router: Router) { }

  ngOnInit(): void {}

  onAddToCart() {
    console.log('bbbb');
  }

  onChange(value: number) {
    console.log(value);
  }

  onViewDetail(id: number) {
    this.router.navigateByUrl(`store/detail/${id}`)
  }
}
