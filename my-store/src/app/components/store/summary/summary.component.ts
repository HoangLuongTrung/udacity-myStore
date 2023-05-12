import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  fullName = '';
  total = 0;
  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.dataSummary$.subscribe(res => {
      if (res) {
        this.fullName = res.fullName;
        this.total = res.total;
      } else {
        this.router.navigateByUrl('store/list')
      }
    })
  }

  onNavigate() {
    this.router.navigateByUrl('store/list')
  }
}
