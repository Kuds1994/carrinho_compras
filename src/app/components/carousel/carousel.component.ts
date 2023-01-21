import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit  {

  @Input() productsType: string = '';
  @Input() carouselTitle: string = '';

  products: Product[] = [];

  constructor(private productService: ProductService){

    

  }

  ngOnInit(): void {
    
    this.products = this.productService.getProductByGender(this.productsType)
    

  }

}
