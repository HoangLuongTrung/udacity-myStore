import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NumberOrder } from 'src/app/constants/common.constants';
import { Selectbox } from 'src/app/models/product.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  listOptions: Selectbox[] = NumberOrder;
  constructor(private activatedRoute: ActivatedRoute) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {}

  onAddToCart() {
    console.log('bbbb');
  }

  onChange(value: number) {
    console.log(value);
  }
}
