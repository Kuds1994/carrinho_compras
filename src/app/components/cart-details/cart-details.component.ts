import { Component } from '@angular/core';
import { faShoppingCart, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { DiscountService } from 'src/app/services/discount/discount.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent {

  faShoppingCart = faShoppingCart 
  faXmark = faXmark
  faTrash = faTrash

  cart!: Cart
  discountText = ""

  constructor(private cartService:CartService, private discountService:DiscountService){
    this.cart = this.cartService.getCart()
  }
  
  addQtdToCart(id: Product) {

    this.cartService.addQtdToCart(id)

  }

  removeQtdToCart(id: number){

    this.cart = this.cartService.removeQtdToCart(id)   
  
  }

  emptyCart(id: number){

    this.cart = this.cartService.emptyCart(id)

  }

  applyDiscount(value: string){

    const discount = this.discountService.applyDiscount(value);

    if(discount){

      this.cart.discount = discount.value
      this.discountText = "O cupom de " + discount.value * 100 + " foi aplicado"

    }  else {
      
      this.cart.discount = 0
      this.discountText = "O cupom não foi encontrado"

    }
      

  }

}
