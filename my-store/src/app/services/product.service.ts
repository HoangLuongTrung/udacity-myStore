import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product, ResponseProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _productAdded = new BehaviorSubject<Product | null>(null);
  productAdded$ = new BehaviorSubject<Product | null>(null);
  private _product = new BehaviorSubject<Product | null>(null);
  product$ = this._product.asObservable();
  listProduct: Product[] = [];
  constructor(private http: HttpClient) { }

  getListProduct(): Observable<ResponseProduct> {
    return this.http.get<ResponseProduct>('../assets/data/data.json');
  }

  setProduct(product: Product): void {
    this._product.next(product);
  }
  productAddedToCart(product: Product): void {
    this._productAdded.next(product);
    this.setListProduct(product);
  }

  private setListProduct(product: Product): any {
    return this.listProduct.push(product);
  }
}
