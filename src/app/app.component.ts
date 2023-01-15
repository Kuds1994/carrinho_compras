import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { faShoppingCart, faXmark, faTrash } from '@fortawesome/free-solid-svg-icons';

interface ICart {

  products: any[];
  total: number;
  subtotal: number;
  discount: number;
  
}

interface IDiscount {

  name: string;
  value: number;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('toggleClick', [
      state('true', style({
        right: 0
      })),
      state('false', style({
        right: '-400px'
      })),
      transition('true => false', animate('400ms ease')),  // animation timing
      transition('false => true', animate('400ms ease'))
    ])
  ]
})
export class AppComponent {

  faShoppingCart = faShoppingCart 
  faXmark = faXmark
  faTrash = faTrash

  discountText = ""
  
  title = 'carrinho_compras';

  openCart = 'false';

  products = [{
    id: "1",
    description: "Item 1",
    value: 21
  },
  {
    id: "2",
    description: "Item 2",
    value: 50.55
  },
  {
    id: "3",
    description: "Item 3",
    value: 70.26
  },

  {
    id: "4",
    description: "Item 4",
    value: 70
  },
  {
    id: "5",
    description: "Item 5",
    value: 73.40
  },
  {
    id: "6",
    description: "Item 6",
    value: 90.26
  }

  ]

  carrinho: ICart = {
    products: [],
    discount: 0,
    subtotal: 0,
    total: 0
  };

  list_discounts: IDiscount[] = [
    {name: "dis10", value: 0.1},
    {name: "dis20", value: 0.2},
    {name: "dis5", value: 0.05}
  ]

  addToCart(product: any): void{


    const p = this.carrinho.products.findIndex((p) =>

      product.id == p.id

    )


    if(p > -1) {

      this.carrinho.products[p].quantity! += 1

    } else {

      product.quantity = 1
      this.carrinho.products.push(product)

    }
    
    this.sumUp()   
    
    this.openCart = 'true'

  }

  sumUp() {

    this.carrinho.subtotal = this.carrinho.products.reduce((a, b) =>{

      return a + (b.value * b.quantity!);

    }, 0)

    const totalWithDiscount = this.carrinho.subtotal - (this.carrinho.subtotal * this.carrinho.discount)

    this.carrinho.total = totalWithDiscount < 0 ? 0 : totalWithDiscount
    
  }

  addQtdToCart(id: number) {

    const p = this.carrinho.products.findIndex((p) =>

      id == p.id

    )

    this.carrinho.products[p].quantity! += 1    

    this.sumUp()

  }

  removeQtdToCart(id: number){


    const p = this.carrinho.products.findIndex((p) =>

      id == p.id

    )

    if(this.carrinho.products[p].quantity! - 1 == 0) {

      this.carrinho.products.splice(p, 1)

      if(this.carrinho.products.length == 0){

        this.carrinho = {
          products: [],
          discount: 0,
          subtotal: 0,
          total: 0
        };

        this.discountText = ""

      }


    } else {

      this.carrinho.products[p].quantity! -= 1 

    }   
    
    this.sumUp()
  
  }

  applyDiscount(value: string){

    const discount = this.list_discounts.filter(d => d.name === value)[0]

    if(discount){

      this.carrinho.discount = discount.value
      this.discountText = "O cupom de " + discount.value * 100 + " foi aplicado"

    }  else {
      
      this.carrinho.discount = 0
      this.discountText = "O cupom não foi encontrado"

    }
      

    this.sumUp()

  }

  emptyCart(id: number){

    const p = this.carrinho.products.findIndex((p) =>

      id == p.id

    )
  
    this.carrinho.products.splice(p, 1)  

    if(this.carrinho.products.length == 0){

      this.carrinho = {
        products: [],
        discount: 0,
        subtotal: 0,
        total: 0
      };

      this.discountText = ""
    }

    this.sumUp()

  }

  fecharCarrinho(){

    this.openCart = 'false'

  }

  abrirCarrinho(){

    this.openCart = 'true'

  }


}
