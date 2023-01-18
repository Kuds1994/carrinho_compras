import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [{
    id: 1,
    description: "Item 1",
    value: 21
  },
  {
    id: 2,
    description: "Item 2",
    value: 50.55
  },
  {
    id: 3,
    description: "Item 3",
    value: 70.26
  },

  {
    id: 4,
    description: "Item 4",
    value: 70
  },
  {
    id: 5,
    description: "Item 5",
    value: 73.40
  },
  {
    id: 6,
    description: "Item 6",
    value: 90.26
  }

  ]

  constructor() { }


  getProducts() {
    return this.products;
  }
  
}
