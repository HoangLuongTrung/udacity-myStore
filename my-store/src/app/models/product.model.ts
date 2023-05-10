export interface Selectbox {
  name: string;
  value: string;
}

export interface ResponseProduct {
  data: Product[];
  isSuccess: Boolean;
}

export interface Product {
  id: number;
  type: string;
  price: number;
}