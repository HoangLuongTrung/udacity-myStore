import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getListProduct(): Observable<ResponseProduct> {
    return this.http.get<ResponseProduct>('../assets/data/data.json');
  }
}
